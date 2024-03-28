import ContactInformation from "@/components/user/ContactInf";
import Footer from "@/components/user/Footer";
import Navbar from "@/components/user/Navbar";

export default function DeliveryInf() {
    return(
        <section className=" flex flex-col gap-7 px-4">
            <Navbar />
            <div className="flex justify-center">
                <ContactInformation/>
            </div>
            <Footer/>
        </section>
    )
}