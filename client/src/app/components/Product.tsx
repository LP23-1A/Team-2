import ProductData from "../components/ProductData";

export default function Product() {
    return(
        <section className="w-[1400px] bg-[white] p-[10px]">
            <div className="flex gap-[30px] py-[10px] px-[20px] font-[600]">
                <div className="w-[68px]">
                    
                </div>
                <div className="w-[150px] py-[10px] px-[20px]">
                    <p>Бүтээгдэхүүн</p>
                </div>
                <div className="w-[214px] py-[10px] px-[20px]">
                    <p>Ангилал</p>
                </div>
                <div className="w-[150px] p-[10px]">
                    <p>Үнэ</p>
                </div>
                <div className="w-[150px] py-[10px]">
                    <p>Үлдэгдэл</p>
                </div>
                <div className="w-[150px] py-[10px]">
                    <p>Зарагдсан</p>
                </div>
                <div className="w-[150px] py-[10px] px-[5px]">
                    <p>Нэмсэн огноо</p>
                </div>
            </div>
            <ProductData/>
        </section>
    )
}