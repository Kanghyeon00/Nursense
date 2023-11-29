import React from 'react'
import './CurrLearning.css'
import Header from "../components/Header";
import { useLocation, useNavigate } from 'react-router-dom';

const CurrLearning = () => {

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
        <div className='currLearningContainer'>
            <Header />
            <div className='currLearningWrapper'>
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
          <div className='forBottom'>
          <div className="currNameBar">
              <span>학습</span>
            </div>
          <div className='currLearningInfo'>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 1</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom'>
                        <span>최종평가 </span>
                        <span> 미응시</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 미제출</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 미제출</span>
                    </div>
                </div>
            </div>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 2</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom2'>
                        <span>최종평가 </span>
                        <span> 완료</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 제출완료</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 제출완료</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='currLearningInfo'>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 3</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom'>
                        <span>최종평가 </span>
                        <span> 미응시</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 미제출</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 미제출</span>
                    </div>
                </div>
            </div>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 4</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom2'>
                        <span>최종평가 </span>
                        <span> 완료</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 제출완료</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 제출완료</span>
                    </div>
                </div>
            </div>
            </div>
            <div className='currLearningInfo'>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 5</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom'>
                        <span>최종평가 </span>
                        <span> 미응시</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 미제출</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 미제출</span>
                    </div>
                </div>
            </div>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 6</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom2'>
                        <span>최종평가 </span>
                        <span> 완료</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 제출완료</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 제출완료</span>
                    </div>
                </div>
            </div>
            </div>
                      <div className='currLearningInfo'>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 7</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom'>
                        <span>최종평가 </span>
                        <span> 미응시</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 미제출</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 미제출</span>
                    </div>
                </div>
            </div>
            <div className='currLearningCard'>
                <div className='currLearningPercent'>
                    <span>0%</span>
                </div>
                <div className='currLearningInfoWrapper'>
                    <div className='currLearningTitle'>
                        <span>학습 8</span>
                        <span>김영신 교수님</span>
                    </div>
                    <div className='currLearningDate'>
                        <span>등록일</span>
                        <span>I</span>
                        <span>2023.10.10</span>
                    </div>
                    <div className='currLearningDis'>
                        <p>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용<br></br>학습에 관한 간단한 내용학습에 관한 간단한 내용학습에 관한 간단한 내용</p>
                    </div>
                    <div className='currLearningBottom2'>
                        <span>최종평가 </span>
                        <span> 완료</span>
                        <span>I</span>
                        <span>리포트제출 </span>
                        <span> 제출완료</span>
                        <span>I</span>
                        <span>설문조사 </span>
                        <span> 제출완료</span>
                    </div>
                </div>
            </div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default CurrLearning