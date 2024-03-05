import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" w-screen bg-[#ECEDF0]"></div>
      </div>
    </div>
  );
};
export default dashboard;
