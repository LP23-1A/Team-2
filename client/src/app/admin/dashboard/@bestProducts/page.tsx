"use client";

import rightarrow from "@/components/images/rightarrow.png";
import axios from "axios";
import { useEffect, useState } from "react";

const api = "http://localhost:8000/dashboard/status";

export default function Best() {
  const [data, setData] = useState([{ productName: "", qty: "", price: "" }]);
  const dashboardProducts = async () => {
    try {
      const res = await axios.get(api);
      setData(res.data.data.productInfo);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    dashboardProducts();
  }, []);
  return (
    <div className="bg-[#fff] rounded-xl">
      <div className="flex items-center justify-between p-6">
        <h1>Шилдэг бүтээгдэхүүн</h1>
        <img className="w-[12px] h-[12px]" src={rightarrow.src} alt="" />
      </div>
      <div className="px-6">
        <div className="flex justify-between px-5 bg-[#ECEDF0] py-4">
          <div>№</div>
          <div>Бүтээгдэхүүн</div>
          <div>Зарагдсан</div>
          <div>Үнэ</div>
        </div>
      </div>
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-3 justify-between py-4 px-12 border-b"
            >
              <div>{index + 1}</div>
              <div>{item.productName}</div>
              <div>{item.qty}</div>
              <div>{item.price}</div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
