"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Arrow } from "../../../components/images/arrow";
import { useRouter } from "next/navigation";
import { useAuth0 } from "@auth0/auth0-react";

const SignPage = () => {
  const { user } = useAuth0();
  console.log(user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shopName: "",
    city: "",
    district: "",
    khoroo: "",
    shoppingExprient: "",
    shoppingType: "",
    user: user,
  });
  const {
    name,
    email,
    shopName,
    city,
    district,
    khoroo,
    shoppingExprient,
    shoppingType,
  } = formData;
  console.log(user);
  
  const [activeStep, setActiveStep] = useState(0);
  const { loginWithRedirect } = useAuth0();
  const nextStep = () => {
    setActiveStep((prevStep) =>
      prevStep === steps.length - 1 ? prevStep : prevStep + 1
    );
  };
  const prevStep = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? prevStep : prevStep - 1));
  };

  const handletoSignUp = async () => {
    try {
      const api = "http://localhost:8000/admin/adminsign";
      const res = await axios.post(api, formData);
    } catch (err) {
      console.log(err, "axios error");
    }
  };

  const handleOnChange = (field: string, value: string | number) => {
    formDataRef.current = { ...formDataRef.current, [field]: value };
  };

  const steps = [
    <div className="flex items-center justify-center h-[100vh]">
      <div className="border-solid border-2 border-[#ECEDF0] rounded-[8px] p-[40px] ">
        <div className="w-[404px] box-border mx-auto flex flex-col gap-8  items-center ">
          <h1 className=" text-[32px] font-bold">Бүртгүүлэх</h1>
          <div className="flex gap-4 flex-col">
            <div className="w-[404px] box-border mx-auto flex flex-col gap-3 ">
              <div className="flex flex-col gap-1 ">
                <p className="font-normal text-[16px]">Таны имэйл </p>
                <input
                  className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
                  type="email"
                  name="email"
                  placeholder="Имэйл"
                  onChange={(e) => handleOnChange("email", e.target.value)}
                />
                <p className="font-semibold text-[16px] text-red-600 ">
                  {error.email}
                </p>
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="font-normal text-[16px]">Таны нэр </p>
                <input
                  className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
                  type="text"
                  name="name"
                  placeholder="Нэр"
                  onChange={(e) => handleOnChange("name", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <p className="font-normal text-[16px]">Таны Утасны дугаар</p>
                <input
                  className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
                  type="text"
                  name="Утасны дугаар"
                  placeholder="Утасны дугаар"
                  onChange={(e) =>
                    handleOnChange("phoneNumber", e.target.value)
                  }
                />
                <p className="font-semibold text-[16px] text-red-600 ">
                  {error.phoneNumber}
                </p>
              </div>
            </div>
            <button
              className="bg-black text-white rounded-[8px] h-[56px]  "
              onClick={nextStep}
            >
              Дараах
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="flex items-center h-[100vh]">
      <div className="w-[404px] box-border mx-auto justify-center flex flex-col gap-8">
        <h1 className=" text-[32px] font-bold ">Хаяг</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div>
              <p className="font-normal text-[16px]">Таны Хаяг</p>
              <p className="text-[14px]">
                (Жишээ нь Баянзүрх дүүрэг 13 хороо 56-р байр 24 тоот)
              </p>
              <input
                className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
                type="text"
                name="city"
                value={city}
                placeholder="Хот/Аймаг"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div>
              <p className="font-normal text-[16px]">Zipcode</p>
              <input
                className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
                type="text"
                name="district"
                value={district}
                placeholder="Сум/Дүүрэг"
                onChange={(e) =>
                  setFormData({ ...formData, district: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px]">Хороо</p>
              <input
                className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
                type="text"
                name="khoroo"
                value={khoroo}
                placeholder="Хороо"
                onChange={(e) =>
                  setFormData({ ...formData, khoroo: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="w-[48px] flex justify-center items-center h-[48px] rounded-[50px] bg-[#1C20240A]"
              onClick={prevStep}
            >
              <Arrow />
            </button>
            <button
              className="bg-black text-white rounded-[8px] h-[56px] w-[127px]  "
              onClick={nextStep}
            >
              Дараах
            </button>
          </div>
        </div>
      </div>
    </div>,
    <div className="flex items-center h-[100vh]">
      <div className="w-[404px] box-border mx-auto flex flex-col gap-8">
        <h1 className="text-[32px] font-bold">Нууц үг</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px]">Нууц үг </p>
            <input
              className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
              type="text"
              name="shoppingExprient"
              value={shoppingExprient}
              placeholder="Сонгох"
              onChange={(e) =>
                setFormData({ ...formData, shoppingExprient: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px]">
              Нууц үгээ давтан оруулна уу
            </p>
            <input
              className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
              type="text"
              name="shoppingType"
              value={shoppingType}
              placeholder="Сонгох"
              onChange={(e) =>
                setFormData({ ...formData, shoppingType: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="w-[48px] flex justify-center items-center h-[48px] rounded-[50px] bg-[#1C20240A]"
            onClick={prevStep}
          >
            <Arrow />
          </button>
          <button
            className="bg-black text-white rounded-[8px] w-[127px] h-[56px]  "
            onClick={handletoSignUp}
          >
            Дараах
          </button>
        </div>
      </div>
    </div>,
  ];
  return (
    <>
      {steps[activeStep]}
      {activeStep === 0 && <button onClick={nextStep}></button>}
      {activeStep !== 0 && activeStep !== steps.length - 1 && (
        <>
          <button className="" onClick={prevStep}></button>
          <button onClick={nextStep}></button>
        </>
      )}
      {activeStep === steps.length - 1 && <button onClick={prevStep}></button>}
    </>
  );
};
export default SignPage;
