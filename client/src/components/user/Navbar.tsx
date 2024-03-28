"use client";
import { useContext, useState } from "react";
import { UserContext } from "./context";
import {
  LoginAvatar,
  Email,
  Phone,
  Heart,
  CartNavbar,
  DownArrow,
  Search,
} from "../svg/Allicons";
import { useRouter } from "next/navigation";

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

  const context = useContext(UserContext);
  const router = useRouter();
  const handleJumpLogin = () => {
    router.push("user/login");
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
              <CartNavbar />
              <div className="w-[12px] h-[12px] bg-[#EC42A2] rounded-full text-[12px] flex justify-center items-center absolute top-0 right-0 ">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex bg-white px-[360px] py-[22px] justify-between">
        <div className=" flex gap-14">
          <h1 className=" text-[34px] font-bold text-[#0D0E43]">Ecommerce</h1>
          <div className=" flex gap-6">
            <div className="flex gap-1 items-center cursor-pointer">
              <button className=" text-[#FB2E86]">
              <select name="" id="Menu" onChange={handleChangePage}>
                <option value="Нүүр">Нүүр</option>
                <option value="Бүх бараа">Бүх бараа</option>
              </select>
              </button>
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
