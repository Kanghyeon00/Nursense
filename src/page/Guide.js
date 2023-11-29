import React from 'react'
import Header from "../components/Header";
import { useLocation, useNavigate } from 'react-router-dom';
import './Guide.css'

const Guide = () => {

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
      <div className='currGuideContainer'>
        <Header />
        <div className='currGuideWrapper'>
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
          <div className="currNameBar2">
              <span>이용안내</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Guide