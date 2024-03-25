'use client'
import img from "@/components/images/image.png";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProductIMG from "@/components/ProductIMG";
import { Aws } from "./Aws";

const BASE_URL_END_POINT = "http://localhost:8000/product"

type FileObject = File | null;

export default function AddProduct() {
    const router = useRouter()

    const [productName, setproductName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState('')
    const [price, setPrice] = useState('')
    const [qty, setQty] = useState('')
    const [categoryID, setCategoryID] = useState('Эрэгтэй,')
    const [category, setCategory] = useState('Tsamts')

    const handler = async () => {
        let res = await axios.post(BASE_URL_END_POINT, {productName : productName, description : description, price : price, qty : qty, categoryID : categoryID, images : images, category : category})
        console.log(res);
        router.push("/admin/product")
    }

    const handleImageUpload = async (e: any) => {
        try {
        //   setImages((prev) => [...prev, e.target.files[0]]);
        } catch (error) {
          console.log("Error uploading image:", error);
        }
      };

      const handleSubmit = async () => {
        if (!images.length) {
          return;
        }
        try {
          const urls = await axios.get("BASE_URL_END_POINT/upload-image");
          const imageRes = await axios.put(urls.data?.signedUrl, images[0], {
            headers: {
              "Content-Type": images[0],
            },
          });
          const formData = {
            productName,
            price,
            description,
            qty,
            categoryID,
            category,
            images: urls.data?.objectUrl,
          };
          const res = await axios.post(BASE_URL_END_POINT, formData);
          localStorage.setItem("product", JSON.stringify([res]));
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <section className="w-[1200px] flex flex-col gap-[25px] bg-[#ECEDF0] p-[20px]">
            <div className="flex gap-[25px]">
                <div className="w-[600px] flex flex-col gap-[25px]">
                    <div className="bg-[white] p-[25px] flex flex-col gap-[15px] rounded-md text-[black]">
                        <div>
                            <p>Бүтээгдэхүүний нэp</p>
                            <input className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Нэр" 
                            value={productName} 
                            onChange={(event) => setproductName(event.target.value)}
                            />
                        </div>
                        <div>
                            <p>Нэмэлт мэдээлэл</p>
                            <input className="w-full  bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="description" placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар." 
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                        <div>
                            <p>Барааны код</p>
                            <input className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="#12345678" />
                        </div>
                    </div>
                    <Aws/>
                    {/* <div className="bg-[white] p-[25px] text-[18px] font-[600] rounded-md text-[black]">
                        <p>Бүтээгдэхүүний зураг</p>
                        <div className="mt-[10px] flex gap-[10px]">
                            <div className="w-[125px] h-[125px] rounded-md border-dashed border-2"></div>
                        </div>
                    </div> */}
                    <div className=" bg-[white] p-[25px] flex gap-[20px] rounded-md text-[black]">
                        <div>
                            <p>Үндсэн үнэ</p>
                            <input className="bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Үндсэн үнэ" 
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>
                        <div>
                            <p>Үлдэгдэл тоо ширхэг</p>
                            <input className="bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Үлдэгдэл тоо ширхэг" 
                            value={qty} 
                            onChange={(event) => setQty(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[600px] flex flex-col gap-[25px] text-[black]">
                    <div className="p-[25px] bg-[white] flex flex-col gap-[15px] rounded-md">
                        <div>
                            <p>Ерөнхий ангилал</p>
                            <select onChange={(event) => setCategoryID(event.target.value)} className="w-full bg-[#f2f2f2] py-[8px] px-[12px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" id="Ерөнхий ангилал">
                                <option value="Эрэгтэй">Эрэгтэй</option>
                                <option value="Эмэгтэй">Эмэгтэй</option>
                                <option value="Хүүхэд">Хүүхэд</option>
                            </select>
                        </div>
                        <div>
                            <p>Дэд ангилал</p>
                            <select onChange={(event) => setCategory(event.target.value)} className="w-full bg-[#f2f2f2] py-[8px] px-[12px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" id="Ерөнхий ангилал">
                                <option value="Tsamts">Tsamts</option>
                                <option value="Umd">Umd</option>
                                <option value="Gutal">Gutal</option>
                            </select>
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
                    <div className="p-[25px] bg-[white] flex flex-col rounded-md h-[192px]">
                        <p className="font-[600] text-[16px]">Таг</p>
                        <input className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]" type="text" placeholder="Таг нэмэх..." />
                        <p className="text-[#b8b8b8]">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
                    </div>
                </div>
            </div>
            <div className="pl-[940px]">
                <div className="flex gap-[15px] ">
                    <button className="py-[10px] px-[20px] border-2 border-[#e0dfdf] bg-[white] rounded-md">Ноорог</button>
                    <button onClick={() => {handler(); router.push("/admin/product");}}  className="py-[10px] px-[20px] bg-[black] text-[white] rounded-md">Нийтлэх</button>
                </div>
            </div>
        </section>
    )
}