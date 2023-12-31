import React, { useState } from "react";
import "./Footer.css";
import Policy from "./Policy";

const Footer = () => {

  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const openDM = () => {
    window.location.href = 'http://www.wmscompany.co.kr'
  };

  const openInsta = () => {
    window.location.href = 'https://www.instagram.com/wmsc.official/'
  };

  const openBlog = () => {
    window.location.href = 'https://blog.naver.com/wmsc0202'
  };

  const openYoutube = () => {
    window.location.href = 'https://www.youtube.com/@user-fy4yn4yk2c'
  };

  const openPolicyModal = () => {
    setIsPolicyModalOpen(true);
  };

  const closePolicyModal = () => {
    setIsPolicyModalOpen(false);
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
              src={`${process.env.PUBLIC_URL}/img/insta.png`}
              alt="snsLogo"
              onClick={openInsta}
            />
            <img
              className="sns"
              src={`${process.env.PUBLIC_URL}/img/naver.png`}
              alt="snsLogo"
              onClick={openBlog}
            />
            <img
              className="sns"
              src={`${process.env.PUBLIC_URL}/img/youtube.png`}
              alt="snsLogo"
              onClick={openYoutube}
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
              <span onClick={openPolicyModal}>이용약관</span>
              <span onClick={openPolicyModal}>개인정보처리방침</span>
            </div>
        </div>
      </div>
      {isPolicyModalOpen && <Policy onClose={closePolicyModal} />}
    </>
  );
};

export default Footer;
