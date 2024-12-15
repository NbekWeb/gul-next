import axios from 'axios'

// Axios instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

// Queue to store requests while token is being refreshed
let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (token) {
      prom.resolve(token)
    } else {
      prom.reject(error)
    }
  })
  failedQueue = []
}

// API wrapper function
export const api = ({ url, open = false, ...props }) => {
  let token = localStorage.getItem('access_token')

  if (token) token = `Bearer ${token}`

  if (!open) {
    props.headers = {
      ...props.headers,
      Authorization: props.headers?.Authorization || token
    }
  }

  return instance({
    url,
    ...props
  })
}

async function refreshTokenAndRetry(originalRequest) {
  try {
    const refresh_token = localStorage.getItem('refresh_token')

    if (!refresh_token) {
      Clear()
      throw new Error('No refresh token available')
    }

    const { data } = await instance.post('/token/refresh/', { refresh: refresh_token })

    if (data?.access) {
      const newToken = `Bearer ${data.access}`

      localStorage.setItem('access_token', data.access)
      processQueue(null, newToken)

      originalRequest.headers['Authorization'] = newToken

      return instance(originalRequest)
    } else {
      Clear()
      throw new Error('Invalid refresh token response')
    }
  } catch (refreshError) {
    processQueue(refreshError, null)
    Clear()
    throw refreshError
  } finally {
    isRefreshing = false
  }
}

// Axios interceptor for handling token expiration
function createAxiosResponseInterceptor() {
  instance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config

      // Handle 401 errors
      if (originalRequest.url.includes('/token/refresh/') && error.response?.status === 401) {
        Clear()
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: token => {
                originalRequest.headers['Authorization'] = token
                resolve(instance(originalRequest))
              },
              reject: err => reject(err)
            })
          })
        }

        isRefreshing = true

        try {
          return await refreshTokenAndRetry(originalRequest)
        } catch (refreshError) {
          Clear()

          return Promise.reject(refreshError)
        }
      }

      return Promise.reject(error)
    }
  )
}

// Clear tokens and redirect to login
function Clear() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  window.location.href = '/login'
}

// Initialize the interceptor
createAxiosResponseInterceptor()
