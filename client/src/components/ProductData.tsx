'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import TrashCan from "./images/trash";
import Update from "./images/update";
import { useRouter } from "next/navigation";

const BASE_URL_END_POINT = "http://localhost:8000/product/getAllProduct"
const BASE_URL = "http://localhost:8000/product"

interface ProductType {
    _id: String
    productName: String
    description: String
    price: Number
    qty: Number
    category : String
}

export default function ProductData() {
    const router = useRouter()
    const [productName, setproductName] = useState([])
    const [data, setData] = useState<ProductType[]>([])

    const GetAllProduct = async () => {
        try {
            let res = await axios.get(BASE_URL_END_POINT)
            setproductName(res.data)
            console.log('data', res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const removeProduct = async (productID: string) => {
        try {
          let res = await axios.delete(`${BASE_URL}/${productID}`)
          console.log("deleted", res)
        } catch (error) {
          console.log(error)
        }
      }

    useEffect( () =>{
        GetAllProduct()
    })

    return(
        productName.map((props) =>{
            return(
                <section key={props} className="flex items-center gap-[50px] py-[10px] px-[20px] border-t ">
                    <div className="w-[68px] flex items-center justify-center">
                        <input className="h-[17px] w-[17px]" type="checkbox"/>
                    </div>
                    <div className="w-[186px] flex items-center gap-[10px] py-[10px] ">
                        <img className="w-[40px] h-[40px] rounded-[50%]" src={props.img} alt="" />
                        <div>
                            <p>{props.productName}</p>
                            <p>{props.code}</p>
                        </div>
                    </div>
                    <div className="w-[214px] py-[10px] ">
                        <p>{props.categoryID}</p>
                    </div>
                    <div className="w-[186px] py-[10px] px-[5px]">
                        <p>{props.price}</p>
                    </div>
                    <div className="w-[186px] py-[10px] px-[5px]">
                        <p>{props.qty}</p>
                    </div>
                    <div className="w-[186px] py-[10px] ">
                        <p>{props.soldOut}</p>
                    </div>
                    <div className="w-[186px] py-[10px] ">
                        <p>{props.createdDate}</p>
                    </div>
                    <div className="w-[186px] py-[10px] px-[20px] flex gap-[30px]">
                        <button onClick={() => removeProduct(props._id)}>
                            <TrashCan/>
                        </button>
                        <button onClick={() => router.push('/admin/updateProduct')}>
                            <Update/>
                        </button>
                    </div>
                </section>
            )
        })
    )
}