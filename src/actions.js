// actions.js
export const login = (userData) => ({
  type: 'LOGIN',
  payload: userData,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const setUserData = (userData) => ({
  type: 'SET_USER_DATA',
  payload: userData,
});

export const loginSuccess = (data) => {
  // data에서 token과 id를 추출
  const { token, id } = data;

  return {
    type: 'LOGIN_SUCCESS',
    payload: { token, id }, // 토큰과 사용자 ID를 함께 저장
  };
};