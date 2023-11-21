import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "./Register.css";
import Footer from "../components/Footer";
import TermsModal from "../components/TermsModal";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";

const Register = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

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
  const [idError, setIdError] = useState(false);
  const [studentIdError, setStudentIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [idDuplicateError, setIdDuplicateError] = useState(false);
  const [schoolError, setSchoolError] = useState(false);
  const [departmentError, setDepartmentError] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const openTermsModal = () => {
    setShowTermsModal(true);
  };

  const closeTermsModal = () => {
    setShowTermsModal(false);
  };

  const openSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "id") {
      // 아이디는 영문과 숫자로만 이루어지고, 6글자 이상이어야 함
      const isValidId = /^[A-Za-z0-9]{6,}$/.test(value);
      setIdError(!isValidId);

      // 아이디 중복 확인
      try {
        const response = await axios.post(
          "https://www.neusenseback.com/checkid",
          { id: value }
        );

        if (response.status === 200) {
          console.log("아이디 사용 가능!");
          setIdDuplicateError(false);
        } else {
          console.error("아이디 중복.");
          setIdDuplicateError(true);
        }
      } catch (error) {
        console.error("아이디 중복 확인 중 오류 발생:", error);
        setIdDuplicateError(true);
      }
    }

    if (name === "student_id") {
      // 학번은 숫자만 입력되어야 함
      const isValidStudentId = /^\d+$/.test(value);
      setStudentIdError(!isValidStudentId);
    }

    if (name === "password" || name === "passwordCheck") {
      // 비밀번호와 비밀번호 재입력이 같은지 검사
      setPasswordError(false);
      setPasswordMatchError(formData.password !== value);
    }

    if (name === "school") {
      // 학교에 '대학교'라는 단어가 들어가지 않으면 오류
      const isUniversityIncluded = /대학교/.test(value);
      setSchoolError(!isUniversityIncluded);
    }

    if (name === "department") {
      // 학과(학부)에 '학과' 또는 '학부'라는 단어가 들어가지 않으면 오류
      const isDepartmentIncluded = /학과|학부/.test(value);
      setDepartmentError(!isDepartmentIncluded);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isTermsChecked) {
      openTermsModal();
      return;
    }

    try {
      const response = await axios.post(
        "https://www.neusenseback.com/register",
        formData
      );

      if (response.status === 200) {
        console.log("회원가입 성공!");
        setRegistrationMessage(response.data.msg);
        openSuccessModal();
        // 회원가입 성공 후 추가 동작 수행이 필요하면 여기에 추가
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
                <p>아이디</p>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder="아이디 입력"
                  style={{
                    borderColor: idError ? "#E94439" : "",
                    borderColor: idDuplicateError ? "#E94439" : "",
                  }}
                />
                {idError && (
                  <p className="formError">
                    아이디는 ‘영문’ 또는 ‘숫자’가 포함된 최소 6글자 이상으로
                    만들어야 합니다.
                  </p>
                )}
                {idDuplicateError && (
                  <p className="formError">이미 사용 중인 아이디입니다.</p>
                )}
              </label>
              <label>
                <p>이름</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름 입력"
                />
              </label>
              <label>
                <p>학번</p>
                <input
                  type="text"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleChange}
                  placeholder="학번 입력"
                  style={{ borderColor: studentIdError ? "#E94439" : "" }}
                />
                {studentIdError && (
                  <p className="formError">
                    학번은 숫자로만 입력되어야 합니다.
                  </p>
                )}
              </label>
              <label>
                <p>비밀번호</p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="비밀번호 입력"
                  style={{ borderColor: passwordMatchError ? "#E94439" : "" }}
                />
              </label>
              <label>
                <input
                  type="password"
                  name="passwordCheck"
                  value={formData.passwordCheck}
                  onChange={handleChange}
                  placeholder="비밀번호 재입력"
                  style={{ borderColor: passwordMatchError ? "#E94439" : "" }}
                />
                {passwordMatchError && (
                  <p className="formError">비밀번호가 일치하지 않습니다.</p>
                )}
              </label>
              <label>
                <p>이메일</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일 입력"
                />
              </label>
              <label>
                <p>학교</p>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="학교명 입력"
                  style={{ borderColor: schoolError ? "#E94439" : "" }}
                />
                {schoolError && (
                  <p className="formError">
                    잘못된 학교 명 입니다. ‘OO대학교’ 와 같이 전체 학교 명을
                    작성해야 합니다.{" "}
                  </p>
                )}
              </label>
              <label>
                <p>학과(학부)</p>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="학과(학부)입력"
                  style={{ borderColor: departmentError ? "#E94439" : "" }}
                />
                {departmentError && (
                  <p className="formError">
                    잘못된 학과(학부) 명 입니다. ‘OO학과(또는 학부)’ 와 같이
                    전체 학과(학부) 명을 작성해야 합니다.{" "}
                  </p>
                )}
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
              <button className="regiSubmitButton" type="submit">
                가입하기
              </button>
            </form>
            {showTermsModal && <TermsModal message={'서비스 이용약관 및 개인정보 취급방침을'} message2={'확인 후, 동의해주세요.'} closeTermsModal={closeTermsModal} />}
            {showSuccessModal && <SuccessModal closeModal={closeSuccessModal} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
