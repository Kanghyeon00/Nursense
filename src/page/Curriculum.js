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
          </div>
          <div className="currInfoWrapper">
            <div className="currNameBar">
              <span>사전학습</span>
            </div>
            <div className="currLearnInfoWrapper">
            {/* <div className="currLearnInfo1">
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
              </div> */}
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
                  <p>욕창은 피부나 접착 부위에 생긴 상처가 압력이나 마찰로 악화되는 상태를 말합니다. 주로 침대에 오래 누워 있는 환자나 휠체어를 사용하는 사람들에게 발생합니다.<br />침구를 교체하거나 체액 공급을 유지하는 등의 예방 조치와 적절한 상처 관리가 중요합니다.학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
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
                  <p>
                  당뇨병은 혈당 조절이 이상하게 되는 질환으로, 과다한 혈당이 혈액 속에 존재합니다.<br />이는 인슐린 부족 또는 인슐린 작용 저하로 인해 발생할 수 있습니다. 혈당 수준을 관리하는 것이 중요하며, 식이 조절, 운동, 약물 치료가 포함됩니다.</p>
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
                  <p>유치도뇨는 일반적으로 어린이나 희귀한 경우에는 성인에서 발생하는 방광 통제 장애입니다.<br />이는 방광 근육이 예기치 않게 수축하여 소변을 방출하는 것을 제어하지 못할 때 발생합니다.<br />이러한 상황은 일상 생활에서 사회적, 정서적, 심리적으로 어려움을 겪을 수 있으며, 일부 사람들은 이를 '요실금'이라고도 부릅니다.<br />치료에는 행동요법, 약물요법, 수술 등이 있으며, 각 환자의 상황에 맞게 맞춤형 치료가 필요합니다.</p>
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
                  <p>단순도뇨는 신장에서 뇨가 생성되지만, 필요한 성분을 충분히 함유하지 않는 상태를 말합니다. 이는 신장 기능 저하나 질환으로 인해 발생할 수 있습니다.<br />주로 소변량이 증가하거나 뇨의 색이 변화하는 증상을 보이며, 신장 질환의 진단과 관리가 필요합니다.</p>
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
                  <p>근육주사는 의료용 약물을 근육 내에 주입하는 치료 방법입니다. 주로 통증 완화, 염증 감소, 근육의 이완, 혹은 약물의 효과를 근육을 통해 빠르게 전달하기 위해 사용됩니다.<br />이 방법은 비교적 간단하고 효과가 빠르며, 특정 부위에 직접 약물을 전달할 수 있어 다양한 의료 상황에서 사용됩니다.</p>
                </div>
                </div>
                <div className="currLearnButtonWrapper">
                  <button onClick={openJusa}>자료 보기</button>
                </div>
              </div>
              {/* <div className="currLearnInfo1" style={{marginBottom:'20vh'}}>
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
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Curriculum;
