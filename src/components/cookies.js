import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getTokenFromCookie = () => {
  return cookies.get('accessToken');
};

export const setTokenCookie = (token) => {
  cookies.set('accessToken', token, { path: '/' });
};

export const removeTokenCookie = () => {
  // Remove the token cookie
  cookies.remove('accessToken', { path: '/' });
};

// cookies.js

export const getUserDataFromCookie = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const refreshToken = cookies.get("refreshToken");
  const id = cookies.get("id");
  const name = cookies.get("name"); // 추가된 부분

  if (token && refreshToken && id && name) {
    return { token, refreshToken, id, name }; // name 값을 추가하여 반환
  } else {
    return null;
  }
};