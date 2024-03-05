"use client";
import React, { useState } from "react";

const SignPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shopName: "",
    shopAddress: "",
    city: "",
    district: "",
    khoroo: "",
    shoppingExprient: "",
    shoppingType: "",
  });
  const {
    name,
    email,
    shopAddress,
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
  function log() {
    console.log(formData);
  }

  const steps = [
    <div className="w-[404px] box-border mx-auto flex flex-col gap-5">
      <h1>Бүртгүүлэх</h1>
      <div className="w-[404px] box-border mx-auto flex flex-col gap-3">
        <p>Таны имэйл </p>
        <input
          className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
          type="email"
          name="email"
          value={email}
          placeholder="Имэйл"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <p>Таны нэр </p>
        <input
          className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <button onClick={nextStep}>Дараах</button>
    </div>,
    <div className="w-[404px] box-border mx-auto justify-center flex flex-col gap-5">
      <h1>Танай дэлгүүрийн нэр юу вэ?</h1>
      <input
        className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
        type="text"
        name="shopName"
        value={shopName}
        placeholder="Shop Address"
        onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
      />
      <button onClick={prevStep}>omnoh</button>
      <button onClick={nextStep}>Дараах</button>
    </div>,
    <div className="w-[404px] box-border mx-auto justify-center flex flex-col gap-5">
      <div className="w-[404px] box-border mx-auto flex flex-col gap-3">
        <h1>Бүс нутгийн мэдээлэл</h1>
        <div>
          <input
            className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
            type="text"
            name="shopAddress"
            value={shopAddress}
            placeholder="Name"
            onChange={(e) =>
              setFormData({ ...formData, shopAddress: e.target.value })
            }
          />
          <input
            className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
            type="text"
            name="city"
            value={city}
            placeholder="city"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <input
            className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
            type="text"
            name="district"
            value={district}
            placeholder="district"
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
          />
          <input
            className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
            type="text"
            name="khoroo"
            value={khoroo}
            placeholder="khoroo"
            onChange={(e) =>
              setFormData({ ...formData, khoroo: e.target.value })
            }
          />
        </div>
        <button onClick={prevStep}>omnoh</button>
        <button onClick={nextStep}>Дараах</button>
      </div>
    </div>,
    <div className="w-[404px] box-border mx-auto flex flex-col gap-5">
      <input
        className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
        type="text"
        name="shoppingExprient"
        value={shoppingExprient}
        placeholder="shoppingExprient"
        onChange={(e) =>
          setFormData({ ...formData, shoppingExprient: e.target.value })
        }
      />
      <input
        className="border-2 rounded-xl w-[404px] h-[56px] box-border border-gray-300 p-2"
        type="text"
        name="shoppingType"
        value={shoppingType}
        placeholder="shoppingType"
        onChange={(e) =>
          setFormData({ ...formData, shoppingType: e.target.value })
        }
      />
      <button onClick={prevStep}>omnoh</button>
      <button onClick={log}>Дараах finish</button>
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
