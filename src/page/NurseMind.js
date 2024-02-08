import React, { useState } from "react";
import './NurseMind.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const NurseMind = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = {
      user: "강석현",
      text: userInput,
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
        user: "널스멘토",
        text: data.response,
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
        <Header />
        <div className="aiWrapper">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="널스멘토에게 질문 해보세요!"
        />
        <button className="aiSendButton" type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong>{message.user}:</strong> {message.text}
          </li>
        ))}
        {isTyping && (
          <li>
            <strong>널스 멘토:</strong> 입력중...
          </li>
        )}
      </ul>
      </div>
      <Footer />
    </div>
  );
};

export default NurseMind;
