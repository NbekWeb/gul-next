"use client"; // Required for using state and effects

import {
  createContext,
  useState,
  useEffect,
  useContext
} from "react";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  // Initialize the state with a function that checks if we're on the client side
  const [ordersLength, setOrdersLength] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Access localStorage only on the client side
      const storedOrders = localStorage.getItem("orders");
      return storedOrders ? JSON.parse(storedOrders).length : 0;
    }
    return 0;
  });

  const [opened, setOpened] = useState(false);
  const [logined, setLogined] = useState(false);

  // Check if token exists only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      let token = localStorage.getItem('access_token');
      setLogined(!!token);
    }
  }, []);

  useEffect(() => {
    // Sync orders length with localStorage when the component mounts
    if (typeof window !== "undefined") {
      const storedOrders = localStorage.getItem("orders");
      if (storedOrders) {
        setOrdersLength(JSON.parse(storedOrders).length);
      }
    }
  }, []);

  const updateOrders = (newOrders) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orders", JSON.stringify(newOrders)); // Update localStorage
    }
    setOrdersLength(newOrders.length); // Update state
  };

  const toggleOpened = () => setOpened(prevOpened => !prevOpened);

  const updatLogined = () => {
    if (typeof window !== "undefined") {
      let token = localStorage.getItem('access_token');
      setLogined(!!token);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        ordersLength,
        updateOrders,
        opened,
        toggleOpened,
        logined,
        updatLogined
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOrders = () => useContext(OrdersContext);
