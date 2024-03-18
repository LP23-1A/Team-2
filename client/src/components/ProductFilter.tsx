import Calendar from "./images/Calendar";
import CategoryICON from "./images/CategoryICON";
import Dollar from "./images/Dollar";
import Searchbar from "./svg/Searchbar";

export default function ProductFilter() {
    return(
        <section className="flex items-center">
            <div className="flex items-center gap-[20px]">
                <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
                    <CategoryICON/>
                    <select className="py-[8px] px-[12px]" id="Ерөнхий ангилал">
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
                        <option value="Эрэгтэй">Эрэгтэй</option>
                        <option value="Эмэгтэй">Эмэгтэй</option>
                        <option value="Хүүхэд">Хүүхэд</option>
                    </select>
                </div>
                <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
                    <Calendar/>
                    <select className="py-[8px] px-[12px]" id="Ерөнхий ангилал">
                        <option value="" disabled selected>Сараар</option>
                        <option value="Эрэгтэй">Эрэгтэй</option>
                        <option value="Эмэгтэй">Эмэгтэй</option>
                        <option value="Хүүхэд">Хүүхэд</option>
                    </select>
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