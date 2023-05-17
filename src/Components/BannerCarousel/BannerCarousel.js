import React from 'react';
import './BannerCarousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BannerCarousel = ({data}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:3000,
      };
  return (
    <div className='BannerCarousel'>
        <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.Imgsrc} alt="" className="BannerCarousel-Image" />
          </div>
        ))}
        </Slider>
    </div>
  )
}

export default BannerCarousel;