import axios from "axios";
import { useState } from "react";

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

const BASE_URL_END_POINT = "http://localhost:8000/product/getProduct"

export default function ProductData() {
    const [productName, setproductName] = useState([])
    return(
        AllProduct.map((props) =>{
            return(
                <section className="w-[1400px] flex items-center gap-[50px] py-[10px] px-[20px] border-t">
                    <div className="w-[68px] flex items-center justify-center">
                        <input className="h-[17px] w-[17px]" type="checkbox"/>
                    </div>
                    <div className="w-[156px] flex items-center gap-[10px] py-[10px] px-[20px]">
                        <img className=" w-[40px] h-[40px] rounded-[50%]" src={props.img} alt="" />
                        <div>
                            <p>{props.productName}</p>
                            <p>{props.code}</p>
                        </div>
                    </div>
                    <div className="w-[214px] py-[10px] px-[20px]">
                        <p>{props.category}</p>
                    </div>
                    <div className="w-[156px] py-[10px] px-[20px]">
                        <p>{props.price}</p>
                    </div>
                    <div className="w-[156px] py-[10px] px-[20px]">
                        <p>{props.remainderOf}</p>
                    </div>
                    <div className="w-[156px] py-[10px] px-[20px]">
                        <p>{props.soldOut}</p>
                    </div>
                    <div className="w-[156px] py-[10px] px-[20px]">
                        <p>{props.createdDate}</p>
                    </div>
                    <div className="w-[156px] py-[10px] px-[20px]">
                    </div>
                </section>
            )
        })
    )
}