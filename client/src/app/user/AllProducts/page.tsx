import Footer from "@/components/user/Footer";
import Navbar from "@/components/user/Navbar";
import Allproduct from "../../../components/user/AllProduct";

export default function showAllProducts() {
    return(
        <section>
            <Navbar/>
            <div className="flex justify-center">
                <Allproduct/>
            </div>
            <Footer/>
        </section>
    )
}