'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel';

const CarouselMain = ({ casdata }) => {
  console.log(casdata);
  //   const carouselData = [{ id: 1 }, { id: 2 }, { id: 3 }];

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
    <div className='2xl:w-[100%]'>
      <Slider {...settings}>
        {casdata.map((item) => (
          <div key={item.id}>
            <Carousel item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselMain;
