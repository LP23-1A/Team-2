"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/svg/Searchbar";
import Download from "@/components/images/Download.png";
const API = "http://localhost:8000/order/getorder";

export default function Orderdetails() {
  const [data, setdata] = useState([]);

  const Orderhandler = async () => {
    let res = await axios.get(API);  
   setdata(res.data.orderData);
  };

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
                                    <p className="text-[16px] text-[#3F4145]">Захиалгын ID дугаар: </p>
                                    <p className="text-[16px] text-[#121316]"></p>
                                </div>
                                <div>
                                  
                                </div>
                            </div>
                            <div>
                                <p className="text-[16px] text-[#3F4145]">Захиалагч: Хувь хүн </p>
                                <p className="text-[16px] text-[#3F4145]"></p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                                <p className="py-[20px] px-[24px] text-[16px]">Хүргэлтийн мэдээлэл</p>
                                <div className="px-[24px] pt-[24px] pb-[48px]">
                                    <p className="text-[16px]">Гэр</p>
                                    <p className="text-[16px]"></p>
                                </div>
                            </div>
                            <div className="rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                                <p className="py-[20px] px-[24px] text-[16px]">Төлбөрийн мэдээлэл</p>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
}
