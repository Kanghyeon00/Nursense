import { createStore } from 'redux';
import authReducer from './reducer';
import { getUserDataFromCookie } from './/components/cookies'; // 추가

const store = createStore(authReducer);

// 새로고침 시 사용자 데이터 불러오기
const userDataFromCookie = getUserDataFromCookie();
if (userDataFromCookie) {
  store.dispatch({ type: 'SET_USER_DATA', payload: userDataFromCookie });
}

export default store;