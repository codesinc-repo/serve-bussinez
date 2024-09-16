import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState([]);

  // Compute cart item count
  const cartItemCount = orderDetails.length;

  // Function to add a new item to the cart
  const addToCart = (newOrder) => {
    setOrderDetails((prevOrders) => [...prevOrders, newOrder]);
  };

  // Function to remove an item from the cart
  const removeOrder = (orderId) => {
    setOrderDetails((prevOrders) =>
      prevOrders.filter((order) => order.orderId !== orderId)
    );
  };

  return (
    <OrderContext.Provider value={{ orderDetails, addToCart, removeOrder, cartItemCount }}>
      {children}
    </OrderContext.Provider>
  );
};
