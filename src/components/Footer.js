import React from "react";
import "./Footer.css";

const Footer = () => {

  const openDM = () => {
    window.location.href = 'http://www.wmscompany.co.kr';
  };

  
  return (
    <>
      <div className="footerContainer">
        <div className="footerWrapper">
          <div className="footerLogoWrapper">
            <img
              className="footerDmLogo"
              src={`${process.env.PUBLIC_URL}/img/dmLogo.png`}
              alt="logo"
              onClick={openDM}
            />
            <img
              className="sns"
              src={`${process.env.PUBLIC_URL}/img/instagram.png`}
              alt="snsLogo"
            />
            <img
              className="sns"
              src={`${process.env.PUBLIC_URL}/img/naver.png`}
              alt="snsLogo"
            />
            <img
              className="sns"
              src={`${process.env.PUBLIC_URL}/img/youtube.png`}
              alt="snsLogo"
            />
          </div>
          <div className="companyInfo">
            <span>회사명 : (주) 더블엠소셜컴퍼니</span>
            <span>대표자 : 김선미</span>
            <p>E-mail : wmsc0202@naver.com</p>
            <span>대구광역시 동대구로 465 스케일업허브 DASH 405,406호</span>
            <span>Tel : 1688-9564</span>
            <span>010-9436-5543</span>
            </div>
            <div className="footerCopy">
              <p>Copyrightⓒ2023 DoubleM All rights reserved.</p>
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
