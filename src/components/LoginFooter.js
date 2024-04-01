import React, { useState } from "react";
import "./LoginFooter.css";
import { useLanguage } from "../LanguageContext";
import Policy from "./Policy";

const LoginFooter = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isPolicyModalOpen, setPolicyModalOpen] = useState(false);
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const openPolicyModal = () => {
    setPolicyModalOpen(true);
  };

  const closePolicyModal = () => {
    setPolicyModalOpen(false);
  };

  return (
    <>
      <div className="loginFooterContainer" onLanguageChange={handleLanguageChange}>
        <div className="loginFooterWrapper">
          <div className="loginFooterCopy">
            <p>Copyrightⓒ2023 DoubleM All rights reserved.</p>
            <span onClick={openPolicyModal} style={{cursor:'pointer'}}>{" "}
              {selectedLanguage === "ko" ? "이용약관" : "Terms of Service"}</span>
            <span onClick={openPolicyModal} style={{cursor:'pointer'}}>{" "}
              {selectedLanguage === "ko" ? "개인정보처리방침" : "Privacy Policy"}</span>
          </div>
        </div>
      </div>
      {isPolicyModalOpen && <Policy onClose={closePolicyModal} />}
    </>
  );
};

export default LoginFooter;
