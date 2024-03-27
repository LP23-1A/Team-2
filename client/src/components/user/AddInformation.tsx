"use client";
import { useState } from "react";
const data = [
  { commentPost: "goy bn" },
  { commentPost: "gal2" },
  { commentPost: "ynziin ed bn" },
];
const Information = () => {
  const [isInformationHide, setIsInformationHide] = useState(false);

  const handleClick = (isInformation: any) => {
    setIsInformationHide(isInformation);
  };

  return (
    <div className="bg-[#F9F8FE] w-[100vw] py-[60px]">
      <div className="flex flex-col gap-[30px] px-[360px]">
        <div className="flex gap-6 ">
          <h3
            className={`cursor-pointer text-[24px] font-extrabold text-[#151875] ${
              !isInformationHide ? "underline" : ""
            }`}
            onClick={() => handleClick(false)}
          >
            Нэмэлт мэдээлэл
          </h3>
          <h3
            className={`text-[24px] font-extrabold text-[#151875] ${
              isInformationHide ? "underline" : ""
            }`}
            onClick={() => handleClick(true)}
          >
            Үнэлгээ
          </h3>
        </div>
        {!isInformationHide && (
          <div className="flex flex-col gap-4 box-border px-[24px] py-[48px] bg-white">
            <h4 className="text-[22px] text-[#151875] cursor-pointer font-extrabold">
              Үзүүлэлтүүд
            </h4>
            <div className="flex gap-[35px]">
              <div>
                <p className=" text-[#A9ACC6]">Загвар & Зориулалт</p>
                <p className=" text-[#A9ACC6]"> Хүйс</p>
                <p className=" text-[#A9ACC6]">Насны ангилал</p>
                <p className=" text-[#A9ACC6]">Улирал</p>
                <p className=" text-[#A9ACC6]"> Материал</p>
                <p className=" text-[#A9ACC6]">Ерөнхий өнгө</p>
                <p className=" text-[#A9ACC6]">Зориулалт</p>
              </div>
              <div>
                <p className=" text-[#A9ACC6]">Bags</p>
                <p className=" text-[#A9ACC6]">Эмэгтэй</p>
                <p className=" text-[#A9ACC6]">Том хүн</p>
                <p className=" text-[#A9ACC6]">Бүх улирал</p>
                <p className=" text-[#A9ACC6]">Арьсан</p>
                <p className=" text-[#A9ACC6]">Хул</p>
                <p className=" text-[#A9ACC6]">Өдөр тутам</p>
              </div>
            </div>
          </div>
        )}
        {isInformationHide && (
          <div className="flex flex-col gap-4 box-border px-[24px] py-[48px] bg-white">
            <h3 className="text-[22px] text-[#151875] font-extrabold cursor-pointer">
              Үнэлгээ нэмэх
            </h3>
            <input
              className="outline-none"
              type="text"
              placeholder="Сэтгэгдэл бичих"
            />
          </div>
        )}
      </div>
      <div>
        {data.map((e, index) => (
          <p key={index} className="text-black">
            {e.commentPost}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Information;
