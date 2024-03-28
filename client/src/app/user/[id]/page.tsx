'use client'
import { usePathname } from "next/navigation";
import Navbar from "@/components/user/Navbar";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Footer from "@/components/user/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Star, CircleBlue, CircleOrange, CircleRed, Heart, HeartBlue, BlueHeart } from "@/components/svg/Allicons";

export default function ProductDetails(){
    const pathName = usePathname(); 
    const [data, setData] = useState([]);
    const productDetailsHandler = async()=> {
        const res = await axios.get(`http://localhost:8000/product/${pathName}`);            
        setData(res.data.product)      
    }
    useEffect(()=> {
        productDetailsHandler();
    },[]);

    return (
        <div>
            <Navbar/>
            <HorizontalMenu/>
            <div className="pl-[360px] py-[73px] flex">
                <div className=" flex flex-col gap-[11px] ">
                    <img className=" w-[151px] h-[155px] rounded-md" src={`${data.images}`} alt="" />
                    <img className=" w-[151px] h-[155px]  rounded-md" src={`${data.images}`} alt="" />
                    <img className=" w-[151px] h-[155px]  rounded-md" src={`${data.images}`} alt="" />
                </div>
                <img className=" w-[475px] h-[487px]  rounded-md" src={`${data.images}`} alt="" />
                <div className=" flex flex-col gap-4">
                    <h1 className=" text-[36px] text-[#111C85] font-extrabold ">{data.productName}</h1>
                    <div className=" flex gap-1 items-center"><Star/><Star/><Star/><Star/><Star/><p className="text-[13px] text-[#5A5C7E] font-extrabold">(32)</p></div>
                    <h1 className=" text-[#151875] text-[32px]">{data.price}₮</h1>
                    <div>
                        <div className=" flex gap-2"><CircleOrange/><CircleBlue/><CircleRed/></div>
                    </div>
                    <p className=" w-[500px]">{data.description}</p>
                    <div className=" flex gap-[10px]">      
                        <button className=" bg-[#FB2E86] text-white font-extrabold px-6 py-3 rounded" >Continue Shipping</button>
                        <div className=" bg-[#F6F5FF] p-[10px] text-[#535399] items-center justify-center"><BlueHeart/></div>
                    </div>
               
                </div>
            </div>
            <Footer/>
       
        </div>
    );
}