"use client";
import React, { useState } from "react";
import { useRouter } from "../../../../node_modules/next/navigation";

const SignPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const keys = { name, email };
  const router = useRouter();

  const jumpLogin = () => {
    router.push("step2");
  };
  const jumpNextStep = () => {
    localStorage.setItem("data", JSON.stringify(keys));
    console.log(keys);
  };

  return (
    <div className="w-[360px] mx-auto flex flex-col gap-5">
      <h1>Бүртгүүлэх</h1>
      <div className="w-[360px] mx-auto flex flex-col gap-3">
        <p>Таны имэйл </p>
        <input
          className="border-2 rounded-xl w-[360px] border-gray-300 p-2"
          type="email"
          value={email}
          placeholder="Имэйл"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Таны нэр </p>
        <input
          className="border-2 rounded-xl w-[360px] border-gray-300 p-2"
          type="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* <div className="flex flex-col gap-3 ">
        <div className="w-360px bg-[#1C20240A]">Google-ээр нэвтрэх</div>
        <div className="w-360px bg-[#1C20240A]">Microsoft-оор нэвтрэх</div>
        <div className="w-360px bg-[#1C20240A]">Apple-аар нэвтрэх</div>
      </div> */}
      <div className="bg-black text-white" onClick={jumpNextStep}>Дараах</div>
      <div className="flex">
        <span>Бүртгэлтэй юу?</span>
        <p onClick={jumpLogin}>Нэвтрэх</p>
      </div>
      <div>
        dsgwredghsd
      </div>
    </div>
  );
};

export default SignPage;
