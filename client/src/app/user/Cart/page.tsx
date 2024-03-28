"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { parseCookies, destroyCookie, setCookie } from "nookies";
import Navbar from "@/components/user/Navbar";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Footer from "@/components/user/Footer";
import { ProductContext } from "@/components/user/ProductContext";
import cookie from "js-cookie";
import { Car } from "@/components/images/Car";
import ProductData from "@/components/ProductData";
import { log } from "console";

export default function Cart() {
  const router = useRouter();
  const uuid = require("uuid");
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(ProductContext);
    console.log("awe",cart);

    const productJson = JSON.stringify(cart)
  function setCookie() {
    cookie.set("ProductData", productJson, {expires:1/24})
  }

  const clearCart = () => {
    cookie.remove("ProductData");
    console.log(cookie.get(ProductData));
    setCart([]);
  };
  
  const increamentCount = () =>{
    setCount(count+1);  
  }
  const decreamentCount = () =>{
    setCount(count-1);  
  }
  useEffect(() => {
    setCookie();


  },[cart]);

  let totalPrice = 0;


  return (
    <div>
      <Navbar></Navbar>
      <HorizontalMenu />
      <div className="flex flex-col items-center">
        <div className="flex w-[1200px] justify-between  font-bold pt-[35px]  py-3">
          <div className="flex flex-col">
            <div className="flex justify-between w-[750px] ">
              <p className="text-[#151875] w-[260px]">Бүтээгдэхүүн</p>
              <p className="text-[#151875] w-[40px] ">Үнэ</p>
              <p className="text-[#151875] w-[120px]">Тоо ширхэг</p>
              <p className="text-[#151875] w-[80px]">Нийт</p>
            </div>
            <div>
              {cart && cart.map((item) => (
                  <div className="flex justify-between pt-5 p-4 border-b " key={item.productId} >
                    <div className="flex gap-4 ">
                      <div className="w-[80px] h-[80px] relative">
                        <img className="w-[80px] h-[80px]"src={item?.images} />
                        <button className="absolute top-0 bg-black text-white rounded-full h-4 w-4 flex items-center justify-center right-4"> x</button>
                      </div>   
                      <div>
                      <p className=" font-extrabold text-[14px] text-[#000]"> {item?.productName} </p>  
                      <p className=" text-[#A1A8C1] text-[14px]">{item?.color}</p>
                      </div>                  
                    </div>
          
                    <p className="text-[#151875] text-[18px] font-bold">
                      {item?.price}₮
                    </p>

                    <div className="flex flex-col items-center">        
                      <div className="flex gap-8">
                        <button onClick={decreamentCount}>-</button>
                        <p>{count}</p>
                        <button onClick={increamentCount}>+</button>
                      </div>
                    </div>

                    <p className="text-[#151875] text-[18px] font-bold">
                      {count * item.price}₮
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex justify-end pt-3">
              <button onClick={clearCart} className="  bg-[#FB2E86] py-2 px-3 w-[173px] text-white">
                Карт цэвэрлэх
              </button>
            </div>
          </div>
          <div className=" flex flex-col gap-10 w-[384px] h-[243px]">
            <h1 className=" text-[20px] text-[#1D3178] font-extrabold">Нийт төлөх</h1>
            <div className=" bg-[#F4F4FC] rounded ">
                <div className=" flex justify-between border-b pt-8 px-6">
                    <h6 className=" text-[18px] text-[#1D3178]">Нийлбэр:</h6>
                    <p className=" text-[#151875]">750’000₮</p>
                </div>
                <div className=" flex justify-between border-b pt-8 px-6">
                    <h6 className=" text-[18px] text-[#1D3178]">Төлөх дүн:</h6>
                    <p className=" text-[#151875]">750’000₮</p>
                </div>
                <button className=" bg-[#19D16F] text-white m-8 w-[322px] py-3">
                        Худалдан авах
                </button>
            </div>
          </div>
        </div>
        

      </div>
      <div className="mt-[500px]">
        <Footer />
      </div>
    </div>
  );
}
