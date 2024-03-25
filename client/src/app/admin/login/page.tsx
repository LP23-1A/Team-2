"use client";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/admin/adminlogin",
        {
          email,
          password,
        }
      );
      if (response.data.role === "user") {
        router.push("../../user/dashboard");
      } else if (response.data.role === "admin") {
        router.push("dashboard");
      }
    } catch (error: any) {
      if (error.response.data.message === "Invalid login") {
        setErrorMessage("Username and password wrong");
      }
    }
  };
  const handleJump = () => {
    router.push("signUp");
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
              type="password"
              name="password"
              placeholder="Нууц үгээ оруулна уу"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="font-semibold text-[16px] text-red-600 ">
              {errorMessage}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
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
          <p
            className=" text-blue-600 text-center cursor-pointer "
            onClick={handleJump}
          >
            Бүртгүүлэх
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
