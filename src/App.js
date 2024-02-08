// App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './store';
import Main from './page/Main';
import MyPage from './page/MyPage';
import Register from './page/Register';
import Login from './page/Login';
import './App.css';
import { loginSuccess } from '../src/actions';
import { getTokenFromCookie } from '../src/components/cookies';
import Curriculum from './page/Curriculum';
import CurrEvaluation from './page/CurrEvaluation';
import Guide from './page/Guide';
import CurrLearning from './page/CurrLearning';
import Customer from './page/Customer';
import Download from './page/Download';
import Introduce from './page/About';
import About from './page/About';
import NurseMind from './page/NurseMind';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // 쿠키에서 유효한 토큰이 있는지 확인
    const token = getTokenFromCookie();

    if (token) {
      // 사용자를 인증된 상태로 설정하는 액션을 디스패치
      dispatch(loginSuccess({ token }));
    }
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/curriculum/learn" element={<Curriculum />} />
        <Route path="/curriculum/evaluation" element={<CurrEvaluation />} />
        <Route path="/curriculum/guide" element={<Guide />} />
        <Route path="/curriculum/learning" element={<CurrLearning />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
        <Route path="/nursemind" element={<NurseMind />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
