// SuccessModal.js
import React from "react";
import { Link } from "react-router-dom";
import './SuccessModal.css';

const SuccessModal = ({ closeModal }) => {
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
            <span>회원가입이 완료되었습니다.</span>
            <Link to="/" className="backToMainButton">
              확인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
