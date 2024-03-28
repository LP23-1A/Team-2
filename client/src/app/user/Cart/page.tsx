'use client'

import { useContext } from "react";
import Navbar from "@/components/user/Navbar";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Footer from "@/components/user/Footer";
import { ProductContext } from "@/components/user/ProductContext";
export default function Cart() {
    const { cart, setCart } = useContext(ProductContext);

    console.log("passed cart", cart);

    return (
        <div>
            <h1>e</h1>
        </div>

    );
}