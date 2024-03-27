import axios from 'axios';
import {useEffect, useState} from 'react';
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import BestProduct from "@/components/user/BestProduct";
import BestProducts from '@/components/user/BestProducts';
const API = "http://localhost:8000/product/bestproducts";
export default function Dashboard() {

  const [data, setData] = useState([]);
  const categoryHandler = async()=> {
      const res = await axios.get(API);   
      setData(res.data);
  }
  useEffect(()=> {
    categoryHandler();
  },[]);

  return (
    <div className=" flex flex-col gap-7 px-4">
      <Navbar /> 
      <HorizontalMenu/>
      <BestProducts data = {data}/>
      <Footer />
    </div>
  );
}
