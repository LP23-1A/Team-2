import Calendar from "./images/Calendar";
import CategoryICON from "./images/CategoryICON";
import Dollar from "./images/Dollar";
import Searchbar from "./svg/Searchbar";
import { useEffect, useState } from "react";
import axios from "axios";

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
    const [data, setData] = useState<ProductCategory[]>([]);
    const [products, setProducts] = useState<ProductCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const fetchProductsByCategory = async (categoryID: string) => {
      try {
        const res = await fetch(`${BASE_URL_END_POINT}?categoryID=${categoryID}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: ProductCategory[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const categoryID= event.target.value;
      setSelectedCategory(categoryID);
      if (categoryID) {
        fetchProductsByCategory(categoryID);
      } else {
        fetchProductsByCategory("");
      }
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get<ProductCategory[]>(BASE_URL_END_POINT);
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    return(
        <section className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[20px]">
                <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
                    <CategoryICON/>
                    <select 
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="py-[8px] px-[12px]" id="Ерөнхий ангилал">
                        <option value="" disabled selected>Ангилал</option>
                        <option value="Эрэгтэй">Эрэгтэй</option>
                        <option value="Эмэгтэй">Эмэгтэй</option>
                        <option value="Хүүхэд">Хүүхэд</option>
                    </select>
                </div>
                <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
                    <Dollar/>
                    <select className="py-[8px] px-[12px]" id="Ерөнхий ангилал">
                        <option value="" disabled selected>Үнэ</option>
                        <option value="Эрэгтэй">Үнэ өсөхөөр</option>
                        <option value="Эмэгтэй">Үнэ буурахаар</option>
                    </select>
                </div>
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