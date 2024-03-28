"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import useSWR from "swr";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function Orderdetails() {
  const pathName = usePathname();
  // const [data, setData] = useState({id:"",status:"",email:""});
  const [data, setData] = useState([]);
  const Orderhandler = async () => {
    const res = await axios.get(`http://localhost:8000/order/${pathName}`);
    setData(res.data.orderData);
    console.log(res.data.orderData);

  };
  // Orderhandler();
  useEffect(() => {
    Orderhandler();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div>
          <button className="text-[16px] p-[16px] flex gap-[32px] items-center">
            <p className="text-[16px]">Захиалгын дэлгэрэнгүй</p>
          </button>
          <div className="flex gap-[24px]">
            <div className="w-[627px] flex flex-col gap-[24px] p-[24px] rounded-[12px] border-[1px] border-[#ECEDF0]">
              <div className="flex justify-between">
                <div>
                  <p className="text-[16px] text-[#3F4145]">
                    Захиалгын ID дугаар:
                  </p>
                  <p className="text-[16px] text-[#121316] font-bold">{data._id}</p>
                </div>
                <div><p>{data.status}</p></div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                <p className="text-[16px] text-[#3F4145]">
                  Захиалагч: Хувь хүн
                </p>
                <div className=" flex gap-3">    
                  <p className="text-[16px] text-[#3F4145] font-bold">{data?.userId?.name}</p>
                  <p className="text-[16px] text-[#3F4145]">{data?.userId?.email}</p>
                  <p className="text-[16px] text-[#3F4145]">{data?.phoneNumber}</p>
                </div>
                </div>
            
                <div className="flex"> 
                      <img src={data.productId?.images} alt=""  className="w-[180px]"/>
                      <div className=" flex flex-col gap-3">
                      <h1>{data?.productId?.productName}</h1>
                        <div>
                 
                        <p>{data?.productId?.createdAt}</p>

                        <div className="flex gap-1"><p>Бүтээгдэхүүний ID:</p><p>{data?.productId?.productId}</p></div>
                        </div>
              
                        <p className=" font-bold">{data?.amountPaid}</p>
                      </div>
                </div>
                
              </div>
            </div>
            <div>
              <div className="rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                <p className="py-[20px] px-[24px] text-[16px]">
                  Хүргэлтийн мэдээлэл
                </p>
                <div className="px-[24px] pt-[24px] pb-[48px]">
                  <p className="text-[16px]">Гэр</p>
                  <p className="text-[16px]"></p>
                </div>
              </div>
              <div className="rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                <p className="py-[20px] px-[24px] text-[16px]">
                  Төлбөрийн мэдээлэл
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
