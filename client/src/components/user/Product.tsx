import { ZoomIn, CartBlue, HeartBlue } from "../svg/Allicons";
export default function () {
  const productImageUrl =
    "https://s3-alpha-sig.figma.com/img/b720/dd65/fcc6274edfb7e97f682185ec460b6d4f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwx7Gy-BjTHNHBelbUePN6jRJL1lNedVPbP2PBOIf258o6DsZgLohhxZ2K5xmISRZLgBM9Hdv42X3NOR8twxf8vIrkA-0FD6BnbRmc31EB0P9~F8ZwbKcgaKVOsdvh1QsA7kfmr90o75WcrNogbpLRTctUtzJTUWYvGkJ09ixrMiQJRtOM~Sen4XSHadmo6Y-L7qgxwE7gAXjSTXiv7hHqgjjfTXsPVE1uInoz2doCiSeS1L3K9-Q20RQqERACPV6C9MIz4vcfWQZ2lTXWpL5pjPP2Cg8g0JiZMVxZNf2sqVWxZml0RWUDJiBAqa60iTMrlBhgOjSkfNn75y5Q9rkg__";

  return (
    <div className=" relative flex flex-col gap-[37px] w-[270px] pl-[45px] pr-[49px] pt-[23px] pb-[29px] shadow-lg shadow-[#000000]/20">
      <div className="">
        <img src={`${productImageUrl}`} />
        <div className="">
            <CartBlue />
          <HeartBlue />
          <ZoomIn />
        </div>
        <div className=" bg-[#08D15F] py-2 px-3 text-[12px] text-white text-center rounded-sm">дэлгэрэнгүй</div>
      </div>

      <div className="text-center text-[18px] font-bold flex flex-col gap-[37px] hover:bg-[#2F1AC4]">
        <p className=" text-[#FB2E86] ">Дан хүрэм пиджак</p>
        <p className="text-[#151875]">750’000₮</p>
      </div>
    </div>
  );
}
