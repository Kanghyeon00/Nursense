import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../actions';
import FindId from "../components/FindId";
import FindPw from "../components/FindPw";
import LoginFooter from "../components/LoginFooter";
import { useLanguage } from "../LanguageContext";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register')
  }

  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isFindIdModalOpen, setFindIdModalOpen] = useState(false);
  const [isFindPwModalOpen, setFindPwModalOpen] = useState(false);

  const openFindIdModal = () => {
    setFindIdModalOpen(true);
  };

  const closeFindIdModal = () => {
    setFindIdModalOpen(false);
  };
  
  const openFindPwModal = () => {
    setFindPwModalOpen(true);
  };

  const closeFindPwModal = () => {
    setFindPwModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://www.neusenseback.com/login",
      loginData
    );

    if (response.status === 200 && response.data.success) {

      // Redux 스토어에 로그인 성공 데이터 디스패치
      dispatch(loginSuccess(response.data)); // 전체 사용자 데이터를 전달


      // 쿠키에 토큰과 사용자 ID 저장
      setTokenAndUserIdInCookie(response.data.token, response.data.refreshToken, response.data.id);

      // navigate를 사용하여 메인페이지로 이동
      navigate('/');
    } else {
      // 로그인 실패
      console.error("로그인 실패:", response.data);
    }
  } catch (error) {
    // 네트워크 오류 등의 예외 처리
    alert('잘못된 요청입니다. 아이디 혹은 비밀번호를 확인해주세요.')
  }
};

  const setTokenAndUserIdInCookie = (token, refreshToken, id) => {
    // 쿠키에 토큰 저장
    document.cookie = `token=${token}; path=/`;

    // 쿠키에 리프레시 토큰 저장
    document.cookie = `refreshToken=${refreshToken}; path=/`;

    // 쿠키에 사용자 ID 저장
    document.cookie = `id=${id}; path=/`;
  };
  

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    setShowPassword(!showPassword); // 상태 업데이트 추가
  };

  const { selectedLanguage, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  return (
    <div className="loginContainer">
      <Header onLanguageChange={handleLanguageChange} />
      <div className="loginWrapper">
        <div className="loginLogoWrapper">
          <img
            className="loginLogo"
            src={`${process.env.PUBLIC_URL}/img/registerLogo.png`}
            alt="logo"
          />
        </div>
        <p>{" "}
              {selectedLanguage === "ko" ? "Nursense에 로그인하여 더 많은 서비스를 경험하세요." : "Log in to Nursense to experience more services."}</p>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              name="id"
              value={loginData.id}
              onChange={handleChange}
              placeholder={
                selectedLanguage === "ko" ? "아이디 입력" : "Enter your ID"}
            />
          </label>
          <br />
          <label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder={
                  selectedLanguage === "ko" ? "비밀번호 입력" : "Enter your password"
                }
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/${
                  showPassword ? "eyeOpen.png" : "eyeClose.png"
                }`}
                alt="Show Password"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              />
            </div>
          </label>
          <br />
          <button type="submit">{" "}
              {selectedLanguage === "ko" ? "로그인" : "Login"}</button>
        </form>
        <div className="loginSearchWrapper">
          <span onClick={openFindIdModal}>{" "}
              {selectedLanguage === "ko" ? "아이디 찾기" : "Find ID"}</span>
          <span onClick={openFindPwModal}>{" "}
              {selectedLanguage === "ko" ? "비밀번호 찾기" : "Find Password"}</span>
          <span onClick={goToRegister}>{" "}
              {selectedLanguage === "ko" ? "회원가입" : "Register"}</span>
        </div>
      </div>
      {isFindIdModalOpen && <FindId closeModal={closeFindIdModal} />}
      {isFindPwModalOpen && <FindPw closeModal={closeFindPwModal} />}
      <LoginFooter />
    </div>
  );
};

export default Login;
