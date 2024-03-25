"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Download from "@/components/images/Download.png";
const API = "http://localhost:8000/order/income";

export default function Income() {
  const [data, setdata] = useState([]);

  const Incomehandler = async () => {
    let res = await axios.get(API);
    setdata(res.data.incomeData);
  };

  useEffect(() => {
    Incomehandler();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" flex flex-col items-center bg-[#ECEDF0] gap-2 pt-2 w-screen">
          <div className="items-center  w-[824px] bg-white rounded-3xl ">
            <div className=" flex items-center bg-white gap-12 p-6 rounded-3xl  justify-between">
              <h2 className=" font-bold text-[20px]">Орлого</h2>
              <div className=" flex gap-1 bg-[#1C20240A] px-3 py-2 rounded-lg ">
                <img src={Download.src} alt="" />
                <h5>Хуулга татах</h5>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between p-6">
              <h1 className=" text-[28px] font-bold">235,000₮</h1>
              <div className=" flex gap-2">
                <button className=" bg-[#18BA51] text-white px-4 py-[10px] rounded-lg">
                  Өнөөдөр{" "}
                </button>
                <button className=" border-[2px] border-[#ECEDF0] px-4 py-[10px] rounded-lg">
                  7 хоног{" "}
                </button>
                <input
                  className="border-[2px] border-[#ECEDF0] px-4 py-[10px] rounded-lg"
                  type="date"
                  id="income"
                  name="income"
                ></input>
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-3xl  w-[824px]">
            <div className="flex">
              <p className=" pl-6 py-[14px] w-[269px] text-[12px]">
                Захиалгын ID дугаар
              </p>
              <p className="pl-6 py-[14px] w-[268px] text-[12px]">Захиалагч</p>
              <p className="pl-6 py-[14px] w-[137px] text-[12px]">Төлбөр</p>
              <p className=" pl-6 py-[14px] w-[150px] text-[12px]">Огноо</p>
            </div>
            <hr />
            <div className="">
              {data &&
                data.map((el: any, idp) => {
                  const dateString = el.createdAt;
                  const date = new Date(dateString);
                  const year = date.getFullYear();
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  const day = String(date.getDate()).padStart(2, "0");
                  const formatteddate = `${year}-${month}-${day}`;

                  const amount = el.amountPaid;
                  const formattedamount = amount + "₮";

                  return (
                    <div key={idp} className="flex border-t-2">
                      <p className=" pl-6 py-[14px] w-[269px] text-[14px] flex items-center">
                        {el._id}
                      </p>
                      <div className="pl-6 py-[14px] w-[268px] text-[14px]">
                      {el.userId.email} <br /> {el.phoneNumber}
                      </div>

                      <p className=" pl-6 py-[14px] w-[137px] text-[14px] flex items-center">
                        {formattedamount}
                      </p>
                      <p className="pl-6 py-[14px] w-[150px] text-[14px] flex items-center">
                        {formatteddate}
                      </p>
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
