import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import HorizontalMenu from "@/components/user/HorizontalMenu";
import Product from "@/components/user/Product";
export default function Dashboard() {
  return (
    <div className=" flex flex-col gap-7 px-4">
      <Navbar /> 
      <HorizontalMenu/>
      <Product/>
      <Footer />
    </div>
  );
}
