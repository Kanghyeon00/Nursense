import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./MyPage.css";
import ReadyModal from "../components/ReadyModal";
import TabMenu from "../components/TabMenu";
import ContentSlide from "../components/ContentSlide";
import Footer from "../components/Footer";
import Cookies from "universal-cookie";

const MyPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const cookies = new Cookies();
  const userId = cookies.get("id");
  const token = cookies.get("token");
  const refreshToken = cookies.get("refreshToken");

  const handleInfoUpdateClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
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
          setUserData(response.data.response);
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

  return (
    <>
      <div className="myPageContainer">
        <div className="myPageWrapper">
          <Header />
          <div className="myPageInfoWrapper">
            <div className="myPageInfo">
              <p>Nursense 마이페이지</p>
              <div className="myPageName">
                <span>{userData?.name || "Guest"}</span>
                {/* userData가 null이거나 undefined인 경우에는 "Guest"를 보여줌 */}
                <span> 님 </span>
                <span>반갑습니다.</span>
              </div>
              <div className="myPageSchool">
                <p>
                  학교정보 : <span>{userData?.school || "학교 정보 없음"}</span>
                </p>
                <p>
                  학과정보 : <span>{userData?.department || "학과 정보 없음"}</span>
                </p>
                <p>
                  학번정보 : <span>{userData?.student_id || "학번 정보 없음"}</span>
                </p>
              </div>
            </div>
            <div className="myPageButtonWrapper">
              <button onClick={handleInfoUpdateClick}>나의 정보 수정</button>
            </div>
          </div>
          <TabMenu />
          <ContentSlide />
          <Footer />
        </div>
      </div>
      {isModalVisible && <ReadyModal onClose={handleModalClose} />}
    </>
  );
};

export default MyPage;
