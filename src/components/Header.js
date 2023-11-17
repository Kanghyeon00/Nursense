import "./Header.css";

const Header = () => {

  return (
    <>
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="headerLogo">
            <img
              src={`${process.env.PUBLIC_URL}/img/nsLogo.png`}
              className="headerLogo"
              alt="headerLogo"
            />
          </div>
          <div className="headerMenu">
            <div className="headerIR headerLine">
              <span>Nursense 소개</span>
            </div>
            <div className="headerCurr headerLine">
              <span>교육과정</span>
            </div>
            <div className="headerDownLoad headerLine">
              <span>다운로드</span>
            </div>
            <div className="headerContact">
              <span>고객센터</span>
            </div>
          </div>
          <div className="loginWrapper">
            <span>로그인</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
