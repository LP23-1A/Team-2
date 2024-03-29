import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = "http://localhost:8000/product/bestproducts";

const Carousel = ({ item }: any) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const categoryHandler = async () => {
    const res = await axios.get(API);
    setData(res.data);
  };
  useEffect(() => {
    categoryHandler();
  }, []);
  return (
    <div className="bg-[#F2F0FF] flex justify-center m-auto">
      <div className="grid grid-cols-2 gap-52 w-[1200px] py-[60px]">
        <div className="flex flex-col justify-center">
          <div className="text-[16px] text-[#FB2E86]">
            Тав тухтай орчинг таны амьдралд
          </div>
          <div className="text-[53px] font-extrabold">
            2024 оны хамгийн <br /> шинэ загвар
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-[#8A8FB9] text-[16px]">
              Швед улсын хамгийн шилдэг брэндийг албан ёсны <br /> эрхтэйгээр
              оруулж ирж байна
            </div>
            <div>
              <button
                onClick={() => router.push(`/user/${item._id}`)}
                className="flex px-7 py-4 rounded-sm text-[#fff] bg-[#FB2E86]"
              >
                Дэлгэрэнгүй
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="size-96" src={item.images[0]} alt="Sandal" />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
