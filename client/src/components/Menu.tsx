"use client";
import dashboardIcon from "@/components/images/dashboard.png";
import orderIcon from "@/components/images/clipboard.png";
import IncomeIcon from "@/components/images/income.png";
import productIcon from "@/components/images/product.png";
import settings from "@/components/images/settings.png";

import { useRouter } from "next/navigation";
function Menu() {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col gap-4 font-semibold text-sm px-4 w-[222px] pt-[34px]">
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="flex items-center gap-3"
        >
          <img className=" w-4, h-4" src={dashboardIcon.src} alt="" />
          Хяналтын самбар
        </button>
        <button
          onClick={() => router.push("/admin/order")}
          className="flex items-center gap-3"
        >
          <img className=" w-4, h-4" src={orderIcon.src} alt="" />
          Захиалга
        </button>
        <button
          onClick={() => router.push("/admin/income")}
          className="flex items-center gap-3"
        >
          <img className=" w-4, h-4" src={IncomeIcon.src} alt="" />
          Орлого
        </button>
        <button
          onClick={() => router.push("/admin/product")}
          className="flex items-center gap-3"
        >
          <img className=" w-4, h-4" src={productIcon.src} alt="" />
          Бүтээгдэхүүн
        </button>
        <button
          onClick={() => router.push("/admin/settings")}
          className="flex items-center gap-3"
        >
          <img className=" w-4, h-4" src={settings.src} alt="" />
          Тохиргоо
        </button>
      </div>
    </div>
  );
}
export default Menu;
