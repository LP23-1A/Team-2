'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel';

const CarouselMain = ({ casdata }:any) => {

  const uuid = require('uuid');
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
        {casdata && casdata.map((item: any) => {
          const uniqeId = uuid.v4();
          return(
            <div key={uniqeId}>
              <Carousel item={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselMain;
