"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Download from "@/components/images/Download.png";
const API = "http://localhost:8000/order/order";

export default function Income(){
    const [data,setdata] = useState([]);
    const handler = async () => {
          
        let res = await axios.get(API);
        console.log(res.data);
        
            setdata(res.data);
      };
      
      useEffect(() => {
        handler();
      }, []);
      const print = ()=>{
        console.log(data);
        
      }
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
                            <h5 onClick={print}>Хуулга татах</h5>
                    </div>
                </div>
                
                <div>
                    <div className="flex gap-12">                         
                        <p>Захиалгын ID дугаар</p>
                        <p>Захиалагч</p>
                        <p>Төлбөр</p>
                        <p>Огноо</p>
                    </div>

              <div>
              {data &&
                    data.map((el:any, idp) => {
                      console.log(el,'el')
                      return (
                        <div key={idp} className="flex justify-between" >
                          <div className="flex gap-4">
                            <div className=" flex items-center justify-center w-10 h-10 bg-[#0166FF] rounded-full"></div>                
                                <p>{el._id}</p>
                          </div>                   
                          <p>{el.amountPaid}</p>
                          
                        </div>
                      );
                    })}
              </div>

              </div>
                    


          </div>
        </div>
      </div>
    );
}