'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState, ReactNode,useRef } from "react";
import { UserOrderContext } from "@/components/user/UserOrderProvider";
import { UserContext} from "@/components/user/context";
import Footer from "@/components/user/Footer";
import Navbar from "@/components/user/Navbar";

export default function DeliveryInf() {

    const uuid = require('uuid');
    const router = useRouter();
    const [error, setError] = useState("");
    const { orderData }: any = useContext(UserOrderContext);
    const {email}:any = useContext(UserContext);
    console.log(orderData);
    const productOrderedId = orderData[0]?._id?._id;
    const qty = orderData[0].quantity;

    let totalPrice = 0;
    for (let i = 0; i < orderData.length; i++) {totalPrice = totalPrice + orderData[i]?._id?.price * orderData[i]?.quantity; }

    const formDataRef = useRef({
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        appaetnentment: "",
        address: "",
        city: "",
        postalCode: ""
    });

    const handleOnChange = (field: string, value: string | number) => {
        formDataRef.current = { ...formDataRef.current, [field]: value };
    };

    const orderProduct = async () => {

        // if ( !formDataRef.current.email || !formDataRef.current.phoneNumber || !formDataRef.current.firstName || !formDataRef.current.lastName ||
        //     !formDataRef.current.city || !formDataRef.current.appaetnentment || !formDataRef.current.address || !formDataRef.current.city  
        // ) {
        //     setError("Бүх талбарийг бөглөнө үү!!!");
        //     return;
        // }
        try {
            const res = await axios.post("http://localhost:8000/order", {
                userId: email,
                productId: productOrderedId,
                phoneNumber: formDataRef.current.phoneNumber,
                firstName: formDataRef.current.firstName,
                lastName: formDataRef.current.lastName,
                address:formDataRef.current.address,
                appart: formDataRef.current.appaetnentment,
                city: formDataRef.current.city,
                amountPaid: totalPrice,
            });
            console.log("buy product");
            
            router.push("/user/orderCompleted");
        } catch (error) {
            console.log(error);  } }
    return(
        <div className=" flex flex-col gap-7 px-4">
            <Navbar />
            <div className="flex justify-center">

           
            <section className="w-[1440px] flex flex-col text-[#1D3178]">
                <div>
                    <h4 className="text-[24px] font-bold ">Heckto demo</h4>
                    <p className="mt-[10px] text-[12px]">Cart/ Information/ Shipping/ Payment</p>
                </div>
                <div className="flex justify-between ">
                    <div className="w-[792px] bg-[#F8F8FD] mt-[30px] rounded-md">
                        <div className="py-[50px] px-[30px]">
                            <div>
                                <p className="font-bold ">Contact Information</p>
                            </div>
                            <div className="mt-[30px] ">
                                <input className="w-full bg-[#F8F8FD]" type="text" placeholder="Email or mobile phone number" onChange={(e) => handleOnChange("phoneNumber", e.target.value)} />
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                            <div className="flex items-center mt-[30px] gap-[10px]">
                                <input type="checkbox" />
                                <p className="text-[#8A91AB]">Keep me up to date on news and excluive offers</p>
                            </div>
                            <div className="mt-[90px]">
                                <p className="font-bold ">Shipping address</p>
                            </div>
                            <div className="w-full flex justify-between mt-[30px]">
                                <div>
                                    <input className="w-[336px] bg-[#F8F8FD]" type="text" placeholder="First name (optional)" onChange={(e) => handleOnChange("firstName", e.target.value)} />
                                    <div className="mt-[10px]">
                                        <hr />
                                    </div>
                                </div>
                                <div>
                                    <input className="w-[336px] bg-[#F8F8FD]" type="text" placeholder="Last name" onChange={(e) => handleOnChange("lastName", e.target.value)} />
                                    <div className="mt-[10px]">
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[40px] ">
                                <input className="w-full bg-[#F8F8FD]" type="text" placeholder="Address" onChange={(e) => handleOnChange("address", e.target.value)} />
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                            <div className="mt-[40px] ">
                                <input className="w-full bg-[#F8F8FD]" type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" onChange={(e) => handleOnChange("appaetnentment", e.target.value)} />
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                            <div className="mt-[40px] ">
                                <input className="w-full bg-[#F8F8FD]" type="text" placeholder="City" onChange={(e) => handleOnChange("city", e.target.value)} />
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                            <div className="w-full flex justify-between mt-[30px]">
                                <div>
                                    <input className="w-[336px] bg-[#F8F8FD]" type="text" placeholder="Bangladesh" />
                                    <div className="mt-[10px]">
                                        <hr />
                                    </div>
                                </div>
                                <div>
                                    <input className="w-[336px] bg-[#F8F8FD]" type="text" placeholder="Postal Code" />
                                    <div className="mt-[10px]">
                                        <hr />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="py-[10px] px-[15px] text-[white] bg-[#FB2E86] mt-[80px] rounded-[5px] font-[600]">Continue Shipping</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[384px] mt-[30px]">

                        {orderData && orderData.map((product): any => {
                                const uniqeId = uuid.v4();
                            return (
                                <section key={uniqeId} className='flex items-center justify-between mt-[20px]'>
                                    <div>
                                        <img className='w-[86px] h-[87px] rounded-md' src={product?._id?.images} alt="" />
                                    </div>
                                    <div className='flex flex-col font-[800]'>
                                        <p className=' text-[14px]'>
                                            {product?._id?.productName}
                                        </p>
                                        <p className='text-[#A1A8C1] text-[12px] mt-[5px]'>
                                            {product?._id?.color}
                                        </p>
                                    </div>
                                    <div>
                                        {(product?._id?.price * product?.quantity)}
                                    </div>
                                </section>
                            )
                        })}




                        <div className="384px p-[30px] bg-[#F8F8FD] rounded-md mt-[30px]">
                            <div>
                                <div className="flex items-center justify-between ">
                                    <p>Нийлбэр:</p>
                                    <p className="text-[18px] font-[600]">{totalPrice}</p>
                                </div>
                                <div className="mt-[20px]">
                                    <hr />
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <div className="flex items-center justify-between ">
                                    <p>Төлөх дүн:</p>
                                    <p className="text-[20px] font-[600]">{totalPrice}</p>
                                </div>
                                <div className="mt-[20px]">
                                    <hr />
                                </div>
                            </div>
                            <button onClick={orderProduct} className="w-full py-[10px] px-[20px] mt-[20px] bg-[#19D16F] rounded-md text-[white]">Худалдан авах</button>
                            <div>
                                {error && ( <p className=" text-[#ff0000] font-extrabold text-center">
                                    {error}
                                </p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            </div>
            <Footer/>
        </div>
    )
}