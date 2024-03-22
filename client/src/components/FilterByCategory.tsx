import { useEffect, useState } from "react";
import CategoryICON from "./images/CategoryICON";

export default function FilterByCategory({ data, setFilteredData, filteredData }: any) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const filterByCategory = (category: string) => {
        let filteredData;
        if (category === "All") {
          setFilteredData(data);
        } else {
          filteredData = data.filter((el: any) => el.category === category);
          if (filteredData.length > 0) {
            setFilteredData(filteredData);
          } else {
            setFilteredData([]);
          }
        }
      };

    const handleCategoryChange = async (e : any) => {
        const categoryData = e.target.value
        filterByCategory(categoryData)
    }

    return(
        <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
        <CategoryICON/>
        <select 
            id="categoryID"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="py-[8px] px-[12px]">
            <option value="" disabled selected>Ангилал</option>
            <option value="Эрэгтэй">Эрэгтэй</option>
            <option value="Эмэгтэй">Эмэгтэй</option>
            <option value="Хүүхэд">Хүүхэд</option>
        </select>
    </div>
    )
}