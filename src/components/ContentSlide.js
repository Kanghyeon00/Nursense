import React, { useState } from "react";
import "./ContentSlide.css";
import { getUserDataFromCookie } from "./cookies"; // cookies.js 파일에서 필요한 함수 가져오기
import { useLanguage } from "../LanguageContext";
import ReadyModal from "./ReadyModal";

const ContentSlide = () => {
  const userData = getUserDataFromCookie(); // 쿠키에서 사용자 데이터 가져오기
  const { selectedLanguage, changeLanguage } = useLanguage();

  const openLuncher = () => {
    const launcherURL = `doublemlauncher://nursenselauncher?1?${userData.id}`; // 쿠키에서 가져온 사용자 ID 사용
    console.log({ launcherURL });
    window.location.href = launcherURL;
  };

  const [isReadyModalOpen, setIsReadyModalOpen] = useState(false);

  const openReadyModal = () => {
    setIsReadyModalOpen(true);
  };

  const closeReadyModal = () => {
    setIsReadyModalOpen(false);
  };

  const translateText = (key) => {
    // 선택된 언어에 따라 다른 번역을 반환합니다.
    switch (selectedLanguage) {
      case "ko":
        // 한국어 번역
        switch (key) {
          case "bedsore":
            return "욕창 임상실습";
          case "bedsoreDescription":
            return "욕창 관리부터 치료까지\n메타버스로 진행하는\n예비 임상실습";
          case "diabetes":
            return "당뇨 임상실습";
          case "diabetesDescription":
            return "당뇨 관리부터 치료까지\n메타버스로 진행하는\n예비 임상실습";
            case "simpleUrinaryTractInfection":
              return "단순도뇨 임상실습";
            case "simpleUrinaryTractInfectionDescription":
              return "단순도뇨 관리부터 치료까지\n메타버스로 진행하는\n예비 임상실습";
              case "urinaryIncontinence":
                return "유치도뇨 임상실습";
              case "urinaryIncontinenceDescription":
                return "유치도뇨 관리부터 치료까지\n메타버스로 진행하는\n예비 임상실습";
                case "intramuscularInjectionClinicalPractice":
                  return "근육주사임상실습";
                  case "intramuscularInjectionClinicalPracticeDescription":
                    return "근육주사 관리부터 주입까지\n메타버스로 진행하는\n예비 임상실습";
            case "learn":
              return "학습하기";
          // 다른 항목들에 대한 번역도 추가합니다.
          default:
            return "";
        }
      case "en":
        // 영어 번역
        switch (key) {
          case "bedsore":
            return "Bedsore Clinical Practice";
          case "bedsoreDescription":
            return "Pre-clinical practice conducted in the metaverse from bedsore management to treatment.";
          case "diabetes":
            return "Diabetes Clinical Practice";
          case "diabetesDescription":
            return "Pre-clinical practice conducted in the metaverse from diabetes management to treatment.";
            case "simpleUrinaryTractInfection":
              return "SimpleUrinaryTract\nInfection";
            case "simpleUrinaryTractInfectionDescription":
              return "Pre-clinical Practice in the Metaverse for Simple Urinary Tract Infection";
              case "urinaryIncontinence":
                return "Urinary\nIncontinence";
              case "urinaryIncontinenceDescription":
                return "Urinary Incontinence, Pre-clinical practice conducted in the metaverse.";
                case "intramuscularInjectionClinicalPractice":
                  return "Intramuscular Injection\nClinical Practice";
                  case "intramuscularInjectionClinicalPracticeDescription":
                    return "Pre-clinical Practice of Intramuscular Injections in the Metaverse";
            case "learn":
              return "learn";
          // 다른 항목들에 대한 번역도 추가합니다.
          default:
            return "";
        }
      default:
        return "";
    }
  };

  const contentData = [
    {
      title: translateText("bedsore"),
      description: translateText("bedsoreDescription"),
      buttonText: translateText("learn"),
      imageUrl: `${process.env.PUBLIC_URL}/img/bedsore.png`,
    },
    {
      title: translateText("diabetes"),
      description: translateText("diabetesDescription"),
      buttonText: translateText("learn"),
      imageUrl: `${process.env.PUBLIC_URL}/img/diabetes.png`,
    },
    {
      title: translateText("simpleUrinaryTractInfection"),
      description: translateText("simpleUrinaryTractInfectionDescription"),
      buttonText: translateText("learn"),
      imageUrl: `${process.env.PUBLIC_URL}/img/nelaton.png`,
    },
    {
      title: translateText("urinaryIncontinence"),
      description: translateText("urinaryIncontinenceDescription"),
      buttonText: translateText("learn"),
      imageUrl: `${process.env.PUBLIC_URL}/img/foley.png`,
    },
    {
      title: translateText("intramuscularInjectionClinicalPractice"),
      description: translateText("intramuscularInjectionClinicalPracticeDescription"),
      buttonText: translateText("learn"),
      imageUrl: `${process.env.PUBLIC_URL}/img/intramuscular.png`,
    },
    // 나머지 항목도 동일하게 번역합니다.
  ];

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };


  return (
    <>
      <div className="contentSlideContainer" onLanguageChange={handleLanguageChange}>
        <div className="contentSlideWrapper">
          <div className="contentText">
            <span>{" "}
              {selectedLanguage === "ko" ? "실습 콘텐츠 현황" : "Status of Practical Training Content"}</span>
            <span onClick={openReadyModal}>{" "}
              {selectedLanguage === "ko" ? "자세히보기 →" : "View Details →"}</span>
          </div>
          <div className="contentCardWrapper">
            {contentData.map((content, index) => (
              <div key={index} className="contentCard">
                <div className="cardInner">
                  <div className="cardTitle">
                    <p>{content.title}</p>
                    <p>{content.description}</p>
                  </div>
                  <div className="cardBottom">
                    <img src={content.imageUrl} alt={`Content ${index + 1} img`} />
                    <button onClick={openLuncher}>{content.buttonText}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isReadyModalOpen && <ReadyModal onClose={closeReadyModal} />}
      </div>
    </>
  );
};

export default ContentSlide;
