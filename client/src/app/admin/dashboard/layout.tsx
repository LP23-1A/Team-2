import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const ParLayout = ({
  children,
  bestProducts,
  activeRegion,
  sales,
}: {
  children: ReactNode;
  bestProducts: ReactNode;
  activeRegion: ReactNode;
  sales: ReactNode;
}) => {
  return (
    <section>
      <Navbar />
      <div className="flex">
        <Menu />
        <div
          className="bg-[#ECEDF0] h-screen flex flex-col gap-8"
          style={{ width: "calc(100vw - 225px)" }}
        >
          {children}
          <div className="grid grid-flow-col px-6 gap-6">
            {bestProducts}
            <div className="flex flex-col gap-6">
              {sales}
              {activeRegion}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParLayout;
