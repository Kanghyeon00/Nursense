// TermsModal.js
import React from "react";
import "./TermsModal.css";

const TermsModal = ({ closeTermsModal, message, message2 }) => {
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
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
