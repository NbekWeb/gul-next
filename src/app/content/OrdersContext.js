// app/context/OrdersContext.js
"use client"; // Required for using state and effects

import { createContext, useState, useEffect, useContext } from "react";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [ordersLength, setOrdersLength] = useState(() => {
    if (typeof window !== "undefined") {
      // Initialize from localStorage
      const storedOrders = localStorage.getItem("orders");
      return storedOrders ? JSON.parse(storedOrders).length : 0;
    }
    return 0;
  });

  const [opened, setOpened] = useState(false); 

  useEffect(() => {
    // Sync orders length with localStorage
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrdersLength(JSON.parse(storedOrders).length);
    }
  }, []);

  const updateOrders = (newOrders) => {
    localStorage.setItem("orders", JSON.stringify(newOrders)); // Update localStorage
    setOrdersLength(newOrders.length); // Update state
  };

  const toggleOpened = () => setOpened(prevOpened => !prevOpened); 

  return (
    <OrdersContext.Provider value={{ ordersLength, updateOrders, opened, toggleOpened }}>
      {children}
    </OrdersContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOrders = () => useContext(OrdersContext);
