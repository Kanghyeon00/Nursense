import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./Header.css";
import Cookies from "universal-cookie";
import { loginSuccess } from "../actions";
import { getUserDataFromCookie } from "./cookies";
import ReadyModal from "./ReadyModal";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [isReadyModalOpen, setIsReadyModalOpen] = useState(false);

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
              <span onClick={goToAbout}>Nursense 소개</span>
            </div>
            <div className="headerCurr headerLine">
              <span onClick={goToCurr}>교육과정</span>
            </div>
            {isAuthenticated && (
              <div className="headerDownLoad headerLine">
                <span onClick={goToDw}>다운로드</span>
              </div>
            )}
            <div className="headerContact">
              <span onClick={goToAi}>널스 멘토</span>
            </div>
            <div className="headerContact">
              <span onClick={goToCustomer}>고객센터</span>
            </div>
          </div>
          <div className="mainLoginWrapper">
            {isAuthenticated ? (
              <>
                <div className="loggedHeaderWrapper">
                  <span className="headerUserName">{`${user.name}`}</span>
                  <span> 님 </span>
                  <span className="headerMyPageText" onClick={goToMyPage}>
                    마이페이지
                  </span>
                  <span className="headerLogOutText" onClick={handleLogout}>
                    로그아웃
                  </span>
                </div>
              </>
            ) : (
              <span className="loginText" onClick={goToLogin}>
                로그인
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
