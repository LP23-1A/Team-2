import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import HorizontalMenu from "@/components/user/HorizontalMenu";
export default function dashboard() {
  return (
    <div>
      <Navbar /> 
      <HorizontalMenu/>
      <Footer />
    </div>
  );
}
