import React from 'react'
import './About.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from "../LanguageContext";

const About = () => {

  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const openAbout = () => {
    window.open('https://drive.google.com/file/d/1E3EK7dAbRIAypUS_lJPqO8fB1kgpXiMw/view?usp=drive_link', '_blank');
  };

  return (
    <>
        <div className='aboutContainer'>
          <Header />
            <div className='aboutWrapper'>
              <span>{" "}
              {selectedLanguage === "ko" ? "준비중 입니다." : "Coming Soon"}</span>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default About