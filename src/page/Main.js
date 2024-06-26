import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BannerSlide from '../components/BannerSlide';
import ContentSlide from '../components/ContentSlide';
import Footer from '../components/Footer';
import Popup from '../components/Popup'; // 팝업 컴포넌트를 import 해줍니다.
import { useLanguage } from "../LanguageContext";

const Main = () => {
  const [showPopup, setShowPopup] = useState(false); // 팝업을 보여줄지 여부를 관리하는 state
  const { selectedLanguage, changeLanguage } = useLanguage(); // LanguageContext에서 상태와 함수 가져오기

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  // 팝업을 띄우는 함수
  const openPopup = () => {
    setShowPopup(true);
  };

  // 컴포넌트가 마운트되면 팝업을 띄웁니다.
  useEffect(() => {
    openPopup();
  }, []);

  return (
    <>
      <div className='mainContainer'>
        <div className='mainWrapper'>
          <Header onLanguageChange={handleLanguageChange} />
          <BannerSlide />
          <ContentSlide />
          <Footer />
        </div>
      </div>
      {/* 팝업을 보여주는 조건문 */}
      {showPopup && <Popup />}
    </>
  );
};

export default Main;