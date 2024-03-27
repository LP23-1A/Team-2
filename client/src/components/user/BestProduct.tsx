'use client'
import { usePathname, useSearchParams, useParams } from "next/navigation";
import { ZoomIn, Cart, HeartBlue } from "../svg/Allicons";
import { useRouter } from 'next/navigation';
import { log } from "console";

export default function BestProduct({productName, price, id, imageUrl}) {
  const param = useParams();
  const router = useRouter();
  const productImageUrl =
    "https://s3-alpha-sig.figma.com/img/b720/dd65/fcc6274edfb7e97f682185ec460b6d4f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwx7Gy-BjTHNHBelbUePN6jRJL1lNedVPbP2PBOIf258o6DsZgLohhxZ2K5xmISRZLgBM9Hdv42X3NOR8twxf8vIrkA-0FD6BnbRmc31EB0P9~F8ZwbKcgaKVOsdvh1QsA7kfmr90o75WcrNogbpLRTctUtzJTUWYvGkJ09ixrMiQJRtOM~Sen4XSHadmo6Y-L7qgxwE7gAXjSTXiv7hHqgjjfTXsPVE1uInoz2doCiSeS1L3K9-Q20RQqERACPV6C9MIz4vcfWQZ2lTXWpL5pjPP2Cg8g0JiZMVxZNf2sqVWxZml0RWUDJiBAqa60iTMrlBhgOjSkfNn75y5Q9rkg__";

  const print =  () => {
    console.log("Product Working");
  };

  const ProductDetails = () => {
    router.push("../../user/productdetails")
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
