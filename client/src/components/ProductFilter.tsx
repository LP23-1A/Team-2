import Calendar from "./images/Calendar";
import CategoryICON from "./images/CategoryICON";
import Dollar from "./images/Dollar";
import Searchbar from "./svg/Searchbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { MongoClient } from 'mongodb';
import FilterByPrice from "./FiterbyPrice";
import FilterByCategory from "./FilterByCategory";

const BASE_URL = "http://localhost:8000/product"
const BASE_URL_END_POINT = "http://localhost:8000/product/getAllProduct"

interface ProductCategory{
  _id: String
  productName: String
  description: String
  price: Number
  qty: Number
  categoryID : String
  category : String
  }

export default function ProductFilter() {

    return(
        <section className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[20px]">
                <FilterByCategory/>
                <FilterByPrice/>
                <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
                    <Calendar/>
                    <input type="date" id="date" placeholder="Ерөнхий ангилал"/>
                </div>
            </div>
            <div className="w-[420px] bg-[white] rounded-md">
                <div className="w-full flex gap-[10px] p-[10px]">
                    <Searchbar/>
                    <input className="w-full" type="text" placeholder="Бүтээгдэхүүний нэр, SKU, UPC" />
                </div>
            </div>
        </section>
    )
}