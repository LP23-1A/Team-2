"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import BestProducts from "@/components/user/BestProducts";
import NewProduct from "@/components/user/NewProduct"; // Assuming this is the correct import for the Product component
import AboutTheService from "@/components/user/AboutTheService";
import CarouselMain from "@/components/user/CarouselMain";

const API = "http://localhost:8000/product";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Navbar />
      <HorizontalMenu />
      <CarouselMain casdata={data} /> <BestProducts data={data} />
      <NewProduct />
      <AboutTheService />
      <Footer />
    </div>
  );
}
