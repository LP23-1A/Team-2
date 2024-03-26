import { LoginAvatar, Email, Phone, Heart, Cart, DownArrow, Search } from "../svg/Allicons";
export default function Navbar(){
    return (
        <div className="">
            <div className="flex bg-[#7E33E0] px-[360px]  text-[#F1F1F1] py-[14px] justify-between">  
                <div className="flex gap-16">
                    <div className="flex gap-[10px] items-center cursor-pointer"> <Email/><button>info@ecommerce.mn</button> </div>    
                    <div className="flex gap-3 items-center cursor-pointer"> <Phone/><button>77123456</button> </div>  
                </div>     
                <div className="flex gap-7">
                    <div className="flex gap-1 items-center cursor-pointer"><button>Нэвтрэх</button> <LoginAvatar/></div>  
                    <div className="flex gap-1 items-center cursor-pointer"><button>Хадгалах</button><Heart/></div>
                    <Cart/> 
                </div>             
            </div>
            <div className=" flex bg-white px-[360px] py-[22px] justify-between"> 
                    <div className=" flex gap-14">
                        <h1 className=" text-[34px] font-bold text-[#0D0E43]">Ecommerce</h1>
                        <div className=" flex gap-6">
                            <div className="flex gap-1 items-center cursor-pointer"><button className=" text-[#FB2E86]">Нүүр</button><DownArrow/></div>
                            <button className="text-[#0D0E43]">Ангилал</button>
                        </div>                   
                    </div>
                    <div className="flex items-center">
                        <input className="w-[317px] h-[51px] border-2 border-[#E7E6EF] p-1" name="search" />
                        <div className=" bg-[#FB2E86] px-[10px] py-[15px]"> <Search/></div>
                    </div>
            </div>
        </div>
    );}