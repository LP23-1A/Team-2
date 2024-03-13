"use client";
import axios from "axios";
import React, { useState } from "react";
import { Arrow } from "../../../components/images/arrow";
import { useAuth0 } from "@auth0/auth0-react";
import Google from "@/components/images/google";

type Auth0ProviderProps = {
  domain: string;
  clientId: string;
  props: any;
};
const SignPage = () => {
  const { user } = useAuth0();
  const [formData, setFormData] = useState({
    shopName: "",
    city: "",
    district: "",
    khoroo: "",
    shoppingExprient: "",
    shoppingType: "",
    user: user,
  });
  const {
    shopName,
    city,
    district,
    khoroo,
    shoppingExprient,
    shoppingType,
  } = formData;

  const [activeStep, setActiveStep] = useState(0);
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
  console.log(user);
  const steps = [
    <div className="flex items-center h-[100vh]">
      <div className="w-[404px] box-border mx-auto justify-center flex flex-col gap-8">
        <h1 className=" text-[32px] font-bold ">Дэлгүүрийн мэдээлэл</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px]">
              Танай дэлгүүрийн нэр юу вэ?
            </p>
            <input
              className="border-2 rounded-[8px] bg-[#F7F7F8] w-[404px] h-[56px] box-border border-gray-300 p-2"
              type="text"
              name="shopName"
              value={shopName}
              placeholder="Дэлгүүрийн нэр"
              onChange={(e) =>
                setFormData({ ...formData, shopName: e.target.value })
              }
            />
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
      <div className="w-[404px] box-border mx-auto justify-center flex flex-col">
        <div className="w-[404px] box-border mx-auto flex flex-col gap-8">
          <h1 className=" text-[32px] font-bold ">Бүс нутгийн мэдээлэл</h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px]">Хот/Аймаг</p>
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
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px]">Сум/Дүүрэг</p>
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
        <h1 className="text-[32px] font-bold">Жоохон танилцья</h1>
        <span className="text-[16px] font-normal ">
          Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
        </span>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px]">
              Та борлуулалт хийж байсан туршлагатай юу?
            </p>
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
              Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
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
