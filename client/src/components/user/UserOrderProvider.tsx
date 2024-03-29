'use client'
import React, { createContext, useState } from "react";
export const UserOrderContext = createContext({});

export const UserOrderProvider = ({ children }: any) => {

  const [orderData, setOrderData] = useState<any>([]);

  const increaseCart = (_id: string) => {
    const result: any = orderData.find((productItem: any) => productItem._id === _id);
    if (result) {
      setOrderData(orderData.map((productItem: any) => productItem._id === _id ? { ...productItem, quantity: productItem.quantity + 1 } : productItem));
    } else {
      setOrderData([...orderData, { _id, quantity: 1 }]);
    }
  };

  const decreaseCart = (_id: string) => {
    const result = orderData.find((productItem: any) => productItem._id === _id);
    if (result?.quantity === 1) {
      setOrderData(orderData.filter((productItem: any) => productItem._id !== _id));
    } else {
      setOrderData(
        orderData.map((productItem: any) =>
          productItem._id === _id ? { ...productItem, quantity: productItem.quantity - 1 } : productItem
        )
      );
    }
  };

  const removeCart = (_id: any) => {
    const result = orderData.find((productItem: any) => productItem._id === _id);
    if (result) {
      setOrderData(orderData.filter((productItem: any) => productItem._id !== _id));
    }
  };

  return (
    <UserOrderContext.Provider value={{ orderData, setOrderData, increaseCart, decreaseCart, removeCart, }} >
      {children}
    </UserOrderContext.Provider>
  );
};