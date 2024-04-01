import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "./Register.css";
import TermsModal from "../components/TermsModal";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../components/SuccessModal";
import LoginFooter from "../components/LoginFooter";
import Policy from "../components/Policy";
import { useLanguage } from "../LanguageContext";

const Register = () => {
  const navigate = useNavigate();
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const goToHome = () => {
    navigate("/");
  };
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
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
  const [isCheckingId, setIsCheckingId] = useState(false);

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

  const validateId = async (idToCheck) => {
    try {
      const response = await axios.post(
        "https://www.neusenseback.com/checkid",
        { id: idToCheck }
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
    } finally {
      setIsCheckingId(false);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    // 공통적으로 수행되는 검사 로직
    if (name === "id") {
      // 아이디는 영문과 숫자로만 이루어지고, 6글자 이상이어야 함
      const isValidId = /^[A-Za-z0-9]{6,}$/.test(value);
      setIdError(!isValidId);

      // 중복 검사 중이 아니라면 중복 검사 시작
      if (!isCheckingId) {
        setIsCheckingId(true);
        validateId(value);
      }
    }

    // 학번, 비밀번호, 학교, 학과(학부) 등의 검사 로직
    if (name === "student_id") {
      const isValidStudentId = /^\d+$/.test(value);
      setStudentIdError(!isValidStudentId);
    } else if (name === "password" || name === "passwordCheck") {
      setPasswordError(false);
      setPasswordMatchError(formData.password !== value);
    } else if (name === "school") {
      const isUniversityIncluded = /대학교/.test(value);
      setSchoolError(!isUniversityIncluded);
    } else if (name === "department") {
      const isDepartmentIncluded = /학과|학부/.test(value);
      setDepartmentError(!isDepartmentIncluded);
    }

    // 나머지 코드는 그대로 유지
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

    if (
      !formData.id ||
      !formData.name ||
      !formData.student_id ||
      !formData.password ||
      !formData.passwordCheck ||
      !formData.email ||
      !formData.school ||
      !formData.department
    ) {
      alert("회원가입을 위해 모든 값을 입력해주세요.");
      return;
    }

    if (
      idError ||
      studentIdError ||
      passwordError ||
      passwordMatchError ||
      idDuplicateError ||
      schoolError ||
      departmentError
    ) {
      // 양식에 오류가 있을 경우 경고창 띄우기
      alert("입력 양식을 확인해주세요.");
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

  const openPolicyModal = () => {
    setIsPolicyModalOpen(true);
  };

  const closePolicyModal = () => {
    setIsPolicyModalOpen(false);
  };

  return (
    <>
      <div className="registerContainer">
        <Header onLanguageChange={handleLanguageChange} />
        <div className="registerWrapper">
          <div className="registrationForm">
            <img
              className="registerLogo"
              src={`${process.env.PUBLIC_URL}/img/registerLogo.png`}
            />
            <p>
              {" "}
              {selectedLanguage === "ko"
                ? "Nursense에 로그인하여 더 많은 서비스를 경험하세요."
                : "Log in to Nursense to experience more services."}
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                <p> {selectedLanguage === "ko" ? "아이디" : "ID"}</p>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko" ? "아이디 입력" : "Enter your ID"
                  }
                  style={{
                    borderColor: idError || idDuplicateError ? "#E94439" : "",
                  }}
                />
                {idError && (
                  <p className="formError">
                    {" "}
                    {selectedLanguage === "ko"
                      ? "아이디는 ‘영문’ 또는 ‘숫자’가 포함된 최소 6글자 이상으로 만들어야 합니다."
                      : "The username must contain at least 6 characters with 'alphabetical' or 'numeric' characters included."}
                  </p>
                )}
                {idDuplicateError && (
                  <p className="formError">
                    {" "}
                    {selectedLanguage === "ko"
                      ? "이미 사용중인 아이디 입니다"
                      : "The ID is already in use."}
                  </p>
                )}
              </label>
              <label>
                <p> {selectedLanguage === "ko" ? "이름" : "Name"}</p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko" ? "이름 입력" : "Enter your name"
                  }
                />
              </label>
              <label>
                <p> {selectedLanguage === "ko" ? "학번" : "Student ID"}</p>
                <input
                  type="text"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko"
                      ? "학번 입력"
                      : "Enter your student ID"
                  }
                  style={{ borderColor: studentIdError ? "#E94439" : "" }}
                />
                {studentIdError && (
                  <p className="formError">
                    {" "}
                    {selectedLanguage === "ko"
                      ? "학번은 숫자로만 입력되어야 합니다."
                      : "The student ID should only consist of numbers."}
                  </p>
                )}
              </label>
              <label>
                <p> {selectedLanguage === "ko" ? "비밀번호" : "Password"}</p>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko"
                      ? "비밀번호 입력"
                      : "Enter your password"
                  }
                  style={{ borderColor: passwordMatchError ? "#E94439" : "" }}
                />
              </label>
              <label>
                <input
                  type="password"
                  name="passwordCheck"
                  value={formData.passwordCheck}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko"
                      ? "비밀번호 재입력"
                      : "Enter your password again"
                  }
                  style={{ borderColor: passwordMatchError ? "#E94439" : "" }}
                />
                {passwordMatchError && (
                  <p className="formError">
                    {" "}
                    {selectedLanguage === "ko"
                      ? "비밀번호가 일치하지 않습니다."
                      : "The passwords do not match."}
                  </p>
                )}
              </label>
              <label>
                <p> {selectedLanguage === "ko" ? "이메일" : "E-mail"}</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko"
                      ? "이메일 입력"
                      : "Enter your E-mail"
                  }
                />
              </label>
              <label>
                <p> {selectedLanguage === "ko" ? "학교" : "School"}</p>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko"
                      ? "학교명 입력"
                      : "Enter your school name"
                  }
                  style={{ borderColor: schoolError ? "#E94439" : "" }}
                />
                {schoolError && (
                  <p className="formError">
                    {" "}
                    {selectedLanguage === "ko"
                      ? "잘못된 학교 명 입니다. ‘OO대학교’ 와 같이 전체 학교 명을 작성해야 합니다."
                      : "The school name entered is incorrect. Please enter the full school name such as 'OO University."}
                  </p>
                )}
              </label>
              <label>
                <p>
                  {" "}
                  {selectedLanguage === "ko"
                    ? "학과(학부)"
                    : "Department (Undergraduate)"}
                </p>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder={
                    selectedLanguage === "ko"
                      ? "학과(학부) 입력"
                      : "Enter your Department (Undergraduate)"
                  }
                  style={{ borderColor: departmentError ? "#E94439" : "" }}
                />
                {departmentError && (
                  <p className="formError">
                    {" "}
                    {selectedLanguage === "ko"
                      ? "잘못된 학과(학부) 명 입니다. ‘OO학과(또는 학부)’ 와 같이 전체 학과(학부) 명을 작성해야 합니다."
                      : "The department name entered is incorrect. Please enter the full department name such as 'Department of OO (or Undergraduate Program).'"}
                  </p>
                )}
              </label>
              <div className="termsWrapper">
                <div>
                  <input
                    className="termsBox"
                    type="checkbox"
                    name="terms"
                    onChange={() => setIsTermsChecked(!isTermsChecked)}
                  />
                </div>
                <div className="termsTextWrapper">
                  <span
                    onClick={selectedLanguage === "ko" ? openPolicyModal : "" }
                    style={{
                      color: selectedLanguage === "ko" ? "#078675" : "#000",
                      borderBottom: "none",
                      fontWeight: selectedLanguage === "ko" ? "bold" : "",
                      cursor: selectedLanguage === "ko" ? "pointer" : "",
                    }}
                  >
                    {" "}
                    {selectedLanguage === "ko"
                      ? "서비스 이용약관"
                      : "I have reviewed and agree"}
                  </span>
                  <span> {selectedLanguage === "ko" ? " 및 " : "to the"} </span>
                  <span
                    onClick={selectedLanguage === "ko" ? openPolicyModal : openPolicyModal}
                    style={{
                      color: selectedLanguage === "ko" ? "#078675" : "#078675",
                      borderBottom: "none",
                      fontWeight: selectedLanguage === "ko" ? "bold" : "bold",
                      cursor: selectedLanguage === "ko" ? "pointer" : "pointer",
                    }}
                  >
                    {" "}
                    {selectedLanguage === "ko"
                      ? "개인정보 취급방침"
                      : " terms of service and "}
                  </span>
                  <span
                    onClick={selectedLanguage === "ko" ? "" : openPolicyModal}
                    style={{
                      color: selectedLanguage === "ko" ? "#000" : "#078675",
                      borderBottom: "none",
                      fontWeight: selectedLanguage === "ko" ? "" : "bold",
                      cursor: selectedLanguage === "ko" ? "" : "pointer",
                    }}
                  >
                    {" "}
                    {selectedLanguage === "ko" ? "을 " : "privacy policy"}{" "}
                  </span>
                  <span
                    style={{
                      color: selectedLanguage === "ko" ? "#078675" : "#000",
                      fontWeight: selectedLanguage === "ko" ? "bold" : "",
                    }}
                  >
                    {" "}
                    {selectedLanguage === "ko"
                      ? "확인"
                      : "regarding the handling of"}
                  </span>
                  <span>
                    {" "}
                    {selectedLanguage === "ko" ? "하였고, 이에" : "personal"}
                  </span>
                  <span
                    style={{
                      color: selectedLanguage === "ko" ? "#078675" : "#000",
                      fontWeight: selectedLanguage === "ko" ? "bold" : "",
                    }}
                  >
                    {" "}
                    {selectedLanguage === "ko" ? "동의합니다" : "information."}
                  </span>
                </div>
              </div>
              <button className="regiSubmitButton" type="submit">
                {" "}
                {selectedLanguage === "ko" ? "가입하기" : "Confirm"}
              </button>
            </form>
            {showTermsModal && (
              <TermsModal
                message={
                  selectedLanguage === "ko"
                    ? "서비스 이용약관 및 개인정보 취급방침을"
                    : "Please review and agree to the"
                }
                message2={
                  selectedLanguage === "ko"
                    ? "확인 후, 동의해주세요."
                    : "Terms of Service and Privacy Policy."
                }
                closeTermsModal={closeTermsModal}
              />
            )}
            {showSuccessModal && (
              <SuccessModal closeModal={closeSuccessModal} />
            )}
          </div>
        </div>
        <LoginFooter />
      </div>
      {isPolicyModalOpen && <Policy onClose={closePolicyModal} />}
    </>
  );
};

export default Register;
