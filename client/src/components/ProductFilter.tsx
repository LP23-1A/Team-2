'use client'
import Calendar from "./images/Calendar";
import Searchbar from "./svg/Searchbar";
import { useEffect, useState } from "react";
import CategoryICON from "./images/CategoryICON";
import Dollar from "./images/Dollar";

const BASE_URL = "http://localhost:8000/product"
const BASE_URL_END_POINT = "http://localhost:8000/product/getAllProduct"

interface ProductData {
  _id: String
  productName: String
  description: String
  price: Number
  qty: Number
  categoryID: String
  category: String
}

const ByGenders: string[] = ["All", "Эрэгтэй", "Эмэгтэй", "Хүүхэд"]
const ByDates: string[] = ["Үнэ өсөхөөр", "Үнэ буурахаар", "All"]

export default function ProductFilter({ data, setFilteredData, filteredData }: any) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const filterByCategory = (categoryID: string) => {    
    if (categoryID == "All") {
      setFilteredData(data);        
    } else {
      filteredData = data.filter((el: any) => el.categoryID == categoryID);
      if (filteredData.length > 0) {
        setFilteredData(filteredData);
      } else {
        setFilteredData([]);
      }
    }
  };

  const filterByDates = (selectedHour: any) => {
    const now = new Date();
    const today = now.getDate();
    const yesterDay = today - 1;
    const twoDaysAgo = today - 2;

    const filteredData = data.filter((el: any) => {
      const exactCreationDay = parseInt(el.createdAt.slice(8, 10));
      if (selectedHour == 0 && exactCreationDay === today) {
        return true;
      } else if (selectedHour == 1 && exactCreationDay === yesterDay) {
        return true;
      } else if (selectedHour == 2 && exactCreationDay == twoDaysAgo) {
        return true;
      }
      return false;
    });
    if (filteredData.length > 0) {
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  };

  const handleSortByPrice = (type: string) => {
    const sortedData = [...filteredData];

    sortedData.sort((a, b) => {
      if (type === "Үнэ өсөхөөр") {
        return a.price - b.price;
      } else if (type === "Үнэ буурахаар") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredData(sortedData);
  };

  const handleSearch = (productName: string) => {
    const filtered = data.filter((item: { productName: string }) =>
      item.productName.toLowerCase().startsWith(productName.toLowerCase())
    );
    setFilteredData(filtered);
  };  

  const handleInputChange = (e: { target: { value: any } }) => {
    const searchProduct = e.target.value;
    handleSearch(searchProduct);
  };

  const handlePriceChange = (e: { target: { value: any } }) => {
    const Option = e.target.value;
    handleSortByPrice(Option);
  };

  const handleCategoryChange = async (e: any) => {
    const categoryData = e.target.value
    filterByCategory(categoryData)
    setSelectedCategory(categoryData)
  }
  return (
    <section className="w-full flex items-center justify-between">
      <div className="flex items-center gap-[20px]">
        <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
          <CategoryICON />
          <select
            id="categoryID"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="py-[8px] px-[12px]">
            {ByGenders.map((el, i) => (
              <option className="text-black" key={i}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
          <Dollar />
          <select
            onChange={handlePriceChange}
            className="py-[8px] px-[12px]" id="Ерөнхий ангилал">
            <option value="" disabled selected>Үнэ</option>
            {ByDates.map((el, i) => (
              <option className="text-black" key={i}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
          <Calendar />
          <input type="date" id="date" placeholder="Ерөнхий ангилал" />
        </div>
      </div>
      <div className="w-[420px] bg-[white] rounded-md">
        <div className="w-full flex gap-[10px] p-[10px]">
          <Searchbar />
          <input onChange={handleInputChange} className="w-full" type="text" placeholder="Бүтээгдэхүүний нэр, SKU, UPC" />
        </div>
      </div>
    </section>
  )
}