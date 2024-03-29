"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/svg/Searchbar";
import Download from "@/components/images/Download.png";
import OrderList from "@/components/OrderList";
import OrderNavbar from "@/components/OrderNavbar";
const API = "http://localhost:8000/order/income";

export default function Order({setFilteredData, filteredData} : any) {
  const [data, setdata] = useState([]);

  const Orderhandler = async () => {
    let res = await axios.get(API);
    setdata(res.data.incomeData);
  };

  useEffect(() => {
    Orderhandler();
  }, []);

  const handleSearch = (email: string) => {
    const filtered = data.filter((item: { email?: string }) =>
      item.email?.toLowerCase().startsWith(email.toLowerCase())
    );
    setFilteredData(filtered);
  };  

  const handleInputChange = (e: { target: { value: any } }) => {
    const searchEmail = e.target.value;
    handleSearch(searchEmail);
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" flex flex-col bg-[#ECEDF0] gap-[34px] w-screen ">
          <OrderNavbar />
          <div className="flex flex-col gap-6  mx-6">
            <div className=" flex items-center rounded-3xl justify-between">
              <div className=" flex gap-2">
                <button className=" bg-[#18BA51] text-white px-4 py-[10px] rounded-lg">
                  Өнөөдөр{" "}
                </button>
                <button className=" bg-white border-[2px] border-[#ECEDF0] px-4 py-[10px] rounded-lg">
                  7 хоног{" "}
                </button>
                <input
                  className="border-[2px] border-[#ECEDF0] px-4 py-[10px] rounded-lg"
                  type="date"
                  id="income"
                  name="income"
                ></input>
              </div>
              <div className="flex gap-2 rounded-lg border-[2px] border-[#D6D8DB] bg-white p-2">
                <Searchbar />
                <input onChange={handleInputChange} type="text" placeholder="Дугаар, Имэйл" />
              </div>
            </div>

            {
              data.length !== 0 && <OrderList filteredData={filteredData} />
            }

          </div>
        </div>
      </div>
    </div>
  );
}
