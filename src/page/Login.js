import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register')
  }

  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
        // 로그인 성공
        console.log("로그인 성공:", response.data);

        // 로그인 후에 필요한 추가 작업 수행
      } else {
        // 로그인 실패
        console.error("로그인 실패:", response.data);
      }
    } catch (error) {
      // 네트워크 오류 등의 예외 처리
      console.error("로그인 중 오류 발생:", error);
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    setShowPassword(!showPassword); // 상태 업데이트 추가
  };

  return (
    <div className="loginContainer">
      <Header />
      <div className="loginWrapper">
        <div className="loginLogoWrapper">
          <img
            className="loginLogo"
            src={`${process.env.PUBLIC_URL}/img/registerLogo.png`}
          />
        </div>
        <p>Nursense에 로그인하여 더 많은 서비스를 경험하세요.</p>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              name="id"
              value={loginData.id}
              onChange={handleChange}
              placeholder="아이디 입력"
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
                placeholder="비밀번호 입력"
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
          <button type="submit">로그인</button>
        </form>
        <div className="loginSearchWrapper">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
          <span onClick={goToRegister}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
