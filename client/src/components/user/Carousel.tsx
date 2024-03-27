<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> carousel hagsiin ni hiisen
import sandal from "@/components/images/sandal.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  return (
    <div className="bg-[#F2F0FF] flex justify-center m-auto">
      <div className="grid grid-cols-2 gap-52">
        <div className="flex flex-col justify-center">
          <div className="text-[16px] text-[#FB2E86]">
            Тав тухтай орчинг таны амьдралд
          </div>
          <div className="text-[53px] font-extrabold">
            2024 оны хамгийн <br /> шинэ загвар
          </div>
          <div className="text-[#8A8FB9] text-[16px]">
            Швед улсын хамгийн шилдэг брэндийг албан ёсны <br /> эрхтэйгээр
            оруулж ирж байна
          </div>
          <div>
            <button className="flex px-7 py-4 rounded-sm text-[#fff] bg-[#FB2E86]">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <img className="size-96" src={sandal.src} alt="Sandal" />
      </div>
    </div>
  );
};
<<<<<<< HEAD
=======
function Carousel() {
  return <div></div>;
}
>>>>>>> ehlvvlsen
=======
>>>>>>> carousel hagsiin ni hiisen
export default Carousel;
