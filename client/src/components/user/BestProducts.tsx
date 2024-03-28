import BestProduct from "./BestProduct";

const BestProducts = ({ data }: any) => {
  return (
    <div className="w-[100%] flex flex-col items-center mt-[100px]">
      <div className="w-[1200px] flex flex-col gap-7">
        <p className=" text-[42px] text-center font-extrabold text-[#1A0B5B]">
          Онцлох бүтээгдэхүүн
        </p>
        <div className="flex w-[100%] justify-between ">
          {data &&
            data.map((item: []) => {
              return (
                <BestProduct
                  id={item._id}
                  productName={item.productName}
                  price={item.price}
                  imageUrl={item.images}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
