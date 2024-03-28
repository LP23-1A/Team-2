import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";

const CarouselMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="2xl:w-[1920px]">
      <Slider {...settings}>
        <div>
          <Carousel />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <Carousel />
        </div>
      </Slider>
    </div>
  );
};
export default CarouselMain;
