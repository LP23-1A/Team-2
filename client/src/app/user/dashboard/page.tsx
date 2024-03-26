"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import HorizontalMenu from "@/components/user/HorizontalMenu";
<<<<<<< HEAD
import BestProducts from "@/components/user/BestProducts"; 
import Product from "@/components/user/NewProduct";
import AboutTheService from "@/components/user/AboutTheService";
const API = "http://localhost:8000/product/bestproducts";
import CarouselMain from "@/components/user/CarouselMain";
=======
import Carousel from "@/components/user/Carousel";
>>>>>>> ehlvvlsen
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
<<<<<<< HEAD
    <div className=" flex flex-col gap-7 px-4">
      <Navbar />
      <HorizontalMenu />
      <CarouselMain />
      <BestProducts data={data} />
      <Product />
      <AboutTheService/>
=======
    <div>
      <Navbar />
      <Carousel />
      <HorizontalMenu />
>>>>>>> ehlvvlsen
      <Footer />
    </div>
  );
}
