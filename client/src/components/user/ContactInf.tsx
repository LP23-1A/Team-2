import ContactData from "@/components/user/ContactData"
import { useRef } from "react";

export default function ContactInformation() {
    const formDataRef = useRef({
        email: "",
        phoneNumber: "",
        firstName : "",
        lastName : "",
        appaetnentment: "",
        address: "",
        city : "",
        postalCode : ""
      });

      const handleOnChange = (field: string, value: string | number) => {
        formDataRef.current = { ...formDataRef.current, [field]: value };
      };

    return(
        <section className="w-[1200px] flex flex-col text-[#1D3178]">
            <div>
                <h4 className="text-[24px] font-bold ">Heckto demo</h4>
                <p className="mt-[10px] text-[12px]">Cart/ Information/ Shipping/ Payment</p>
            </div>
            <div className="flex justify-between ">
                <div className="w-[792px] bg-[#BFC6E0] mt-[30px] rounded-md">
                    <div className="py-[50px] px-[30px]">
                        <div>
                            <p className="font-bold ">Contact Information</p>
                        </div>
                        <div className="mt-[30px] ">
                            <input className="w-full bg-[#BFC6E0]" type="text" placeholder="Email or mobile phone number" onChange={(e) => handleOnChange("email", e.target.value)}/>
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
                                <input className="w-[336px] bg-[#BFC6E0]" type="text" placeholder="First name (optional)" onChange={(e) => handleOnChange("firstName", e.target.value)}/>
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <input className="w-[336px] bg-[#BFC6E0]" type="text" placeholder="Last name" onChange={(e) => handleOnChange("lastName", e.target.value)}/>
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="mt-[40px] ">
                            <input className="w-full bg-[#BFC6E0]" type="text" placeholder="Address" onChange={(e) => handleOnChange("Address", e.target.value)}/>
                            <div className="mt-[10px]">
                                <hr />
                            </div>
                        </div>
                        <div className="mt-[40px] ">
                            <input className="w-full bg-[#BFC6E0]" type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" onChange={(e) => handleOnChange("Appaetnentment", e.target.value)}/>
                            <div className="mt-[10px]">
                                <hr />
                            </div>
                        </div>
                        <div className="mt-[40px] ">
                            <input className="w-full bg-[#BFC6E0]" type="text" placeholder="City" onChange={(e) => handleOnChange("city", e.target.value)}/>
                            <div className="mt-[10px]">
                                <hr />
                            </div>
                        </div>
                        <div className="w-full flex justify-between mt-[30px]">
                            <div>
                                <input className="w-[336px] bg-[#BFC6E0]" type="text" placeholder="Bangladesh" />
                                <div className="mt-[10px]">
                                    <hr />
                                </div>
                            </div>
                            <div>
                                <input className="w-[336px] bg-[#BFC6E0]" type="text" placeholder="Postal Code" />
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
                <ContactData/>
                    <div className="384px p-[30px] bg-[#BFC6E0] rounded-md mt-[30px]">
                        <div>
                            <div className="flex items-center justify-between ">
                                <p>Нийлбэр:</p>
                                <p className="text-[18px] font-[600]">750’000₮</p>
                            </div>
                            <div className="mt-[20px]">
                                <hr />
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <div className="flex items-center justify-between ">
                                <p>Төлөх дүн:</p>
                                <p className="text-[20px] font-[600]">750’000₮</p>
                            </div>
                            <div className="mt-[20px]">
                                <hr />
                            </div>
                        </div>
                        <button className="w-full py-[10px] px-[20px] mt-[20px] bg-[#19D16F] rounded-md text-[white]">Худалдан авах</button>
                    </div>
                </div>
            </div>
        </section>
    )
}