import React, { useEffect, useState } from "react";
import "./TabMenu.css";
import axios from "axios";
import CircularProgress from "./CircularProgress";
import Cookies from "universal-cookie";

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

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const cookies = new Cookies();
  const userId = cookies.get("id");
  const token = cookies.get("token");
  const refreshToken = cookies.get("refreshToken");

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

  const tabDataMap = {
    0: 'bedsore',
    1: 'diabetes',
    2: 'foley',
    3: 'nelaton',
    4: 'Intramuscular',
    5: 'Intravenous',
  };

  const tabTimeData = {
    0: 'bedsore_time',
    1: 'diabetes_time',
    2: 'foley_time',
    3: 'nelaton_time',
    4: 'Intramuscular_time',
    5: 'Intravenous_time',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 쿠키에서 가져온 userId를 사용하여 API 호출
        const response = await axios.get(`https://www.neusenseback.com/api/get/nursense/increase/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // API 요청에 토큰 추가
            "x-refresh-token": refreshToken, // 리프레시 토큰도 헤더에 추가
          },
        });

        if (response.status === 200 && response.data.success) {
          // bedsore 값을 가져오도록 수정
          const bedsoreProgress = response.data.response.bedsore;
          setUserData({ ...response.data.response, bedsore: bedsoreProgress });
        } else {
          setError("데이터를 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        setError("데이터를 불러오는 도중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [userId, token, refreshToken]);
  
  const openLuncher = () => {
    const launcherURL = `doublemlauncher://nursenselauncher?1?${userId}`;
    window.location.href = launcherURL;
  };

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
          <span className="profileName">{userData?.name || "Guest"}</span><span> 님의</span>
          <p>{tabsProfile[activeTab]}</p>
        </div>
        <div className="tabMenuProgressContainer">
          <div className="tabMenuProgressWrapper">
            <CircularProgress progress={userData ? userData[tabDataMap[activeTab]] || 0 : 0} />
          </div>
          <div className="tabMenuProgressInfoWrapper">
            <p>
            {progressData[activeTab]}
            </p>
            <span>
            {contentsTitle[activeTab]}
            </span>
            <p>
            현재 {userData ? userData[tabDataMap[activeTab]] || 0 : 0}% <span>학습 하셨습니다</span>
            </p>
            <span>
            {userData ? userData[tabTimeData[activeTab]] || "데이터를 불러오지 못했습니다" : "데이터를 불러오지 못했습니다"}
            </span>
          </div>
        </div>
        <div className="tabMenuButtonWrapper">
          <button onClick={openLuncher}>학습하기 → </button>
        </div>
      </div>
    </>
  );
};

export default TabMenu;