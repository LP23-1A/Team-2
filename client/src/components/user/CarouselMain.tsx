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
  };

  return (
    <div className="2xl:w-[1024px]">
      <Slider {...settings}>
        <div>
          <Carousel />
        </div>
        <div>slide2</div>
        <div>slide3</div>
      </Slider>
    </div>
  );
};
export default CarouselMain;
