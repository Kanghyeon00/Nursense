import React from 'react'
import "./Curriculum.css";
import Header from "../components/Header";
import { useLocation, useNavigate } from 'react-router-dom';

const CurrEvaluation = () => {

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
              <span>사전학습 평가</span>
            </div>
            <div className="currLearnInfoWrapper">
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>학습 1</span>
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
                <p>점수 : 0점</p>
                  <button>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>학습 2</span>
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
                    <p>점수 : 0점</p>
                  <button>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>학습 3</span>
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
                <p>점수 : 0점</p>
                  <button>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>학습 4</span>
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
                <p>점수 : 0점</p>
                  <button>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1">
                <div>
                <div className="currLearnTitle">
                  <span>학습 5</span>
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
                <p>점수 : 0점</p>
                  <button>자료 보기</button>
                </div>
              </div>
              <div className="currLearnInfo1" style={{marginBottom:'20vh'}}>
                <div>
                <div className="currLearnTitle">
                  <span>학습 6</span>
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
                <p>점수 : 0점</p>
                  <button>자료 보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrEvaluation