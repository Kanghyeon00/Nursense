import React from "react";
import "./ContentSlide.css";

const ContentSlide = () => {

    const contentData = [
        {
            title: "욕창 임상실습",
            description: "욕창 관리부터 치료까지 메타버스로\n 진행하는예비 의료 실습",
            buttonText: "학습하기",
            imageUrl: `${process.env.PUBLIC_URL}/img/cardImg.png`,
          },
        {
            title: "당뇨 임상실습",
            description: "욕창 관리부터 치료까지 메타버스로\n 진행하는예비 의료 실습",
            buttonText: "학습하기",
            imageUrl: `${process.env.PUBLIC_URL}/img/cardImg.png`,
          },
          {
            title: "단순도뇨 임상실습",
            description: "욕창 관리부터 치료까지 메타버스로\n 진행하는예비 의료 실습",
            buttonText: "학습하기",
            imageUrl: `${process.env.PUBLIC_URL}/img/cardImg.png`,
          },
          {
            title: "유치도뇨 임상실습",
            description: "욕창 관리부터 치료까지 메타버스로\n 진행하는예비 의료 실습",
            buttonText: "학습하기",
            imageUrl: `${process.env.PUBLIC_URL}/img/cardImg.png`,
          },
          {
            title: "근육주사 임상실습",
            description: "욕창 관리부터 치료까지 메타버스로\n 진행하는예비 의료 실습",
            buttonText: "학습하기",
            imageUrl: `${process.env.PUBLIC_URL}/img/cardImg.png`,
          },
        // 추가적인 Content Card 데이터를 필요한 만큼 추가
      ];

      const openLuncher = () => {
        window.location.href = 'doublemlauncher://nursenselauncher';
      };

  return (
    <>
      <div className="contentSlideContainer">
        <div className="contentSlideWrapper">
          <div className="contentText">
            <span>실습 콘텐츠 현황</span>
            <span>자세히보기 →</span>
          </div>
          <div className="contentCardWrapper">
          {contentData.map((content, index) => (
              <div key={index} className="contentCard">
                <div className="cardInner">
                  <div className="cardTitle">
                    <p>{content.title}</p>
                    <p>{content.description}</p>
                  </div>
                  <div className="cardBottom">
                    <button onClick={openLuncher}>{content.buttonText}</button>
                    <img src={content.imageUrl} alt={`Content ${index + 1} img`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSlide;
