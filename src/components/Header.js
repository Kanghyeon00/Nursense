import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import './Header.css';
import Cookies from "universal-cookie";
import { loginSuccess } from "../actions";
import { getUserDataFromCookie } from "./cookies";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToDownload = () => {
    window.location.href = 'https://www.dropbox.com/scl/fi/bst2tebaaac59vcdpzrdc/NursenseLauncher.exe?rlkey=8n0ha01f19jsolxmdi8bmwogu&dl=1';
  };

  const removeCookies = () => {
    // 쿠키 삭제
    cookies.remove("token");
    cookies.remove("refreshToken");
    cookies.remove("id");
  };

  useEffect(() => {
    // 새로고침 시 저장된 사용자 정보를 사용
    const userDataFromCookie = getUserDataFromCookie();
    if (userDataFromCookie) {
      dispatch({ type: 'SET_USER_DATA', payload: userDataFromCookie });
    } else {
      // 저장된 사용자 정보가 없으면 서버에서 가져옴
      fetchUserData();
    }
  }, [dispatch, isAuthenticated]);

  // 사용자 정보 가져오는 함수
  const fetchUserData = () => {
    const userDataFromCookie = getUserDataFromCookie();
    if (userDataFromCookie) {
      dispatch({ type: 'SET_USER_DATA', payload: userDataFromCookie });
    }
  };

    useEffect(() => {
    // 새로고침 시 저장된 사용자 정보를 사용
    const userDataFromCookie = getUserDataFromCookie();
    if (userDataFromCookie) {
      dispatch({ type: 'SET_USER_DATA', payload: userDataFromCookie });
    } else {
      // 저장된 사용자 정보가 없으면 서버에서 가져옴
      fetchUserData();
    }
  }, [dispatch]);


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
        // 로그아웃 성공 처리
        console.log(response.data.msg);
  
        // 로그인 페이지로 이동
        navigate('/login');
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
    // 새로고침 시 저장된 사용자 정보를 사용
    const userDataFromCookie = getUserDataFromCookie();
    if (userDataFromCookie) {
      dispatch({ type: 'SET_USER_DATA', payload: userDataFromCookie });
    } else {
      // 저장된 사용자 정보가 없으면 서버에서 가져옴
      fetchUserData();
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
              <span>Nursense 소개</span>
            </div>
            <div className="headerCurr headerLine">
              <span>교육과정</span>
            </div>
            <div className="headerDownLoad headerLine">
              <span onClick={goToDownload}>다운로드</span>
            </div>
            <div className="headerContact">
              <span>고객센터</span>
            </div>
          </div>
          <div className="mainLoginWrapper">
          {isAuthenticated ? (
            <>
            <div className="loggedHeaderWrapper">
              <span className="headerUserName">{`${user.id}`}</span>
              <span> 님 </span>
              <span className="headerMyPageText" onClick={goToMyPage} >마이페이지</span>
              <span className="headerLogOutText" onClick={handleLogout}>로그아웃</span>
              </div>
            </>
          ) : (
            <span className="loginText" onClick={goToLogin}>로그인</span>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;