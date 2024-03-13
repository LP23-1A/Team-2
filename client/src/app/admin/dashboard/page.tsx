"use client";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
const dashboard = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" w-screen bg-[#ECEDF0]"></div>
      </div>
    </div>
  );
};
export default dashboard;
