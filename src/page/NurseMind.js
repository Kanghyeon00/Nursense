import React, { useState, useEffect, useRef } from "react";
import "./NurseMind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

const NurseMind = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageWrapperRef = useRef(null);
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  useEffect(() => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop = messageWrapperRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = {
      user: "나",
      text: userInput,
      isUser: true, // 사용자 메시지 여부 추가
    };

    setMessages((messages) => [...messages, userMessage]);

    setIsTyping(true);

    try {
      const response = await fetch("https://www.neusenseback.com/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error("Response not ok");
      }

      const data = await response.json();
      const aiMessage = {
        user: "널스 멘토",
        text: data.response,
        isUser: false, // 널스 멘토 메시지 여부 추가
      };

      setMessages((messages) => [...messages, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }

    setUserInput("");
  };

  return (
    <div className="aiContainer">
      <Header onLanguageChange={handleLanguageChange} />
      <div className="aiWrapper">
        <div className="nurseMentoTitle">
        <img src={`${process.env.PUBLIC_URL}/img/nurseMentoLogo.png`} alt='img'/>
        </div>
        <div className="messageWrapper" ref={messageWrapperRef}>
          <ul>
            {messages.map((message, index) => (
              <div
                className={message.isUser ? "userMessageWrapper" : "aiMessageWrapper"}
                key={index}
              >
                <li key={index}>
                  <span>{message.user}</span>{" "}
                  <p className={message.isUser ? "userSpeechBubble" : "aiSpeechBubble"}>
                    {message.text}
                  </p>
                </li>
              </div>
            ))}
            {isTyping && (
              <div className="aiMessageWrapper">
                <li>
                  <span>널스 멘토</span> 입력중...
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="mentoInputWrapper">
          <form onSubmit={sendMessage}>
            <input
              className="questionInput"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={
                selectedLanguage === "ko" ? "널스 멘토에게 질문 해보세요!" : "Ask Nurse Mento a question!"
              }
            />
            <button className="aiSendButton" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NurseMind;
