"use client"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { CartNew, HeartBlueNew, ZoomInNew } from "../svg/Allicons";
import axios from "axios";
import { Group } from "../images/Car";

const API = "http://localhost:8000/product";

export default function allProduct() {
    const print = () => {
        console.log("Product Working");
      };
      const [data, setData] = useState([]);
      const categoryHandler = async () => {
        const res = await axios.get(API);
        console.log(res.data);
    
        setData(res.data);
      };
      useEffect(() => {
        categoryHandler();
      }, []);
    return(
        <section className="w-[1200px] flex flex-col text-[#1D3178]">
          <div className="mb-[40px]">
            <h3 className="text-[22px] font-[800]">Бүх бараа</h3>
          </div>
            <div className="flex w-[1200px]  justify-between flex-wrap ">
        {data.map(({ images, productName, price }) => (
          <div className="mb-[50px] group ">
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
        ))}
      </div>
        </section>
    )
}