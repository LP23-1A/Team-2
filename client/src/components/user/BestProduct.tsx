'use client'
import { ZoomIn, Cart, HeartBlue } from "../svg/Allicons";
import { useRouter } from 'next/navigation';

export default function BestProduct({productName, price, id, imageUrl}) {
  const router = useRouter();

  const print =  () => {
    console.log("Product Working");
  };

  return (
    <div key={id} className=" group relative flex flex-col gap-[17px] w-[270px]  pt-[23px] shadow-lg shadow-[#000000]/20">
      <div className=" relative pl-[45px] pr-[49px]  pb-[19px]">
        <img src={`${imageUrl}`} />
        <div className=" opacity-0 group-hover:opacity-100  duration-500 ease-in-out">
          <Cart color={"#2F1AC4"} onclick={print} />
          <HeartBlue />
          <ZoomIn />
          <div onClick={()=>router.push(`/user/${id}`)} className=" bg-[#08D15F] py-2 px-3 text-[12px] text-white text-center rounded-sm absolute bottom-0 left-1/3 cursor-pointer">дэлгэрэнгүй</div>
        </div>
      </div >
      <div className="text-center text-[18px] font-bold flex flex-col gap-[30px] group-hover:bg-[#2F1AC4]  pt-4 pb-7">
        <p className=" text-[#FB2E86] group-hover:text-white ">{productName}</p>
        <p className="text-[#151875] group-hover:text-white">{price}₮</p>
      </div>
    </div>
  );
}
