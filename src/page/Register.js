import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "./Register.css";
import Footer from "../components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    name: "",
    school: "",
    email: "",
    department: "",
    student_id: "",
  });

  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://your-api-endpoint/register",
        formData
      );

      if (response.status === 200) {
        console.log("회원가입 성공!");
        setRegistrationMessage(response.data.msg);
        // 회원가입 성공 후 다른 동작 수행
      } else {
        console.error("회원가입 실패.");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      if (error.response && error.response.status === 400) {
        setRegistrationMessage("이미 가입된 아이디입니다.");
      }
    }
  };

  return (
    <>
      <div className="registerContainer">
        <Header />
        <div className="registerWrapper">
          <div className="registrationForm">
            <img
              className="registerLogo"
              src={`${process.env.PUBLIC_URL}/img/registerLogo.png`}
            />
            <p>Nursense에 회원가입하여 더 많은 서비스를 경험하세요</p>
            <form onSubmit={handleSubmit}>
              <label>
                <p>
                아이디
                </p>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="아이디 입력"
                />
              </label>
              <label>
                <p>
                이름
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름 입력"
                />
              </label>
              <label>
                <p>
                학번
                </p>
                <input
                  type="text"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleChange}
                  placeholder="학번 입력"
                />
              </label>
              <label>
                <p>
                비밀번호
                </p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="비밀번호 입력"
                />
              </label>
              <label>
                <input
                  type="password"
                  name="passwordCheck"
                  value={formData.passwordCheck}
                  onChange={handleChange}
                  placeholder="비밀번호 재입력"
                />
              </label>
              <label>
                <p>
                이메일
                </p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일 입력"
                />
              </label>
              <label>
                <p>
                학교
                </p>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="학교명 입력"
                />
              </label>
              <label>
                <p>
                학과(학부)
                </p>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="학과(학부)입력"
                />
              </label>
              <div className="termsWrapper">
                <div>
                <input className="termsBox" type="checkbox" name="terms" />
                </div>
                <div>
                <span>서비스 이용약관</span>
                <span> 및 </span>
                <span>개인정보 취급방침</span>
                <span>을 </span>
                <span>확인</span>
                <span>하였고, 이에</span>
                <span>동의합니다</span>
                </div>
              </div>
              <button type="submit">가입하기</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
