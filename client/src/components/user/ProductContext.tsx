"use client";
import {
  createContext,
  ReactNode,
  useState,
} from "react";

export const ProductContext = createContext({
  cart: [],
  setCart: () => {},
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [email, setCart] = useState<String>({});

  return (
    <ProductContext.Provider value={{ email, setCart } as any}>
      {children}
    </ProductContext.Provider>
  );
};
