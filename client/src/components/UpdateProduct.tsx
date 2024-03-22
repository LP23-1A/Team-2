"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const BASE_URL = "http://localhost:8000/product";

type FileObject = File | null;

export default function updateProduct() {
  const router = useRouter();

  const [productName, setproductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [categoryID, setCategoryID] = useState("");

  const search = useSearchParams();
  const productID = search.get("productID");

  const handleUpdate = async () => {
    try {
      const Data = {
        ...(productName && { productName }),
        ...(price && { price }),
        ...(qty && { qty }),
        ...(categoryID && { categoryID }),
      };
      console.log("product updated", productID);
      await axios.put(`${BASE_URL}/${productID}`, Data);
    } catch (error) {
      console.log("can't update");
    }
  };

  return (
    <section className="w-[1200px] flex flex-col gap-[25px] bg-[#ECEDF0] p-[20px]">
      <div className="flex gap-[25px]">
        <div className="w-[600px] flex flex-col gap-[25px]">
          <div className="bg-[white] p-[25px] flex flex-col gap-[15px] rounded-md text-[black]">
            <div>
              <p>Бүтээгдэхүүний нэp</p>
              <input
                className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                type="text"
                placeholder="Нэр"
                value={productName}
                onChange={(event) => setproductName(event.target.value)}
              />
            </div>
            <div>
              <p>Нэмэлт мэдээлэл</p>
              <input
                className="w-full  bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                type="description"
                placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div>
              <p>Барааны код</p>
              <input
                className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                type="text"
                placeholder="#12345678"
              />
            </div>
          </div>
          {/* <form onSubmit={submit}>
                        <input onChange={handleFileChange} type="file" accept="image/*"></input>
                        <input value={caption} onChange={handleCaptionChange} type="text" placeholder='Caption'></input>
                        <button type="submit">Submit</button>
                    </form> */}
          <div className="bg-[white] p-[25px] text-[18px] font-[600] rounded-md text-[black]">
            <p>Бүтээгдэхүүний зураг</p>
            <div className="mt-[10px] flex gap-[10px]">
              <div className="w-[125px] h-[125px] rounded-md border-dashed border-2"></div>
            </div>
          </div>
          <div className=" bg-[white] p-[25px] flex gap-[20px] rounded-md text-[black]">
            <div>
              <p>Үндсэн үнэ</p>
              <input
                className="bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                type="text"
                placeholder="Үндсэн үнэ"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div>
              <p>Үлдэгдэл тоо ширхэг</p>
              <input
                className="bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                type="text"
                placeholder="Үлдэгдэл тоо ширхэг"
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
              <select
                onChange={(event) => setCategoryID(event.target.value)}
                className="w-full bg-[#f2f2f2] py-[8px] px-[12px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                id="Ерөнхий ангилал"
              >
                <option value="Эрэгтэй">Эрэгтэй</option>
                <option value="Эмэгтэй">Эмэгтэй</option>
                <option value="Хүүхэд">Хүүхэд</option>
              </select>
            </div>
            <div>
              <p>Дэд ангилал</p>
              <input
                className="w-full bg-[#f2f2f2] py-[8px] px-[12px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
                type="text"
                placeholder="Сонгох"
              />
            </div>
          </div>
          <div className="p-[25px] bg-[white] flex flex-col gap-[15px] rounded-md">
            <p className="font-[600] text-[18px]">Төрөл</p>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <p>Өнгө</p>
                <button className="w-[30px] h-[30px] bg-[#f2f2f2] flex text-align justify-center rounded-full">
                  +
                </button>
              </div>
              <div className="flex gap-[10px]">
                <p>Хэмжээ</p>
                <button className="w-[30px] h-[30px] bg-[#f2f2f2] flex text-align justify-center rounded-full">
                  +
                </button>
              </div>
            </div>
            <button className="w-[140px] border-2 border-[#e0dfdf] rounded-md bg-[white] py-[5px] px-[8px]">
              Төрөл нэмэх
            </button>
          </div>
          <div className="p-[25px] bg-[white] flex flex-col rounded-md h-[192px]">
            <p className="font-[600] text-[16px]">Таг</p>
            <input
              className="w-full bg-[#f2f2f2] py-[6px] px-[10px] rounded-md border-2 border-[#e0dfdf] mt-[5px]"
              type="text"
              placeholder="Таг нэмэх..."
            />
            <p className="text-[#b8b8b8]">
              Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="pl-[940px]">
        <div className="flex gap-[15px] ">
          <button className="py-[10px] px-[20px] border-2 border-[#e0dfdf] bg-[white] rounded-md">
            Ноорог
          </button>
          <button
            onClick={() => {
              handleUpdate();
              router.push("/admin/product");
            }}
            className="py-[10px] px-[20px] bg-[black] text-[white] rounded-md"
          >
            Нийтлэх
          </button>
        </div>
      </div>
    </section>
  );
}
