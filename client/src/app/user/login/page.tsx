"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const formDataRef = useRef({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    const { email, password } = formDataRef.current;
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
        router.push("dashboard");
      } else if (response.data.role === "admin") {
        setErrorMessage("Username and password wrong");
      }
    } catch (error: any) {
      if (error.response.data.message === "Invalid login") {
        setErrorMessage("Username and password wrong");
      }
    }
  };
  const jumpSign = () => {
    router.push("/");
  };
  const jumpAdminLogin = () => {
    router.push("../../admin/login");
  };
  const handleOnChange = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="w-[500px] box-shadow box-border mx-auto items-center flex flex-col gap-8">
        <h1 className="text-[32px] font-extrabold ">Нэвтрэх</h1>
        <div className="w-[432px] box-border mx-auto flex flex-col gap-4 ">
          <p className="text-[#9096B2]">Доорх мэдээллийн оруулж нэвтэрнэ үү</p>
          <input
            className="border-[1px] rounded-[3px] text-[#9096B2]  w-[432px] h-[52px] box-border border-gray-300 p-2"
            type="email"
            name="email"
            placeholder="Имэйл хаяг"
            onChange={(e) => handleOnChange("email", e.target.value)}
          />
          <input
            className="border-[1px] rounded-[3px] text-[#9096B2]  w-[432px] h-[52px] box-border border-gray-300 p-2"
            type="password"
            name="password"
            placeholder="Нууц үг"
            onChange={(e) => handleOnChange("password", e.target.value)}
          />
          {errorMessage && (
            <p className="font-semibold text-[16px] text-[#FB2E86] ">
              {errorMessage}
            </p>
          )}
          <div className="w-[432px] flex flex-col text-center gap-4 ">
            <button
              onClick={handleLogin}
              className="w-[432px] h-[47px] rounded-[3px] text-white bg-[#FB2E86]"
            >
              Нэвтрэх
            </button>
            <p
              onClick={jumpSign}
              className="text-[#9096B2] cursor-pointer mb-4"
            >
              Шинээр бүртгүүлэх
            </p>
          </div>
        </div>
      </div>
      <p
        onClick={jumpAdminLogin}
        className="mt-4 text-[#9096B2] underline underline-offset-4 cursor-pointer"
      >
        мерчант нэвтрэх
      </p>
    </div>
  );
};
export default Login;
