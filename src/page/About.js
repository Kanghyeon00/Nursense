import React from "react";
import "./About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const { selectedLanguage, changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login')
  }
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const openAbout = () => {
    window.open(
      "https://drive.google.com/file/d/1E3EK7dAbRIAypUS_lJPqO8fB1kgpXiMw/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <>
      <div className="aboutContainer">
        <Header onLanguageChange={handleLanguageChange} />
        <div className="aboutWrapper">
          <div className="about1Wrapper">
            <div className="aboutLeft1Wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/img/nsBigLogo.png`}
                alt="img"
              />
              <p>간호학생들을 위한 메타버스 교육 솔루션</p>
              <span>
                널센스는 메타버스 기반 게이미피케이션 간호교육 플랫폼 입니다.
              </span>
              <button onClick={goToLogin}>자세히 보기</button>
              <div className="aboutVideoWrapper">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/videoThumbnail.png`}
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/videoThumbnail.png`}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="aboutRight1Wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/img/about1Img.png`}
                alt="img"
              />
            </div>
          </div>
          <div className="about2Wrapper">
            <div className="aboutLeft2Wrapper">
              <h1>햅틱 디바이스</h1>
              <p className="hapticEn">Haptic Device</p>
              <p>
                햅틱디바이스는 사용자의 손동작을
                <br />
                보다 정밀하게 추적하여 실감나는 간호술기를 체험할 수 있습니다.
              </p>
              <div className="aboutCardWrapper">
                <div className="aboutCard">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/accurity.png`}
                    alt="img"
                  />
                  <p>정확성</p>
                </div>
                <div className="aboutCard">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/comfortable.png`}
                    alt="img"
                  />
                  <p>착용감</p>
                </div>
                <div className="aboutCard">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/vive.png`}
                    alt="img"
                  />
                  <p>진동 피드백</p>
                </div>
              </div>
            </div>
            <div className="aboutRight2Wrapper">
              <img src={`${process.env.PUBLIC_URL}/img/haptic.png`} alt="img" />
            </div>
          </div>
          <div className="about3Wrapper">
            <div className="about3TitleWrapper">
              <span>
                사용해본 사람들의 <span>100+</span>개의 후기
              </span>
            </div>
            <div className="about3LogoWrapper">
              <div>
                <img src={`${process.env.PUBLIC_URL}/img/gumi.png`} alt="img" />
                <img src={`${process.env.PUBLIC_URL}/img/dip.png`} alt="img" />
                <img
                  src={`${process.env.PUBLIC_URL}/img/changjo.png`}
                  alt="img"
                />
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/img/hanyong.png`}
                  alt="img"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/img/yeonsei.png`}
                  alt="img"
                />
              </div>
            </div>
            <div className="aboutReviewWrapper">
              <img src={`${process.env.PUBLIC_URL}/img/dda2.png`} alt="img" />
              <div className="aboutReviewBox1">
                <span>
                  {" "}
                  저는 최근 '널센스'라는 메타버스 간호교육 플랫폼을 경험하게
                  되었습니다. 이 플랫폼은 간호학 학습 경험을 혁신적으로
                  바꿔놓았습니다. 처음으로 '널센스'에 접속했을 때, 가상의 간호
                  교실에서 현실과 거의 흡사한 환경을 발견했습니다. 시뮬레이션은
                  매우 현실적이었고, 환자 상호작용은 실제 상황과 매우 흡사하여
                  간호 업무에 대한 자신감을 키우는 데 도움이 되었습니다.
                </span>
              </div>
              <div className="aboutReviewBox2">
                <span>
                  '널센스'는 현실과 가상의 융합을 통해 최고의 학습 경험을
                  제공합니다. 가상 시뮬레이션을 통해 향상된 간호 기술과 지식은
                  실제 환자 상황에서도 큰 도움이 되었습니다. 마지막으로,
                  '널센스'는 미래의 간호 전문가로서의 역량을 키우는 데 있어 큰
                  역할을 할 것으로 기대됩니다. 현대 간호 교육의 새로운 지평을
                  여는 이 플랫폼은 간호학 학생들에게 꼭 필요한 혁신적인 도구임을
                  확신합니다.
                </span>
              </div>
              <img src={`${process.env.PUBLIC_URL}/img/dda1.png`} alt="img" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
