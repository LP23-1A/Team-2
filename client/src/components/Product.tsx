"use client";
import { useRouter } from "next/navigation";
import ProductData from "./ProductData";
import ProductFilter from "./ProductFilter";

export default function Product() {
    const router = useRouter()
    return(
        <section className="w-[1420px] p-[10px] flex flex-col gap-[20px]">
            <div className="py-[10px] bg-[#ECEDF0]">
                <button onClick={() => router.push("/admin/addProduct")} className="px-[50px] py-[10px] bg-[black] rounded-md text-[white]">+ Бүтээгдэхүүн нэмэх</button>
            </div>
            <div className="flex gap-[30px] py-[20px]">
                <ProductFilter/>
            </div>
            <div className="rounded-md bg-[white]">
                <div className="flex gap-[30px] py-[10px] px-[20px] font-[600]">
                    <div className="w-[68px]">
                    </div>
                    <div className="w-[150px] py-[10px] px-[10px]">
                        <p>Бүтээгдэхүүн</p>
                    </div>
                    <div className="w-[180px] py-[10px] px-[20px]">
                        <p>Ангилал</p>
                    </div>
                    <div className="w-[150px] p-[10px]">
                        <p>Үнэ</p>
                    </div>
                    <div className="w-[150px] py-[10px]">
                        <p>Үлдэгдэл</p>
                    </div>
                    <div className="w-[150px] py-[10px]">
                        <p>Зарагдсан</p>
                    </div>
                    <div className="w-[150px] py-[10px] px-[5px]">
                        <p>Нэмсэн огноо</p>
                    </div>
                </div>
                <ProductData/>
            </div>
        </section>
    )
}
