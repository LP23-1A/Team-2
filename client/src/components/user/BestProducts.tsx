'use client'
import { useContext } from "react";
import { useRouter } from 'next/navigation';
import { ProductContext } from "./ProductContext";
import { ZoomIn, Cart, HeartBlue } from "../svg/Allicons";

const BestProducts = ({ data }: any) => {
    const context = useContext(ProductContext);
    const router = useRouter();
    return (
        <div className=" flex flex-col gap-10 mt-[129px] items-center">
            <p className=" text-[42px] font-extrabold text-[#1A0B5B]">Онцлох бүтээгдэхүүн</p>
            <div className="flex">
                {data && data.map((item: []) => {
                    return (
                        <div key={item._id} className=" group relative  gap-[17px] w-[270px]  pt-[23px] shadow-lg shadow-[#000000]/20">
                            <div className=" relative pl-[45px] pr-[49px]  pb-[19px]">
                                <img src={`${item.images}`} />
                                <div className=" opacity-0 group-hover:opacity-100  duration-500 ease-in-out">
                                    <button onClick={() => context.setCart((prev) => ([...prev, item]))}>  <Cart color={"#2F1AC4"} /></button>
                                    <HeartBlue />
                                    <ZoomIn />
                                    <div onClick={() => router.push(`/user/${item._id}`)} className=" bg-[#08D15F] py-2 px-3 text-[12px] text-white text-center rounded-sm absolute bottom-0 left-1/3 cursor-pointer">дэлгэрэнгүй</div>
                                </div>
                            </div >
                            <div className="text-center text-[18px] font-bold flex flex-col gap-[30px] group-hover:bg-[#2F1AC4]  pt-4 pb-7">
                                <p className=" text-[#FB2E86] group-hover:text-white ">{item.productName}</p>
                                <p className="text-[#151875] group-hover:text-white">{item.price}₮</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default BestProducts;
