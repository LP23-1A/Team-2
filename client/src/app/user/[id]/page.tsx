import { usePathname, useSearchParams, useParams } from "next/navigation";


import Navbar from "@/components/user/Navbar";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Footer from "@/components/user/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails(){
    const pathName = usePathname();
    console.log(pathName);
    
    const [data, setData] = useState([]);
    const productDetailsHandler = async()=> {
        const res = await axios.get(`http://localhost:8000/product${pathName}`);   
        console.log(res);
        
    }
    useEffect(()=> {
        productDetailsHandler();
    },[]);

    return (
        <div>
            <Navbar/>
            <HorizontalMenu/>
            <Footer/>
            <h1>user Product</h1>
        </div>
    );
}