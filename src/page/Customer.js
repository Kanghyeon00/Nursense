import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Customer.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

const Customer = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs로 이메일 전송
    const templateParams = {
      company: formData.company,
      name: formData.name,
      contact: formData.contact,
      email: formData.email,
      message: formData.message,
    };

    // YOUR_EMAILJS_USER_ID와 YOUR_EMAILJS_TEMPLATE_ID를 실제 값으로 대체
    emailjs
      .send(
        "service_pfo3dhs",
        "template_khihogj",
        templateParams,
        "RkqGFFEa2IcswbJf7"
      )
      .then(
        (result) => {
          alert('성공적으로 전송되었습니다 \n빠른시일내로 회신드리겠습니다')
        },
        (error) => {
          console.log(error.text);
        }
      );
      setFormData({
        companyName: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      });
  };

  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };


  return (
    <>
      <Header onLanguageChange={handleLanguageChange} />
      <div className="customerContainer">
        <div className="customerWrapper">
          <div className="contactLogoWrapper">
            <img src={`${process.env.PUBLIC_URL}/img/nsLogo.png`} alt="Logo" />
          </div>
          <div className="contactWrapper">
            <form onSubmit={handleSubmit}>
              <label>
              {" "}
              {selectedLanguage === "ko" ? "회사명" : "Company name"}
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
              </label>
              <label>
              {" "}
              {selectedLanguage === "ko" ? "성함" : "Name"}
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
              {" "}
              {selectedLanguage === "ko" ? "연락처" : "Phone number"}
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              </label>
              <label>
              {" "}
              {selectedLanguage === "ko" ? "이메일" : "E-mail"}
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
              {" "}
              {selectedLanguage === "ko" ? "문의내용" : "Inquiry content"}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="contactSubmit">
              {" "}
              {selectedLanguage === "ko" ? "전송하기" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Customer;
