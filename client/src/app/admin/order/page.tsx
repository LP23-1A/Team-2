"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/svg/Searchbar";
import Download from "@/components/images/Download.png";
const API = "http://localhost:8000/order";

export default function Order() {
  const [data, setdata] = useState([]);

  const Incomehandler = async () => {
    let res = await axios.get(API);  
   setdata(res.data.incomeData);
   console.log(res);
   
 
  };

  useEffect(() => {
    Incomehandler();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" flex flex-col bg-[#ECEDF0] gap-[34px] w-screen ">
          <div className="flex gap-8 text-[14px] px-4 py-4">
            <button className=" font-semibold border-b-2 border-black ">Бүгд</button>
            <button >Шинэ захиалга</button>
            <button>Бэлтгэгдэж байна</button>
            <button >Хүргэлтэнд гарсан</button>
            <button >Хүргэгдсэн</button>
            <button >Цуцлагдсан</button>
          </div>

          <div className="flex flex-col gap-6  mx-6">
            <div className=" flex items-center rounded-3xl justify-between">
                <div className=" flex gap-2">
                  <button className=" bg-[#18BA51] text-white px-4 py-[10px] rounded-lg">Өнөөдөр  </button>
                  <button className=" bg-white border-[2px] border-[#ECEDF0] px-4 py-[10px] rounded-lg">7 хоног  </button>
                  <input className="border-[2px] border-[#ECEDF0] px-4 py-[10px] rounded-lg" type="date" id="income" name="income"></input>
                </div>
                <div className="flex gap-2 rounded-lg border-[2px] border-[#D6D8DB] bg-white p-2">
                  <Searchbar/>
                  <input type="text" placeholder="Дугаар, Имэйл"/>               
                </div>         
   
            </div>

          <div className=" flex flex-col">
            <div className=" text-[20px] py-5 px-6 bg-white flex  rounded-t-xl"><h2>Захиалга</h2></div>
            <div className="flex">
              <p  className=" pl-6 py-[16px] w-[291px] text-[12px]">Захиалгын ID дугаар</p>
              <p  className="pl-6 py-[16px] w-[209px] text-[12px]">Үйлчлүүлэгч</p>
              <p  className="pl-6 py-[16px] w-[168px] text-[12px]">Огноо</p>
              <p  className=" pl-6 py-[16px] w-[129px] text-[12px]">Цаг</p>
              <p  className=" pl-6 py-[16px] w-[137px] text-[12px]">Төлбөр</p>
              <p  className=" pl-6 py-[16px] w-[214px] text-[12px]">Статус</p>
              <p  className=" pl-6 py-[16px] w-[122px] text-[12px]">Дэлгэрэнгүй</p>
            </div>
    
            <div className="">
              {data && data.map((el: any, idp) => {
                const dateString = el.createdAt;
                const date = new Date (dateString);
                const year = date.getFullYear();
                const month = String(date.getMonth()+1).padStart(2,'0');
                const day = String(date.getDate()).padStart(2,'0');
                const formatteddate = `${year}-${month}-${day}`;

                const amount = el.amountPaid;
                const formattedamount = amount + '₮' ;

                  return (
                    <div key={idp} className="flex border-t-2">              
                      <p className=" pl-6 py-[14px] w-[269px] text-[14px] flex items-center">{el._id}</p>
                      <div className="pl-6 py-[14px] w-[268px] text-[14px]">
                      {el.userid.email} <br /> {el.phoneNumber}
                      </div>
                   
                      <p  className=" pl-6 py-[14px] w-[137px] text-[14px] flex items-center">{formattedamount}</p>
                      <p  className="pl-6 py-[14px] w-[150px] text-[14px] flex items-center">{formatteddate}</p>
                    </div>        
                             
                  );
                })}
            </div>
          </div>
          
          </div>
       
        </div>
      </div>
    </div>
  );
}
