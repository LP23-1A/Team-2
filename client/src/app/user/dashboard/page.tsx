"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import BestProducts from "@/components/user/BestProducts";
import Product from "@/components/user/NewProduct";
import AboutTheService from "@/components/user/AboutTheService";
const API = "http://localhost:8000/product/bestproducts";
import CarouselMain from "@/components/user/CarouselMain";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const categoryHandler = async () => {
    const res = await axios.get(API);
    setData(res.data);
  };
  useEffect(() => {
    categoryHandler();
  }, []);

  return (
    <div className=" flex flex-col gap-7">
      <Navbar />
      <HorizontalMenu />
      <CarouselMain casdata={data} />
      <BestProducts data={data} />
      <Product />
      <AboutTheService />
      <Footer />
    </div>
  );
}
