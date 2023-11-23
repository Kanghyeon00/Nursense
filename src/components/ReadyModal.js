import React, { useState } from 'react';
import './ReadyModal.css';

const ReadyModal = ({ onClose }) => {

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
            <p>준비중인 기능입니다.</p>
            <button className="readyModalButton" onClick={handleConfirm}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ReadyModal