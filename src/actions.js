import Cookies from "universal-cookie";

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

export const loginSuccess = (userData) => {
  // userData에서 필요한 정보만 추출
  const { token, id, name, password } = userData;
  const cookies = new Cookies();
  cookies.set("name", name, { path: '/' });

  return {
    type: 'LOGIN_SUCCESS',
    payload: { token, id, name, password },
  };
};