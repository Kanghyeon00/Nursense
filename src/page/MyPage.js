import React from "react";
import Header from "../components/Header";
import "./MyPage.css";

const MyPage = () => {
  return (
    <>
      <div className="myPageContainer">
        <div className="myPageWrapper">
          <Header />
          <div className="myPageInfoWrapper">
            <div className="myPageInfo">
              <p>Nursense 마이페이지</p>
              <div className="myPageName">
                <span>이름</span>
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
              <button>나의 정보 수정</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
