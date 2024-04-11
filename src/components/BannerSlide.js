import React from "react";
import "./BannerSlide.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from "../LanguageContext";

const Slide = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  // 언어에 따라 이미지 파일 이름 동적으로 설정
  const banner1 = selectedLanguage === "ko" ? "banner1.png" : "banner1EN.png";
  const banner2 = selectedLanguage === "ko" ? "banner2.png" : "banner2EN.png";
  const banner3 = selectedLanguage === "ko" ? "banner3.png" : "banner3EN.png";
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  return (
    <>
      <div className="slideContainer">
        <div className="slideWrapper">
          <Slider {...settings}>
            <div>
              <img src={`${process.env.PUBLIC_URL}/img/${banner1}`} alt="Slide1" />
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/img/${banner2}`} alt="Slide2" />
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/img/${banner3}`} alt="Slide3" />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;
