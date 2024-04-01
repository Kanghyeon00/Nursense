import React, { useState } from 'react';
import './FindPw.css';
import axios from 'axios';
import TermsModal from './TermsModal';
import SuccessModal from './SuccessModal';
import CheckModal from './CheckModal';
import { useLanguage } from "../LanguageContext";

const FindPw = ({ closeModal }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const handleFindPw = async () => {
    try {
      const response = await axios.post('https://www.neusenseback.com/api/get/user/findpw', {
        id: id,
        email: email,
      });

      if (response.data.success) {
        setMessage(response.data.msg);
        setShowCheckModal(true);
      } else {
        setMessage(response.data.msg);
        setShowTermsModal(true);
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      setMessage('API 호출 중 오류가 발생했습니다.');
      setShowTermsModal(true);
    }
  };

  const handleCloseModal = () => {
    closeModal();
  };

  const renderModal = () => {
    if (showCheckModal) {
      return <CheckModal closeModal={handleCloseModal} checkMessage={
        selectedLanguage === "ko" ? "작성된 이메일로 임시 비밀번호를 발송하였습니다." : "An email with a temporary password has been sent to the provided email address."} />;
    } else if (showTermsModal) {
      return (
        <TermsModal
          closeTermsModal={() => setShowTermsModal(false)}
          message={
            selectedLanguage === "ko" ? "일치하는 정보가 없습니다." : "No matching information found."}
        />
      );
    }
    return null;
  };

  return (
    <>
      <div className="findPwContainer">
        <div className="findPwWrapper">
          <div className="findPwTitle">
            <span>{" "}
              {selectedLanguage === "ko" ? "비밀번호 찾기" : "Find Password"}</span>
            <img
              src={`${process.env.PUBLIC_URL}/img/closeButton.png`}
              alt="모달 닫기"
              onClick={handleCloseModal}
            />
          </div>
          <div className="findPwMain">
            <p>{" "}
              {selectedLanguage === "ko" ? "아이디를 입력해주세요" : "Please enter your username."}</p>
            <input
              type="text"
              placeholder={
                selectedLanguage === "ko" ? "아이디 입력" : "Enter your ID"}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <p>{" "}
              {selectedLanguage === "ko" ? "회원가입 당시 사용한 이메일 주소를 입력해 주세요." : "Please enter the email address you used during registration."}</p>
                        <input
              type="email"
              placeholder={
                selectedLanguage === "ko" ? "이메일 입력" : "Enter your E-mail"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="findPwButton">
            <button onClick={handleFindPw}>{" "}
              {selectedLanguage === "ko" ? "확인" : "Confirm"}</button>
          </div>
        </div>
      </div>
      {renderModal()}
    </>
  );
};

export default FindPw;