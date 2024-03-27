
import BestProduct from "./BestProduct"

const BestProducts = ({ data }: any) => {
   
    return (
        <div className=" flex flex-col gap-10 mt-[129px] items-center">
            <p className=" text-[42px] font-extrabold text-[#1A0B5B]">Онцлох бүтээгдэхүүн</p>
            <div className="flex gap-12">
                {data && data.map((item: []) => {
                    return (
                        <BestProduct id={item._id} productName={item.productName} price={item.price} imageUrl={item.images} />
                    );
                })}
            </div>

        </div>
    )
}

export default BestProducts
