"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Sign = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const formDataRef = useRef({
    email: "",
    password: "",
    repassword: "",
  });

  const handleSignUp = async () => {
    const { email, password } = formDataRef.current;    
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }
    if (formDataRef.current.repassword === formDataRef.current.password) {
      try {
        const api = "http://localhost:8000/admin/adminsignup";
        await axios.post(api, formDataRef.current);
        router.push("login");
      } catch (error) {
        console.log(error, "axios error");
      }
    } else {
      setErrorMessage("Passwords do not match");
    }
  };
  const jumpLogin = () => {
    router.push("login");
  };
  const handleOnChange = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="w-[500px] box-shadow box-border mx-auto items-center flex flex-col gap-8">
          <h1 className="text-[32px] font-extrabold ">Бүртгүүлэх</h1>
          <div className="w-[432px] box-border mx-auto flex flex-col gap-4 ">
            <p className="text-[#9096B2]">Доорх мэдээллийг бөглөнө үү</p>
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
            <input
              className="border-[1px] rounded-[3px] text-[#9096B2]  w-[432px] h-[52px] box-border border-gray-300 p-2"
              type="password"
              name="repassword"
              placeholder="Нууц үг давтах "
              onChange={(e) => handleOnChange("repassword", e.target.value)}
            />
            {errorMessage && (
              <p className="font-semibold text-[16px] text-[#FB2E86] ">
                {errorMessage}
              </p>
            )}
            <div className="w-[432px] flex flex-col text-center gap-4 ">
              <button
                onClick={handleSignUp}
                className="w-[432px] h-[47px] rounded-[3px] text-white bg-[#FB2E86]"
              >
                бүртгүүлэх
              </button>
              <p
                onClick={jumpLogin}
                className="mb-4 text-[#9096B2] cursor-pointer"
              >
                Нэвтрэх хэсэг
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
