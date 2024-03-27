import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OrderList({ data }: any) {
    const router = useRouter();
    const uuid = require('uuid')


    
    // console.log(data[0]._id);
    
    return (
        <div className=" flex flex-col">
            <div className=" text-[20px] py-5 px-6 bg-white flex  rounded-t-xl">
                <h2>Захиалга</h2>
            </div>
            <div className="flex">
                <p className=" pl-6 py-[16px] w-[291px] text-[12px]">
                    Захиалгын ID дугаар
                </p>
                <p className="pl-6 py-[16px] w-[209px] text-[12px]">
                    Үйлчлүүлэгч
                </p>
                <p className="pl-6 py-[16px] w-[168px] text-[12px]">Огноо</p>
                <p className=" pl-6 py-[16px] w-[129px] text-[12px]">Цаг</p>
                <p className=" pl-6 py-[16px] w-[137px] text-[12px]">Төлбөр</p>
                <p className=" pl-6 py-[16px] w-[214px] text-[12px]">Статус</p>
                <p className=" pl-6 py-[16px] w-[122px] text-[12px]">
                    Дэлгэрэнгүй
                </p>
            </div>
    
            
            <div className=" bg-white">
                {data &&
                    data.map((el:any) => {
                        const uniqeId = uuid.v4();
                        const dateString = el.createdAt;
                        const date = new Date(dateString);
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(2, "0");
                        const day = String(date.getDate()).padStart(2, "0");
                        const time = new Date(dateString);
                        const hours = String(time.getUTCHours()).padStart(2, "0");
                        const minutes = String(time.getUTCMinutes()).padStart( 2, "0" );
                        const formattedTime = `${hours}:${minutes}`;

                        const formatteddate = `${year}-${month}-${day}`;

                        return (
                            <div key={uniqeId} className="flex border-t-2">
                                <p className=" pl-6 py-[16px] w-[291px] text-[12px] flex items-center">{el._id}</p>
                                <div className="pl-6 py-[16px] w-[209px] text-[12px]">
                                
                                   {el.userId.email}
                                </div>
                                <p className="pl-6 py-[14px] w-[168px] text-[14px] flex items-center">{formatteddate}</p>
                                <p className="pl-6 py-[14px] w-[129px] text-[14px] flex items-center">{formattedTime}</p>
                                <p className=" pl-6 py-[14px] w-[137px] text-[14px] flex items-center">{el.amountPaid}</p>
                                <p className=" pl-6 py-[14px] w-[214px] text-[14px] flex items-center">{el.status}</p>
                                <button className=" pl-6 py-[14px] w-[122px] text-[14px] flex items-center justify-center"
                                  onClick={()=>router.push(`/admin/${el._id}`)}> {">"} </button>
                            </div>
                        );
                    })}
            </div>
        </div>

    );
}