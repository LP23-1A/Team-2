"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const UserContext = createContext({
  email: "",
  setEmail: (mail: string) => mail,
});

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <UserContext.Provider value={{ email, setEmail } as any}>
      {children}
    </UserContext.Provider>
  );
};
