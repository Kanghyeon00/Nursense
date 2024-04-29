import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./Header.css";
import Cookies from "universal-cookie";
import { loginSuccess } from "../actions";
import { getUserDataFromCookie } from "./cookies";
import ReadyModal from "./ReadyModal";
import { useLanguage } from "../LanguageContext";

const Header = ({ onLanguageChange }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [isReadyModalOpen, setIsReadyModalOpen] = useState(false);
  const { selectedLanguage } = useLanguage(); // LanguageContext에서 언어 상태를 가져옴
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (newLanguage) => {
    onLanguageChange(newLanguage); // 부모 컴포넌트로 언어 변경 알림
    setIsLanguageMenuOpen(false); // 언어 변경 후 언어 메뉴 닫기
  };

  const openReadyModal = () => {
    setIsReadyModalOpen(true);
  };

  const closeReadyModal = () => {
    setIsReadyModalOpen(false);
  };

  const goToMyPage = () => {
    navigate("/mypage");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToCurr = () => {
    navigate("/curriculum/learn"); // '/target-page'로 이동
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToCustomer = () => {
    navigate("/customer");
  };

  const goToAi = () => {
    navigate("/nursemind");
  };

  const goToDw = () => {
    navigate("/download");
    window.location.href =
      "https://www.dropbox.com/scl/fi/bst2tebaaac59vcdpzrdc/NursenseLauncher.exe?rlkey=8n0ha01f19jsolxmdi8bmwogu&dl=1";
  };

  const removeCookies = () => {
    // 쿠키 삭제
    cookies.remove("token");
    cookies.remove("refreshToken");
    cookies.remove("id");
    cookies.remove("name");
  };

  const fetchUserData = async () => {
    try {
      if (
        isAuthenticated &&
        user &&
        user.id &&
        user.token &&
        user.refreshToken
      ) {
        const response = await axios.get(
          `https://www.neusenseback.com/api/get/nursense/increase/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              "x-refresh-token": user.refreshToken,
            },
          }
        );
        if (response.status === 200 && response.data.success) {
          dispatch({ type: "SET_USER_DATA", payload: response.data.response });
        } else {
          console.error("데이터를 불러오는 데 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("데이터를 불러오는 도중 오류가 발생했습니다.", error);
    }
  };

  const handleLogout = async () => {
    try {
      // 서버에 로그아웃 요청 보내기
      const response = await axios.post(
        "https://www.neusenseback.com/logout",
        { id: user.id },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // 서버 응답에 따라 클라이언트에서 처리
      if (response.status === 200 && response.data.success) {
        // 로그인 페이지로 이동
        navigate("/login");
      } else {
        // 로그아웃 실패 처리
        console.error("로그아웃 실패");
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    } finally {
      // 쿠키 삭제
      removeCookies();

      // 로컬 상태 업데이트
      dispatch({ type: "LOGOUT" });
    }
  };

  useEffect(() => {
    // 최초 렌더링 시 또는 user가 변경될 때만 fetchData 호출
    if (
      !user ||
      (isAuthenticated && user.id && user.token && user.refreshToken)
    ) {
      fetchUserData();
    }
  }, [dispatch, isAuthenticated, user]);

  // 페이지가 새로고침될 때 쿠키에서 사용자 정보를 다시 불러옴
  useEffect(() => {
    const userDataFromCookie = getUserDataFromCookie();
    if (userDataFromCookie) {
      dispatch({ type: "SET_USER_DATA", payload: userDataFromCookie });
    }
  }, [dispatch]);

  return (
    <>
      <div className="headerContainer">
        <div className="languageWrapper">
          <span className="languageText" onClick={toggleLanguageMenu}>Language</span>
          {isLanguageMenuOpen && (
            <div className="languageMenu">
              <div
                onClick={() => handleLanguageChange("ko")}
                className="koreanWrapper"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/korea.png`}
                  alt="img"
                />
              </div>
              <div className="usaWrapper">
                <div onClick={() => handleLanguageChange("en")}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/usa.png`}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerWrapper">
          <div className="headerLogo">
            <img
              src={`${process.env.PUBLIC_URL}/img/nsLogo.png`}
              className="headerLogo"
              alt="headerLogo"
              onClick={goToHome}
            />
          </div>
          <div className="headerMenu">
            <div className="headerIR headerLine">
              <span onClick={goToAbout}>
                {" "}
                {selectedLanguage === "ko" ? "Nursense 소개" : "About"}
              </span>
            </div>
            <div className="headerCurr headerLine">
              <span onClick={goToCurr}>
                {" "}
                {selectedLanguage === "ko" ? "사전학습" : "Pre-learning"}
              </span>
            </div>
            {isAuthenticated && (
              <div className="headerDownLoad headerLine">
                <span onClick={goToDw}>
                  {" "}
                  {selectedLanguage === "ko" ? "다운로드" : "Download"}
                </span>
              </div>
            )}
            <div className="headerContact">
              <span onClick={goToAi}>
                {" "}
                {selectedLanguage === "ko" ? "널스 멘토" : "Nurse Mento"}
              </span>
            </div>
            <div className="headerContact">
              <span onClick={openReadyModal}>
                {" "}
                {selectedLanguage === "ko" ? "Nursense 미디어" : "Nursense Media"}
              </span>
            </div>
            <div className="headerContact">
              <span onClick={goToCustomer}>
                {" "}
                {selectedLanguage === "ko" ? "고객센터" : "Contact"}
              </span>
            </div>
          </div>
          <div className="mainLoginWrapper">
            {isAuthenticated ? (
              <>
                <div className="loggedHeaderWrapper">
                  <span className="headerUserName">{`${user.name}`}</span>
                  <span> {selectedLanguage === "ko" ? "님" : "'s"} </span>
                  <span className="headerMyPageText" onClick={goToMyPage}>
                    {" "}
                    {selectedLanguage === "ko" ? "마이페이지" : "Mypage"}
                  </span>
                  <span className="headerLogOutText" onClick={handleLogout}>
                    {" "}
                    {selectedLanguage === "ko" ? "로그아웃" : "Logout"}
                  </span>
                </div>
              </>
            ) : (
              <span className="loginText" onClick={goToLogin}>
                {" "}
                {selectedLanguage === "ko" ? "로그인" : "Login"}
              </span>
            )}
          </div>
        </div>
      </div>
      {isReadyModalOpen && <ReadyModal onClose={closeReadyModal} />}
    </>
  );
};

export default Header;
