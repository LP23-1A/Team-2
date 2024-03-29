"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "./context";
import { UserOrderContext } from "./UserOrderProvider";
import {
  LoginAvatar,
  Email,
  Phone,
  Heart,
  CartNavbar,
  DownArrow,
  Search,
} from "../svg/Allicons";

export default function Navbar() {
  const [selectedValue, setSelectedValue] = useState()

  const handleChangePage = async (event: { target: { value: any } }) => {
      const selectedPage = event.target.value;
      setSelectedValue(selectedPage);

      if (selectedPage === "Бүх бараа") {
        router.push("../../user/AllProducts")
      }
      if (selectedPage === "Нүүр") {
        router.push("../../user/dashboard")
      }
  }

  const print =  () => {
    console.log("Navbar Working");
  };
  
  const { orderData }: any = useContext(UserOrderContext);
  const context = useContext(UserContext);
  const router = useRouter();

  const handleJumpLogin = () => {
    router.push("user/login");
  };

  const homePage = () => {
    router.push("/");
  };

  const cartProduct = () => {
    router.push("/user/Cart");
  };

  const handle = () => {
    if (context.email === "") {
      return (
        <div className="flex gap-1 items-center">
          <button onClick={handleJumpLogin}>Нэвтрэх</button>
          <LoginAvatar />
        </div>
      );
    } else {
      return (
        <div className="flex gap-1 items-center cursor-pointer">
          <button>{context.email}</button> <LoginAvatar />
        </div>
      );
    }
  };

  handle();

  return (
    <div className="flex justify-center flex-col bg-[#7E33E0] w-[100%]">
      <div className=" w-[100%] flex justify-center ">
        <div className="flex w-[1200px] text-[#F1F1F1] py-[14px] justify-between">
          <div className="flex gap-16">
            <div className="flex gap-[10px] items-center cursor-pointer">
              <Email />
              <button>info@ecommerce.mn</button>
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <Phone />
              <button>77123456</button>
            </div>
          </div>
          <div className="flex gap-7">
            {handle()}
            <div className="flex gap-1 items-center cursor-pointer">
              <button>Хадгалах</button>
              <Heart />
            </div>
            <div className="relative w-[30px] h-[25px] flex justify-center items-center">
              <button onClick={cartProduct}> <CartNavbar /></button>
              <div style={orderData.length === 0 ? { opacity: "0" } : { opacity: "1" }} className="w-[12px] h-[12px] bg-[#EC42A2] rounded-full text-[12px] flex justify-center items-center absolute top-0 right-0 ">
                {orderData.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex bg-white py-[22px] w-[100%] justify-center">
        <div className="flex w-[1200px] justify-between">
        <div className=" flex gap-14">
            <h1 onClick={homePage} className=" text-[34px] font-bold text-[#0D0E43] cursor-pointer">Ecommerce</h1>
            <div className=" flex gap-6">
              <div className="flex gap-1 items-center cursor-pointer">
                <button className=" text-[#FB2E86]">Нүүр</button>
                <DownArrow />
              </div>
              <button className="text-[#0D0E43]">Ангилал</button>
              
            </div>
          </div>
          <div className="flex items-center">
            <input
              className="w-[317px] h-[51px] border-2 border-[#E7E6EF] p-1"
              name="search"
            />
            <div className=" bg-[#FB2E86] px-[10px] py-[15px]">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
