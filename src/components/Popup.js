import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const isPopupClosed = localStorage.getItem('isPopupClosed');
    if (isPopupClosed) {
      const twentyFourHoursAgo = new Date().getTime() - 24 * 60 * 60 * 1000;
      const popupClosedTime = parseInt(isPopupClosed);
      if (popupClosedTime > twentyFourHoursAgo) {
        setShowPopup(false);
      }
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      localStorage.setItem('isPopupClosed', new Date().getTime().toString());
    } else {
      localStorage.removeItem('isPopupClosed');
    }
  };

  return (
    <>
      {showPopup && (
        <div className='popupContainer'>
          <div className='popupWrapper'>
            <div className='popupTitle'>
              <span>Nursense 사용가이드</span>
            </div>
            <div className='popupImgWrapper'>
              <img src={`${process.env.PUBLIC_URL}/img/popup.png`} alt='img'/>
            </div>
            <div className='popupBottomWrapper'>
              <div className='hourWrapper'>
                <input type='checkbox' onChange={handleCheck} />
                <span>24시간동안 다시 보지 않기</span>
              </div>
              <div className='popupXButton' onClick={handleClosePopup}>
                <img src={`${process.env.PUBLIC_URL}/img/closeButton.png`} alt='img'/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
