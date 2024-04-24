import React, { useState } from 'react';
import './ReadyModal.css';
import { useLanguage } from "../LanguageContext";

const ReadyModal = ({ onClose }) => {

  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const handleConfirm = () => {
    // 확인 버튼 클릭 시 실행되는 로직 추가 (예: 모달 닫기)
    onClose();
  };
  
  return (
    <>
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
          <div className="readyModalText">
            <p>{selectedLanguage === "ko" ? "준비중인 기능입니다." : "Feature under development"}</p>
            <button className="readyModalButton" onClick={handleConfirm}>
            {selectedLanguage === "ko" ? "확인" : "OK"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ReadyModal