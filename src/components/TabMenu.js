import React, { useState } from "react";
import "./TabMenu.css";
import axios from "axios";
import CircularProgress from "./CircularProgress";

const TabMenu = () => {
  const increaseProgress = async (id, className, progress) => {
    try {
      const response = await axios.post(
        "https://www.neusenseback.com/api/nursense/increase",
        {
          id,
          className,
          progress,
        }
      );

      if (response.status === 200 && response.data.success) {
        console.log("진도율이 증가되었습니다.");
      } else {
        console.error("진도율 증가에 실패했습니다.");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    "욕창 의료실습",
    "당뇨 의료실습",
    "유치도뇨 의료실습",
    "단순도뇨 의료실습",
    "정맥주사 의료실습",
    "근육주사 의료실습",
  ];

  const tabsProfile = [
    "욕창 의료실습 학습현황 입니다.",
    "당뇨 의료실습 학습현황 입니다.",
    "유치도뇨 의료실습 학습현황 입니다.",
    "단순도뇨 의료실습 학습현황 입니다.",
    "정맥주사 의료실습 학습현황 입니다.",
    "근육주사 의료실습 학습현황 입니다.",
  ];

  const contents = [
    "나의 학습 현황",
    "나의 학습 현황",
    "나의 학습 현황",
    "나의 학습 현황",
    "나의 학습 현황",
    "나의 학습 현황",
  ];

  const contentsTitle = [
    "욕창 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
    "당뇨 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
    "유치도뇨 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
    "단순도뇨 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
    "정맥주사 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
    "근육주사 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
  ];

  const progressData = [
    "욕창 의료실습",
    "당뇨 의료실습",
    "유치도뇨 의료실습",
    "단순도뇨 의료실습",
    "정맥주사 의료실습",
    "근육주사 의료실습",
  ];

  return (
    <>
      <div className="tabMenuWrapper">
        
        <div className="tabMenu">
        <div className="test" />
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tabItem ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
             <span className="tabName">{tab}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tabMenuContainer">
        <div className="tabMenuProfileWrapper">
          <h2>{contents[activeTab]}</h2>
          <span className="profileName">Data</span><span> 님의</span>
          <p>{tabsProfile[activeTab]}</p>
        </div>
        <div className="tabMenuProgressContainer">
          <div className="tabMenuProgressWrapper">
            <CircularProgress progress={100} />
          </div>
          <div className="tabMenuProgressInfoWrapper">
            <p>
            {progressData[activeTab]}
            </p>
            <span>
            {contentsTitle[activeTab]}
            </span>
            <p>
            현재 100% <span>학습 하셨습니다</span>
            </p>
            <span>
            마지막 실행일 : 2023.11.16(목) 17:53
            </span>
          </div>
        </div>
        <div className="tabMenuButtonWrapper">
          <button>학습하기 → </button>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
