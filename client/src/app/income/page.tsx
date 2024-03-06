"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Download from "@/components/images/Download.png";
const API = "http://localhost:8000/order/getallorders";

export default function Income(){
    const [transaction, setTransaction] = useState();
    const handler = async () => {
        let res = await axios.get(API);
        setTransaction(res.data);
        console.log("dataaaa", res.data);
      };
      useEffect(() => {
        handler();
      }, []);

    return (
        <div>
        <Navbar />
        <div className="flex h-screen">
          <Menu />
          <div className=" flex flex-col items-center w-screen bg-[#ECEDF0] gap-2">

                <div className=" flex items-center bg-white gap-12 py-5 px-6">
                    <h2 className=" font-bold text-sm">Орлого</h2>
                    <div className=" flex gap-1 bg-[#1C20240A] px-3 py-2 rounded-lg ">
                            <img src={Download.src} alt="" />
                            <h5>Хуулга татах</h5>
                    </div>
                </div>
                
                <div>
                    <div className="flex gap-12">                         
                        <p>Захиалгын ID дугаар</p>
                        <p>Захиалагч</p>
                        <p>Төлбөр</p>
                        <p>Огноо</p>

                        <div className=" flex flex-col gap-4">
                  {transaction &&
                    transaction.map((el, idp) => {
                      return (
                        <div key={idp + el.name} className="flex justify-between" >
                          <div className="flex gap-4">
                            <div className=" flex items-center justify-center w-10 h-10 bg-[#0166FF] rounded-full"><House /></div>                
                            <p>{el.name}</p>
                          </div>                   
                            <p>{el.amount}</p>
                          
                        </div>
                      );
                    })}
                </div>

              </div> 
                    </div>
                    

                </div>
          </div>
        </div>
      </div>
    );
}