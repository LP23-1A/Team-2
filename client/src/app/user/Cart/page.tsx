'use client'
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/user/Navbar";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Footer from "@/components/user/Footer";
import { UserOrderContext } from "@/components/user/UserOrderProvider";

export default function Cart() {

    const { orderData, setOrderData, removeCart, increaseCart, decreaseCart }: any = useContext(UserOrderContext);
    const router = useRouter();
    const uuid = require('uuid')

    let totalPrice = 0;
    for (let i = 0; i < orderData.length; i++) {
        totalPrice = totalPrice + orderData[i]?._id?.price * orderData[i]?.quantity;
    }

    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <HorizontalMenu />
            <div className="flex my-[96px] justify-between w-[1200px] mx-auto">
                <div>
                    <div className="w-fit">
                        <div className="flex font-bold text-[20px] text-[#1D3178]">
                            <p className="w-[320px]">Бүрэлдэхүүн</p>
                            <p className="w-[150px]">Үнэ</p>
                            <p className="w-[200px]">Тоо ширхэг</p>
                            <p className="w-[140px]">Нийт</p>
                        </div>
                        <div className="flex flex-col gap-5 mt-[43px]">
                            {orderData &&
                                orderData?.map((item: any, index: number) => {
                                    const uniqeId = uuid.v4();
                                    return (
                                        <div key={uniqeId} className="flex flex-col gap-[20px]  border-b-[2px] border-gray-200">
                                            <div className="flex items-center ">
                                                <div className="w-[320px] flex gap-2 items-center">
                                                    <div className=" relative">
                                                        <img  src={item?._id?.images} className="w-[83px] h-[83px] relative rounded" />
                                                        <p className="absolute top-[0px] right-[0px] w-[20px] h-[20px] bg-black text-white rounded-3xl flex items-center justify-center font-bold pb-[2px] cursor-pointer"
                                                            onClick={() => removeCart(item?._id)} >  x </p>
                                                    </div>
                                                    <div className="flex flex-col gap-0">
                                                        <p className="text-neutral-950 font-bold">{item?._id?.productName}</p>
                                                        <p style={{ color: "A1A8E1" }}>Өнгө: {item?._id?.color}</p>
                                                    </div>
                                                </div>
                                                <div className="w-[150px]">
                                                    <p className="text-[#1D3178] text-[14px]">
                                                        {item?._id?.price}₮
                                                    </p>
                                                </div>
                                                <div className="w-[200px]">
                                                    <div className="bg-gray-200 flex w-[90px] h-[25px] justify-between px-3 items-center">
                                                        <p className="flex justify-center items-center cursor-pointer" onClick={() => decreaseCart(item._id)}>
                                                            - </p>
                                                        <p className="bg-white px-2 ">{item?.quantity}</p>
                                                        <p className=" cursor-pointer" onClick={() => increaseCart(item._id)}>
                                                            + </p>
                                                    </div>
                                                </div>
                                                <div className="w-[140px]">
                                                    <p className="text-[#1D3178] text-[14px]">
                                                        {(item?._id?.price * orderData[index]?.quantity)}
                                                        ₮
                                                    </p>
                                                </div>
                                            </div>                           
                                        </div>
                                    ); 
                                    })}
                        </div>
                        <div className="flex justify-end mt-[47px]">
                            <button onClick={() => (setOrderData([]))} className="bg-[#FB2E86] w-[173px] flex justify-center px-4 py-2 text-white font-bold text-[14px] ">
                                Kарт цэвэрлэх
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[320px] flex flex-col">
                    <p className="font-bold text-[20px] text-[#1D3178] flex justify-center">
                        Нийт төлөх дүн
                    </p>
                    <div className="bg-[#F4F4FC] p-8 flex flex-col gap-4 mt-[40px]">
                        <div className="flex justify-between">
                            <p className="text-[18px] text-[#1D3178]">Нийлбэр:</p>
                            <p className="text-[#1D3178] text-[18px] font-bold">
                                {totalPrice}
                                ₮
                            </p>
                        </div>
                        <div className=" border-b-[2px] border-gray-200"></div>
                        <div className="flex justify-between">
                            <p className="text-[18px] text-[#1D3178]">Төлөх дүн:</p>
                            <p className="text-[#1D3178] text-[18px] font-bold">
                                {totalPrice}
                                ₮
                            </p>
                        </div>
                        <div className=" border-b-[2px] border-gray-200"></div>
                        <button className="bg-[#19D16F] text-[16px] py-2 text-white font-bold" onClick={() => router.push('/user/DeliveryInf')} >
                            Худалдаж авах
                        </button>
                    </div>
                </div>
            </div>   
         <Footer />     
        </div>
    );
}