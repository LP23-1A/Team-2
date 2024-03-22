"use client";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import ChevronBack from "@/components/images/chevronArrow";
import { useRouter } from "next/navigation";
import UpdateProduct from "@/components/UpdateProduct";

const product = () => {
  const router = useRouter();
  return (
    <main>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" w-screen bg-[#ECEDF0]">
          <div className="bg-[white]">
            <button
              onClick={() => router.push("/admin/product")}
              className="flex p-[20px] gap-[20px]"
            >
              <ChevronBack />
              <p>Бүтээгдэхүүн нэмэх</p>
            </button>
          </div>
          <div className="m-[40px]">
            <UpdateProduct />
          </div>
        </div>
      </div>
    </main>
  );
};
export default product;
