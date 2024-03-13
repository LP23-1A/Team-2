"use client";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0();
  const router = useRouter();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/admin/adminlogin", {
        email,
        password,
      });
      router.push("dashboard");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex items-center h-[100vh]">
      <div className="w-[404px] box-border mx-auto items-center flex flex-col gap-8">
        <h1 className=" text-[32px] font-bold ">Нэвтрэх</h1>
        <div className="w-[404px] box-border mx-auto flex flex-col gap-3 ">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px]">Таны имэйл </p>
            <input
              className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
              type="email"
              name="email"
              placeholder="Имэйл"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px]">Нууц үг </p>
            <input
              className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
              type="text"
              name="password"
              placeholder="Нууц үгээ оруулна уу"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-black text-white rounded-[8px] h-[56px] w-[404px]  "
          onClick={handleLogin}
        >
          Нэвтрэх
        </button>
        <button
          onClick={() => loginWithRedirect()}
          className="bg-[#F7F7F8] border-gray-300 border-2 rounded-[8px] w-[404px] h-[56px]  "
        >
          Google-ээр нэвтрэх
        </button>
      </div>
    </div>
  );
};

export default login;