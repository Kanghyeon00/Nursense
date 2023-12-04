import React from "react";
import "./BannerSlide.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 한 번에 보여지는 슬라이드의 개수
    slidesToScroll: 1,
    autoplay: true,        // 자동 재생 활성화
    autoplaySpeed: 3000,   // 자동 재생 간격 (3초)
  }

  return (
    <>
      <div className="slideContainer" >
        <div className="slideWrapper">
        <Slider {...settings}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/banner1.png`} alt="Slide1" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/banner2.png`} alt="Slide2" />
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/banner3.png`} alt="Slide3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;
