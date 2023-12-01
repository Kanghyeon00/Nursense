import React, { useEffect, useState } from "react";
import "./ChangePw.css";
import axios from "axios";
import Cookies from "universal-cookie";
import CheckModal from "./CheckModal";

const ChangePw = ({ onClose }) => {
  const [currentPw, setCurrentPw] = useState("");
  const [pwCheckResult, setPwCheckResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [newPwError, setNewPwError] = useState("");
  const [confirmPwError, setConfirmPwError] = useState("");
  const [showCheckModal, setShowCheckModal] = useState(false); // New state for modal

  const handleCloseButtonClick = () => {
    onClose();
  };

  useEffect(() => {
    let isMounted = true;
  
    const checkPassword = async () => {
      // 입력값이 비어있는 경우에는 체크를 수행하지 않음
      if (currentPw.trim() === "") {
        return;
      }
  
      try {
        const cookies = new Cookies();
        const userToken = cookies.get("token");
  
        const response = await axios.post(
          "https://www.neusenseback.com/api/checkpw",
          { password: currentPw },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
  
        if (isMounted) {
          if (response.status === 200 && response.data.success) {
            setPwCheckResult(true);
            setErrorMessage(""); // 성공하면 에러 메시지 초기화
          } else {
            setPwCheckResult(false);
            setErrorMessage(response.data.msg || "비밀번호를 확인해주세요.");
          }
        }
      } catch (error) {
        if (isMounted) {
          // 서버 응답에 오류가 있을 때 처리
          console.error("비밀번호 체크 중 오류:", error);
  
          // 오류 메시지 설정
          setPwCheckResult(false);
          setErrorMessage("현재 비밀번호가 틀렸습니다.");
        }
      }
    };
  
    const timeoutId = setTimeout(() => {
      checkPassword();
    }, 1000);
  
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [currentPw]);

  const handleCurrentPwChange = (e) => {
    setCurrentPw(e.target.value);
  };

  const handleNewPwChange = (e) => {
    const value = e.target.value;
    setNewPw(value);

// 입력값이 비어있는 경우 유효성 검사를 수행하지 않음
    if (value.trim() === "") {
      setNewPwError("");
      return;
    }

    // 비밀번호 유효성 검사
    if (/^[a-zA-Z0-9]{6,}$/.test(value)) {
      setNewPwError("");
    } else {
      setNewPwError(
        "사용할 수 없는 비밀번호 입니다. 비밀번호는 ‘영문’ 또는 ‘숫자’가 포함된 최소 6글자 이상으로 만들어야 합니다."
      );
    }

    // 비밀번호 일치 여부 검사
    if (value !== confirmPw) {
      setConfirmPwError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPwError("");
    }
  };

  const handleConfirmPwChange = (e) => {
    const value = e.target.value;
    setConfirmPw(value);

    if (value.trim() === "") {
      setNewPwError("");
      return;
    }

    // 비밀번호 일치 여부 검사
    if (value !== newPw) {
      setConfirmPwError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPwError("");
    }
  };

  const handleConfirmButtonClick = async () => {
    // 비밀번호 일치 여부 확인
    if (newPw !== confirmPw) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 비밀번호 유효성 검사
    if (/^[a-zA-Z0-9]{6,}$/.test(newPw)) {
      setNewPwError("");
    } else {
      setNewPwError(
        "사용할 수 없는 비밀번호 입니다. 비밀번호는 ‘영문’ 또는 ‘숫자’가 포함된 최소 6글자 이상으로 만들어야 합니다."
      );
      return;
    }

    try {
      const cookies = new Cookies();
      const userToken = cookies.get("token");

      // PUT API 호출
      const response = await axios.put(
        "https://www.neusenseback.com/api/put/user/changepassword",
        {
          password: newPw,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.status === 200 && response.data.success) {
        console.log("비밀번호 변경 성공");
        // 여기에서 성공 시의 처리를 추가할 수 있습니다.
        setShowCheckModal(true); // Show modal on success
      } else {
        console.error("비밀번호 변경 실패:", response.data.msg);
        // 여기에서 실패 시의 처리를 추가할 수 있습니다.
      }
    } catch (error) {
      console.error("비밀번호 변경 중 오류:", error);
    }
  };

  return (
    <>
      <div className="changePwContainer">
        <div className="changePwWrapper">
          <div className="changePwTitle">
            <span>비밀번호 변경</span>
            <img
              onClick={handleCloseButtonClick}
              src={`${process.env.PUBLIC_URL}/img/closeButton.png`}
            />
          </div>
          <div
            className={`currentPw ${pwCheckResult === false ? "error" : ""}`}
          >
            <p>본인확인을 위해 현재 비밀번호를 입력해주세요.</p>
            <input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요"
              value={currentPw}
              onChange={(e) => handleCurrentPwChange(e)}
              style={{
                borderColor: pwCheckResult === false ? "#E94439" : "",
              }}
            />
            {pwCheckResult === false && (
              <p className="error-text">{errorMessage}</p>
            )}
          </div>
          <div className="newPw">
            <p>변경할 새 비밀번호를 입력해주세요.</p>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={newPw}
              onChange={(e) => handleNewPwChange(e)}
              className={confirmPwError ? "newInputError" : ""}
            />
            <br />
            <input
              type="password"
              placeholder="비밀번호를 재입력해주세요"
              name="passwordCheck"
              value={confirmPw}
              onChange={(e) => handleConfirmPwChange(e)}
              className={confirmPwError ? "newInputError" : ""}
            />
            {newPwError && <p className="errorNewText">{newPwError}</p>}
            {confirmPwError && (
              <p className="errorNewText">{confirmPwError}</p>
            )}
          </div>
          <div className="changeButtonWrapper">
            <button onClick={handleConfirmButtonClick}>확인</button>
          </div>
        </div>
      </div>
      {showCheckModal && (
        <div className="checkModal">
          <CheckModal checkMessage={'비밀번호가 변경 되었습니다.'} />
        </div>
      )}
    </>
  );
};

export default ChangePw;
