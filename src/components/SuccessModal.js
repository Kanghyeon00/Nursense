// SuccessModal.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './SuccessModal.css';
import { useLanguage } from "../LanguageContext";

const SuccessModal = ({ closeModal }) => {

  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modalWrapper">
          <div className="successIconWrapper">
            <img
              className="successIcon"
              src={`${process.env.PUBLIC_URL}/img/successIcon.png`}
              alt="success icon"
            />
          </div>
          <div className="successModalText">
            <span>{selectedLanguage === "ko" ? "회원가입이 완료되었습니다." : "Your registration has been completed"}</span>

          </div>
          <button onClick={goToHome} className="backToMainButton">
              확인
            </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
