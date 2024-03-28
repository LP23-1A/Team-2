"use client";
import { createContext, ReactNode, useState } from "react";

export const ProductContext = createContext({
  cart: [],
  setCart: () => {},
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<String>([]);
  return (
    <ProductContext.Provider value={{ cart, setCart } as any}>
      {children}
    </ProductContext.Provider>
  );
};
