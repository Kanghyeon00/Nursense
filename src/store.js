import { createStore } from 'redux';
import authReducer from './reducer';
import { getUserDataFromCookie } from './components/cookies';

// 초기 상태 설정
const initialState = {
  isAuthenticated: false,
  user: null,
};

// 사용자 정보 불러오기
const userDataFromCookie = getUserDataFromCookie();
if (userDataFromCookie) {
  initialState.isAuthenticated = true;
  initialState.user = userDataFromCookie;
}

// Redux 스토어 생성
const store = createStore(authReducer, initialState);
export default store;