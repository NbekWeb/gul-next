"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/app/utils/api"; // Import your `api` utility

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch categories using your `api` utility
  const getCategory = async () => {
    try {
      const response = await api({
        url: "/flower/categories/", // Replace with your endpoint
        method: "GET",
      });
      setCategories(response.data); // Set the fetched categories
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch categories on initial render
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
