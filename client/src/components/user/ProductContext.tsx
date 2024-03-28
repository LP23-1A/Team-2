"use client";
import {
  createContext,
  ReactNode,
  useState,
} from "react";

export const ProductContext = createContext({
  cart: [],
  addtocart: () => { },
  setCart: () => { },
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<String>([]);
  console.log(cart)
  const addtocart = (): any => {
    console.log(cart)
    // setCart([...cart],)
  }

  return (
    <ProductContext.Provider value={{ cart, setCart, addtocart } as any}>
      {children}
    </ProductContext.Provider>
  );
};
