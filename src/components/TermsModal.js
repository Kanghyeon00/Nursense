// TermsModal.js
import React from "react";
import "./TermsModal.css";
import { useLanguage } from "../LanguageContext";

const TermsModal = ({ closeTermsModal, message, message2 }) => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modalWrapper">
          <div className="warningIconWrapper">
            <img
              className="warningIcon"
              src={`${process.env.PUBLIC_URL}/img/warningIcon.png`}
              alt="warning icon"
            />
          </div>
          <div className="termsModalText">
            <span>{message}</span>
            <p>{message2}</p>
            <button className="closeModalButton" onClick={closeTermsModal}>
            {" "}
              {selectedLanguage === "ko" ? "확인" : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
