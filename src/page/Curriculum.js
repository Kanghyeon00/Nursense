import React, { useState } from "react";
import "./Curriculum.css";
import Header from "../components/Header";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";

const Curriculum = () => {

  const location = useLocation();
  const isLearnPage = location.pathname.endsWith('/learn');
  const isEvaluationPage = location.pathname.endsWith('/evaluation');
  const isGuidePage = location.pathname.endsWith('/guide');
  const isLearningPage = location.pathname.endsWith('/learning');

  const navigate = useNavigate();

  const goToEvaluation = () => {
      navigate('/curriculum/evaluation'); // '/target-page'로 이동
    };

    const goToLearn = () => {
      navigate('/curriculum/learn'); // '/target-page'로 이동
    };

    const goToGuide = () => {
      navigate('/curriculum/guide'); // '/target-page'로 이동
    };

    const goToLearning = () => {
      navigate('/curriculum/learning'); // '/target-page'로 이동
    };

    const openYokchang = () => {
      window.open('http://khna.or.kr/bbs/linkfile/resource/khna_Wcare.pdf', '_blank');
    };

    const openDangnyo = () => {
      window.open('https://kaim.or.kr/files/guide/%EB%82%B4%EB%B6%84%EB%B9%84%EB%8C%80%EC%82%AC_09.pdf', '_blank');
    };

    const openDansun = () => {
      window.open('http://contents2.kocw.or.kr/KOCW/document/2017/shinhan/kimsunok/7.pdf', '_blank');
    };

    const openYuchi = () => {
      window.open('https://khna.or.kr/home/data/230223/nursing_report_2023.pdf', '_blank');
    };

    const openJusa = () => {
      window.open('http://kocw.xcache.kinxcdn.com/KOCW/document/2018/bible/leesojung0226/5.pdf', '_blank');
    };

    const openFire = () => {
      window.open('http://nspa.or.kr/wp-content/uploads/2017/07/%ED%99%94%EC%9E%AC%EC%95%88%EC%A0%84.pdf', '_blank');
    };

    const openMental = () => {
      window.open('https://drive.google.com/file/d/1IGgj-soB0jHECORhsrc705lPpRJhlPLf/view?usp=sharing', '_blank');
    };

  return (
    <>
      <div className="currContainer">
        <Header />
        <div className="currWrapper">
          <div className="currNavWrapper">
            <h2>교육과정</h2>
            <p>온라인 사전학습</p>
            <ul>
              <li onClick={goToLearn} className={isLearnPage ? 'learnPageText' : 'normalText'}>⦁ 사전학습</li>
              <li onClick={goToEvaluation} className={isEvaluationPage ? 'learnPageText' : 'normalText'}>⦁ 사전학습평가</li>
            </ul>
            <p>본 학습</p>
            <ul>
              <li onClick={goToGuide} className={isGuidePage ? 'learnPageText' : 'normalText'}>⦁ 이용안내</li>
              <li onClick={goToLearning} className={isLearningPage ? 'learnPageText' : 'normalText'}>⦁ 학습</li>
            </ul>
          </div>
          <div className="currInfoWrapper">
            <div className="currNameBar">
              <span>사전학습</span>
            </div>
            <div className="currLearnInfoWrapper">
            <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>지역사회간호학</span>
                  <span>정신건강</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openMental}>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>지역사회간호학</span>
                  <span>욕창</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openYokchang}>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>지역사회간호학</span>
                  <span>당뇨</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openDangnyo}>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>지역사회간호학</span>
                  <span>유치도뇨</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openYuchi}>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>지역사회간호학</span>
                  <span>단순도뇨</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openDansun}>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>지역사회간호학</span>
                  <span>근육주사</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openJusa}>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1" style={{marginBottom:'20vh'}}>
                <div>
                <div className="currLearnTitle">
                  <span>화재안전교육</span>
                  <span>화재</span>
                </div>
                <div className="currLearnDate">
                  <span>등록일</span>
                  <span>I</span>
                  <span>2023.10.10</span>
                </div>
                <div className="currLearnDis">
                  <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openFire}>자료 보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Curriculum;
