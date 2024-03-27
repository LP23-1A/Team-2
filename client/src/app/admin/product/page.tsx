import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import ProductMain from "@/components/Product";

const product = () => {
  return(
    <main>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className="w-screen bg-[#ECEDF0]">
          <div className="flex gap-[30px] p-[20px]">
            <button className="p-[10px]">Бүтээгдэхүүн</button>
            <button className="p-[10px]">Ангилал</button>
          </div>
          <div className="ml-[20px]">
            <ProductMain/>
          </div>
        </div>
      </div>
    </main>
  )
};
export default product;
