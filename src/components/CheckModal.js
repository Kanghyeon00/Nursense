// SuccessModal.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './SuccessModal.css';

const CheckModal = ({ closeModal, checkMessage }) => {

  const navigate = useNavigate();

  const goToLogin = () => {
    // 로그인 페이지로 이동
    navigate('/login');
    // 페이지를 새로고침
    window.location.reload();
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
            <span>{checkMessage}</span>

          </div>
          <button onClick={goToLogin} className="backToMainButton">
              확인
            </button>
        </div>
      </div>
    </div>
  );
};

export default CheckModal;
