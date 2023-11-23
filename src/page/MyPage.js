import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import "./MyPage.css";
import ReadyModal from "../components/ReadyModal";
import TabMenu from "../components/TabMenu";
import ContentSlide from "../components/ContentSlide";
import Footer from "../components/Footer";

const MyPage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleInfoUpdateClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const id = 'tes123';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.neusenseback.com/api/get/nursense/increase/${id}`);

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
  }, [id]);

  return (
    <>
      <div className="myPageContainer">
        <div className="myPageWrapper">
          <Header />
          <div className="myPageInfoWrapper">
            <div className="myPageInfo">
              <p>Nursense 마이페이지</p>
              <div className="myPageName">
                <span>Data</span>
                <span> 님 </span>
                <span>반갑습니다.</span>
              </div>
              <div className="myPageSchool">
                <p>
                  학교정보 : <span>가톨릭 대학교</span>
                </p>
                <p>
                  학과정보 : <span>간호학과</span>
                </p>
                <p>
                  학번정보 : <span>2012010100</span>
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
