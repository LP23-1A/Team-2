"use client";
import React from "react";
import { Award, Car, Cash, Clock } from "../images/Car";

const AboutTheService = () => {
  return (
    <div className=" flex flex-col items-center gap-12 my-5">
      <h1 className="text-[#151875] text-[42px]  font-extrabold ">
        Үйлчилгээний тухай
      </h1>
      <div className="flex w-[1200px] justify-between ">
        <div className="flex gap-5 shadow flex-col w-[275px] items-center h-[320px] box-border p-[30px]">
          <Car />
          <img src="" alt="" />
          <h1 className="text-[#151875] text-[22px] font-extrabold ">
            Шинээр нэмэгдсэн
          </h1>
          <p className="text-center flex text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="flex gap-5 shadow flex-col w-[275px] items-center h-[320px] box-border p-[30px]">
          <Cash />
          <img src="" alt="" />
          <h1 className="text-[#151875] text-[22px] font-extrabold ">
            Буцаан олголт
          </h1>
          <p className="text-center flex text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="flex gap-5 shadow flex-col w-[275px] items-center h-[320px] box-border p-[30px]">
          <Award />
          <img src="" alt="" />
          <h1 className="text-[#151875] text-[22px] font-extrabold ">
            Найдвартай
          </h1>
          <p className="text-center flex text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="flex gap-5 shadow flex-col w-[275px] items-center h-[320px] box-border p-[30px]">
          <Clock />
          <img src="" alt="" />
          <h1 className="text-[#151875] text-[22px] font-extrabold ">
            24/7 тусламж
          </h1>
          <p className="text-center flex text-[#1A0B5B4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTheService;
