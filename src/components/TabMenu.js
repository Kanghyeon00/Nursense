import React, { useEffect, useState } from "react";
import "./TabMenu.css";
import axios from "axios";
import CircularProgress from "./CircularProgress";
import Cookies from "universal-cookie";
import { useLanguage } from "../LanguageContext";

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
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage); // 언어 변경 함수 호출
  };

  const tabs = [
    { ko: "욕창 의료실습", en: "Pressure Ulcer Medical Practice" },
    { ko: "당뇨 의료실습", en: "Diabetes Medical Practice" },
    { ko: "유치도뇨 의료실습", en: "Pediatric Urology Medical Practice" },
    { ko: "단순도뇨 의료실습", en: "Simple Urology Medical Practice" },
    { ko: "정맥주사 의료실습", en: "Intravenous Injection Medical Practice" },
    { ko: "근육주사 의료실습", en: "Intramuscular Injection Medical Practice" },
  ];

  const tabsProfile = [
    {
      ko: "욕창 의료실습 학습현황 입니다.",
      en: "This is the learning status of Pressure Ulcer Medical Practice.",
    },
    {
      ko: "당뇨 의료실습 학습현황 입니다.",
      en: "This is the learning status of Diabetes Medical Practice.",
    },
    {
      ko: "유치도뇨 의료실습 학습현황 입니다.",
      en: "This is the learning status of Pediatric Urology Medical Practice.",
    },
    {
      ko: "단순도뇨 의료실습 학습현황 입니다.",
      en: "This is the learning status of Simple Urology Medical Practice.",
    },
    {
      ko: "정맥주사 의료실습 학습현황 입니다.",
      en: "This is the learning status of Intravenous Injection Medical Practice.",
    },
    {
      ko: "근육주사 의료실습 학습현황 입니다.",
      en: "This is the learning status of Intramuscular Injection Medical Practice.",
    },
  ];

  const contents = [
    { ko: "나의 학습 현황", en: "My Learning Status" },
    { ko: "나의 학습 현황", en: "My Learning Status" },
    { ko: "나의 학습 현황", en: "My Learning Status" },
    { ko: "나의 학습 현황", en: "My Learning Status" },
    { ko: "나의 학습 현황", en: "My Learning Status" },
    { ko: "나의 학습 현황", en: "My Learning Status" },
  ];

  const contentsTitle = [
    {
      ko: "욕창 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
      en: "Pre-medical practice contents from pressure ulcer management to treatment in the metaverse",
    },
    {
      ko: "당뇨 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
      en: "Pre-medical practice contents from diabetes management to treatment in the metaverse",
    },
    {
      ko: "유치도뇨 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
      en: "Pre-medical practice contents from pediatric urology management to treatment in the metaverse",
    },
    {
      ko: "단순도뇨 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
      en: "Pre-medical practice contents from simple urology management to treatment in the metaverse",
    },
    {
      ko: "정맥주사 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
      en: "Pre-medical practice contents from intravenous injection management to treatment in the metaverse",
    },
    {
      ko: "근육주사 관리부터 치료까지 메타버스로 진행하는 예비 의료 실습 콘텐츠",
      en: "Pre-medical practice contents from intramuscular injection management to treatment in the metaverse",
    },
  ];

  const progressData = [
    { ko: "욕창 의료실습", en: "Pressure Ulcer Medical Practice" },
    { ko: "당뇨 의료실습", en: "Diabetes Medical Practice" },
    { ko: "유치도뇨 의료실습", en: "Pediatric Urology Medical Practice" },
    { ko: "단순도뇨 의료실습", en: "Simple Urology Medical Practice" },
    { ko: "정맥주사 의료실습", en: "Intravenous Injection Medical Practice" },
    { ko: "근육주사 의료실습", en: "Intramuscular Injection Medical Practice" },
  ];

  const tabDataMap = {
    0: "bedsore",
    1: "diabetes",
    2: "foley",
    3: "nelaton",
    4: "Intramuscular",
    5: "Intravenous",
  };

  const tabTimeData = {
    0: "bedsore_time",
    1: "diabetes_time",
    2: "foley_time",
    3: "nelaton_time",
    4: "Intramuscular_time",
    5: "Intravenous_time",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 쿠키에서 가져온 userId를 사용하여 API 호출
        const response = await axios.get(
          `https://www.neusenseback.com/api/get/nursense/increase/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // API 요청에 토큰 추가
              "x-refresh-token": refreshToken, // 리프레시 토큰도 헤더에 추가
            },
          }
        );

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
            style={{
              display: selectedLanguage === "ko" ? "" : "flex",
              alignItems: selectedLanguage === "ko" ? "" : "center",
              padding: selectedLanguage === "ko" ? "" : "5px",
            }}
              key={index}
              className={`tabItem ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <span className="tabName">
                {selectedLanguage === "ko" ? tab.ko : tab.en}
              </span>{" "}
              {/* 수정 */}
            </div>
          ))}
        </div>
      </div>
      <div className="tabMenuContainer">
        <div className="tabMenuProfileWrapper">
          <h2
            style={{
              marginBottom: selectedLanguage === "ko" ? "" : "8%",
            }}
          >
            {selectedLanguage === "ko"
              ? contents[activeTab].ko
              : contents[activeTab].en}
          </h2>{" "}
          {/* 수정 */}
          <span className="profileName">{userData?.name || "Guest"}</span>
          <span> {selectedLanguage === "ko" ? "님의" : "'s"}</span>
          <p>
            {selectedLanguage === "ko"
              ? tabsProfile[activeTab].ko
              : tabsProfile[activeTab].en}
          </p>{" "}
          {/* 수정 */}
        </div>
        <div className="tabMenuProgressContainer">
          <div className="tabMenuProgressWrapper">
            <CircularProgress
              progress={userData ? userData[tabDataMap[activeTab]] || 0 : 0}
            />
          </div>
          <div className="tabMenuProgressInfoWrapper">
            <p>
              {selectedLanguage === "ko"
                ? progressData[activeTab].ko
                : progressData[activeTab].en}{" "}
              {/* 수정 */}
            </p>
            <span>
              {selectedLanguage === "ko"
                ? contentsTitle[activeTab].ko
                : contentsTitle[activeTab].en}{" "}
              {/* 수정 */}
            </span>
            <p>
              {" "}
              {selectedLanguage === "ko" ? "현재" : "Now"}{" "}
              {userData ? userData[tabDataMap[activeTab]] || 0 : 0}%{" "}
              <span>
                {" "}
                {selectedLanguage === "ko"
                  ? "학습하셨습니다"
                  : "You have learned"}
              </span>
            </p>
            <span>
              {userData
                ? userData[tabTimeData[activeTab]] ||
                  "데이터를 불러오지 못했습니다"
                : "데이터를 불러오지 못했습니다"}
            </span>
          </div>
        </div>
        <div className="tabMenuButtonWrapper">
          <button onClick={openLuncher}>
            {" "}
            {selectedLanguage === "ko" ? "학습하기 →" : "Learn →"}{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
