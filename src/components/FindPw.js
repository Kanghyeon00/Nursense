import React, { useState } from 'react';
import './FindPw.css';
import axios from 'axios';
import TermsModal from './TermsModal';
import SuccessModal from './SuccessModal';
import CheckModal from './CheckModal';

const FindPw = ({ closeModal }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showCheckModal, setShowCheckModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

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
      return <CheckModal closeModal={handleCloseModal} checkMessage={"작성된 이메일로 비밀번호를 발송 하였습니다."} />;
    } else if (showTermsModal) {
      return (
        <TermsModal
          closeTermsModal={() => setShowTermsModal(false)}
          message={"일치하는 정보가 없습니다."}
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
            <span>아이디 찾기</span>
            <img
              src={`${process.env.PUBLIC_URL}/img/closeButton.png`}
              alt="모달 닫기"
              onClick={handleCloseModal}
            />
          </div>
          <div className="findPwMain">
            <p>아이디를 입력해주세요</p>
            <input
              type="text"
              placeholder="아이디 입력"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <p>회원가입 당시 사용한 이메일 주소를 입력해 주세요.</p>
                        <input
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="findPwButton">
            <button onClick={handleFindPw}>확인</button>
          </div>
        </div>
      </div>
      {renderModal()}
    </>
  );
};

export default FindPw;