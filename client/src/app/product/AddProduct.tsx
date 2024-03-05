import img from "@/components/images/image.png";
 
export default function AddProduct() {
    return(
        <section className="flex gap-[25px] bg-[black]">
            <div className="flex flex-col gap-[25px]">
                <div className="w-[500px] bg-[white] p-[25px] flex flex-col gap-[15px] rounded-md">
                    <div>
                        <p>Бүтээгдэхүүний нэр</p>
                        <input className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Нэр" />
                    </div>
                    <div>
                        <p>Нэмэлт мэдээлэл</p>
                        <input className="w-full  bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="description" placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар." />
                    </div>
                    <div>
                        <p>Барааны код</p>
                        <input className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="#12345678" />
                    </div>
                </div>
                <div className="w-[500px] bg-[white] p-[25px] text-[18px] font-[600] rounded-md">
                    <p>Бүтээгдэхүүний зураг</p>
                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[125px] h-[125px] rounded-md border-dashed border-2"></div>
                    </div>
                </div>
                <div className="w-[500px] bg-[white] p-[25px] flex gap-[20px] rounded-md">
                    <div>
                        <p>Үндсэн үнэ</p>
                        <input className="bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Үндсэн үнэ" />
                    </div>
                    <div>
                        <p>Үлдэгдэл тоо ширхэг</p>
                        <input className="bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Үлдэгдэл тоо ширхэг" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[25px]">
                <div className="w-[500px] p-[25px] bg-[white] flex flex-col gap-[15px] rounded-md">
                    <div>
                        <p>Ерөнхий ангилал</p>
                        <input className="w-full bg-[#f2f2f2] py-[8px] px-[12px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Сонгох" />
                    </div>
                    <div>
                        <p>Дэд ангилал</p>
                        <input className="w-full bg-[#f2f2f2] py-[8px] px-[12px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Сонгох" />
                    </div>
                </div>
                <div className="p-[25px] bg-[white] flex flex-col gap-[15px] rounded-md">
                    <p className="font-[600] text-[18px]">Төрөл</p>
                    <div className="flex flex-col gap-[10px]">
                        <div className="flex gap-[10px]">
                            <p>Өнгө</p>
                            <button className="w-[30px] h-[30px] bg-[#f2f2f2] flex text-align justify-center rounded-full">+</button>
                        </div>
                        <div className="flex gap-[10px]">
                            <p>Хэмжээ</p>
                            <button className="w-[30px] h-[30px] bg-[#f2f2f2] flex text-align justify-center rounded-full">+</button>
                        </div>
                    </div>
                    <button className="w-[140px] border-2 border-[#e0dfdf] rounded-md bg-[white] py-[5px] px-[8px]">Төрөл нэмэх</button>
                </div>
                <div className="p-[25px] bg-[white] flex flex-col rounded-md">
                    <p className="font-[600] text-[16px]">Таг</p>
                    <input className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Таг нэмэх..." />
                    <p className="text-[#b8b8b8]">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
                </div>
            </div>
        </section>
    )
}