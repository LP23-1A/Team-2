"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Group } from "../images/Car";
import { CartNew, HeartBlueNew, ZoomInNew } from "../svg/Allicons";
const API = "http://localhost:8000/product";

function NewProduct() {

  const uuid = require('uuid')
  const [data, setData] = useState([]);

  const categoryHandler = async () => {
    const res = await axios.get(API);
    setData(res.data);
  };

  useEffect(() => {
    categoryHandler();
  }, []);
  
  return (
    <div className=" flex flex-col items-center gap-5 mb-5 mt-28">
      <h1 className="text-[#151875] text-[42px] font-extrabold ">
        Шинээр нэмэгдсэн
      </h1>
      <div className="flex w-[1200px]  justify-between flex-wrap ">
        {data && data.slice(0,8).map(({ images, productName, price }) => {
           const uniqeId = uuid.v4();
          return (
            <div key={uniqeId} className="mb-[50px] group ">
              <div className=" relative  w-[260px] h-[280px] mb-[15px] flex justify-center items-center bg-[#F6F7FB]">
                <img
                  className="w-[169px] h-[158px] bg-[#F6F7FB] "
                  alt="Product"
                  src={images}
                />
                <div className=" opacity-0 group-hover:opacity-100  duration-500 ease-in-out">
                  <CartNew onclick={print} />
                  <HeartBlueNew />
                  <ZoomInNew />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <p className="text-[#151875] font-bold">{productName}</p>
                <Group />
                <p className="text-[#151875]">{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewProduct;
