'use client';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Facebook, Instagram, Twitter } from "../svg/Allicons";

const API = "http://localhost:8000/subcategory";

export default function Footer() {

  const [data, setData] = useState([]);
  const categoryHandler = async()=> {
      const res = await axios.get(API);
      setData(res.data.categories);
  }
  useEffect(()=> {
    categoryHandler();
  },[]);

  return (
    <div>
      <div className=" bg-[#EEEFFB] flex justify-between px-[360px] pt-[95px] pb-[142px]">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-[38px] font-extrabold">eCommerce</h1>
          <div className="flex items-center p-1 bg-white rounded">
            <input className="w-[242px] h-[47px] pl-[20px] pt-[14px] pb-[11px]" placeholder="Имэйл хаяг" name="register" />
            <div className=" bg-[#FB2E86] pl-[23px] pr-[29px] py-[11px] text-[#EEEFFB] rounded"> Бүртгүүлэх </div>
          </div>
          <div className=" flex flex-col text-[#8A8FB9] gap-[10px]">
            <p>Хаяг</p>
            <p className=" w-[284px]">
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              Гурван гол - 401 тоот
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-[37px]">
          <h1 className=" text-[22px] font-extrabold">Ангилал</h1>

          <div className=" text-[#8A8FB9] flex flex-col gap-[21px]">
            {data && data.map((el:any)=>{
              return (
                <p className=' cursor-pointer'>{el.categoryName}</p>
              );
            })}
          </div>
          
        </div>
        <div className=" flex flex-col gap-[37px]">
          <h1 className=" text-[22px] font-extrabold">Бусад</h1>
          <div className=" text-[#8A8FB9] flex flex-col gap-[21px]">
            <p>Бидний тухай</p>
            <p>Холбоо барих</p>
            <p>Түгээмэл асуулт хариулт</p>
          </div>
        </div>
      </div>
      <div className=" flex bg-[#E7E4F8] text-[#9DA0AE] py-[17px] px-[360px] justify-between">
        <p>©ecommerce</p>
        <div className="flex gap-3">
            <div className="bg-[#151875] p-2 rounded-full items-center justify-center">  <Facebook/> </div>
            <div className="bg-[#151875] p-2 rounded-full items-center justify-center">   <Instagram/> </div>
            <div className="bg-[#151875] p-2 rounded-full items-center justify-center">  <Twitter/> </div>
</div>
      </div>
    </div>
  );
}
