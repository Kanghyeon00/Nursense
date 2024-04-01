import React, { useState, useEffect } from "react";
import "./Download.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

const Download = () => {
  const [downloadText, setDownloadText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  useEffect(() => {
    let currentIndex = 0;

    const updateText = () => {
      setIsVisible(false);

      setTimeout(() => {
        setDownloadText(downloadMessages[currentIndex]);
        setIsVisible(true);

        currentIndex = (currentIndex + 1) % downloadMessages.length;
      }, 500); // FadeOut 후 0.5초 후에 FadeIn 시작
    };

    // 초기 실행
    updateText();

    // 3초 간격으로 텍스트 업데이트
    const intervalId = setInterval(updateText, 3000);

    // 컴포넌트가 언마운트되면 interval 해제
    return () => clearInterval(intervalId);
  }, [selectedLanguage]); // selectedLanguage가 변경될 때마다 useEffect 실행

  // 선택된 언어에 따라 다운로드 메시지를 설정
  const downloadMessages =
    selectedLanguage === "ko"
      ? ["런처를 다운로드 하고 있습니다. 잠시만 기다려주세요.", "런처 다운로드가 완료되었다면 실행시켜 주세요."]
      : ["Downloading the launcher. Please wait a moment.", "Once the launcher download is complete, please run it."];

  return (
    <>
      <div className="downloadContainer">
        <Header onLanguageChange={handleLanguageChange} />
        <div className="downloadWrapper">
          <div className="downloadText">
            <div className="loaderWrapper">
              <img
                src={`${process.env.PUBLIC_URL}/img/nsLogo.png`}
                style={{ display: "block" }}
                alt="Logo"
              />
              <div className="droplet_spinner">
                <div className="droplet"></div>
                <div className="droplet"></div>
                <div className="droplet"></div>
              </div>
            </div>
            <span className={isVisible ? "fade-in-out show" : "fade-in-out"}>
              {downloadText}
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Download;
