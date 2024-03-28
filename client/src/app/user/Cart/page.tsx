'use client'

import { useContext } from "react";
import Navbar from "@/components/user/Navbar";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Footer from "@/components/user/Footer";
import { ProductContext } from "@/components/user/ProductContext";
export default function Cart() {
    const { cart, setCart } = useContext(ProductContext);
    const uuid = require('uuid')
    console.log("passed cart", cart);

    return (
        <div>
            <Navbar></Navbar>
            <HorizontalMenu/>
            <div>
                <div className=" text-[#1D3178] font-semibold flex">
                    <h1>Бүтээгдэхүүн</h1>
                    <h1>Үнэ</h1>
                    <h1>Тоо ширхэг</h1>
                    <h1>Нийт</h1>
                </div>
                <div>
                {cart &&
                    cart.map((el:any) => {
                        const uniqeId = uuid.v4();
                        return (
                            <div key={uniqeId} className="flex border-t-2">
                                    <div>
                                    <img className=" w-[180px]" src={el?.images} alt="" />
                                    </div>
               
                
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer/>
            <h1>e</h1>
        </div>

    );
}