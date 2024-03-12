import axios from "axios";
import { useEffect, useState } from "react";
import TrashCan from "./images/trash";
import Update from "./images/update";

const AllProduct = [
    {
        img : "https://s3-alpha-sig.figma.com/img/870c/ff96/3a9d86a8561466394d0f19d0e0819d0d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVn-WSw~T877olfsd2k6g~0FenXXBBOeejEW5Cjqre4thnjWy61YhA8gtGUhFqdmGC7Bmiawql5t2-Du0wy6V0x2Op8sNvHrBg8iF0oEDdSVMJD~9xYfj1vL6zGBUnnKdPFtz9rRaMy-WWBMYu~lNLL4AYvbkvznq1jS3NC~uwrWceANpkp7QGp9I-Z~s8t3t3eDr1dekSTkQ7QtShEj6suKnpUhjurGx1fMXgps1lju~ed-Ets8KPuWEI9ouJ10649d9XoX5OVDF7ZUwhH46S2e0VuceAhWFCeUhXbY3rjyjyVK6rmjhpWHxRs3GO~UrO56tuWeWAK2xY8tlJOQbw__",
        productName : "Laptop",
        code : "001",
        category : "emegtei, tsunh",
        price : 15000,
        remainderOf : 51,
        soldOut : 15,
        createdDate : "2024-01-10"
    },
    {
        img : "https://s3-alpha-sig.figma.com/img/870c/ff96/3a9d86a8561466394d0f19d0e0819d0d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVn-WSw~T877olfsd2k6g~0FenXXBBOeejEW5Cjqre4thnjWy61YhA8gtGUhFqdmGC7Bmiawql5t2-Du0wy6V0x2Op8sNvHrBg8iF0oEDdSVMJD~9xYfj1vL6zGBUnnKdPFtz9rRaMy-WWBMYu~lNLL4AYvbkvznq1jS3NC~uwrWceANpkp7QGp9I-Z~s8t3t3eDr1dekSTkQ7QtShEj6suKnpUhjurGx1fMXgps1lju~ed-Ets8KPuWEI9ouJ10649d9XoX5OVDF7ZUwhH46S2e0VuceAhWFCeUhXbY3rjyjyVK6rmjhpWHxRs3GO~UrO56tuWeWAK2xY8tlJOQbw__",
        productName : "Laptop",
        code : "001",
        category : "emegtei, tsunh",
        price : 15000,
        remainderOf : 51,
        soldOut : 15,
        createdDate : "2024-01-10"
    },
    {
        img : "https://s3-alpha-sig.figma.com/img/870c/ff96/3a9d86a8561466394d0f19d0e0819d0d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVn-WSw~T877olfsd2k6g~0FenXXBBOeejEW5Cjqre4thnjWy61YhA8gtGUhFqdmGC7Bmiawql5t2-Du0wy6V0x2Op8sNvHrBg8iF0oEDdSVMJD~9xYfj1vL6zGBUnnKdPFtz9rRaMy-WWBMYu~lNLL4AYvbkvznq1jS3NC~uwrWceANpkp7QGp9I-Z~s8t3t3eDr1dekSTkQ7QtShEj6suKnpUhjurGx1fMXgps1lju~ed-Ets8KPuWEI9ouJ10649d9XoX5OVDF7ZUwhH46S2e0VuceAhWFCeUhXbY3rjyjyVK6rmjhpWHxRs3GO~UrO56tuWeWAK2xY8tlJOQbw__",
        productName : "Laptop",
        code : "001",
        category : "emegtei, tsunh",
        price : 15000,
        remainderOf : 51,
        soldOut : 15,
        createdDate : "2024-01-10"
    },
]

const BASE_URL_END_POINT = "http://localhost:8000/product/getAllProduct"
const BASE_URL = "http://localhost:8000/product"

interface ProductType {
    _id: String
    productName: String
    description: String
    price: Number
    qty: Number
}

export default function ProductData() {
    const [productName, setproductName] = useState([])
    const [data, setData] = useState<ProductType[]>([]);

    const GetAllProduct = async () => {
        try {
            let res = await axios.get(BASE_URL_END_POINT)
            setproductName(res.data)
            console.log('data', res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const removeProduct = async (productID: string) => {
        try {
          let res = await axios.delete(`${BASE_URL}/${productID}`);
          const removeData = data.filter((item) => item._id === productID);
          setData(removeData);
          console.log("deleted", res);
        } catch (error) {
          console.log(error);
        }
      };

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
                        <button>
                            <Update/>
                        </button>
                    </div>
                </section>
            )
        })
    )
}