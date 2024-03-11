import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import clipboard from "@/components/images/clipboard.png";
import user from "@/components/images/user.png";

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <Menu />
        <div className=" w-screen bg-[#ECEDF0] px-6 pt-[34px]">
          <div className=" grid gap-[24px] grid-flow-col">
            <div className="bg-[white] px-6 py-4 rounded-xl">
              <div>
                <div className="flex gap-2 font-semibold text-[16px]">
                  <p>$</p>
                  <p>Орлого</p>
                </div>
                <p className=" font-bold text-[32px]">235,000₮</p>
                <p className="text-[#5E6166] text-[14px]">Өнөөдөр</p>
              </div>
            </div>
            <div className="bg-[white] px-6 py-4 rounded-xl">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-[15px] h-[15px]"
                    src={clipboard.src}
                    alt=""
                  />
                  <p>Захиалга</p>
                </div>
                <p className=" font-bold text-[32px]">52</p>
                <p className="text-[#5E6166] text-[14px]">Өнөөдөр</p>
              </div>
            </div>
            <div className="bg-[white] px-6 py-4 rounded-xl">
              <div>
                <div className="flex gap-2 items-center">
                  <img className="w-[15px] h-[15px]" src={user.src} alt="" />
                  <p>Хэрэглэгч</p>
                </div>
                <p className=" font-bold text-[32px]">980</p>
                <p className="text-[#5E6166] text-[14px]">Өнөөдөр</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dashboard;
