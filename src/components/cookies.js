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
    const id = cookies.get("id");
  
    // 토큰과 사용자 ID가 모두 존재할 때만 반환
    if (token && id) {
      return {
        token,
        id: id,
      };
    }
  
    return null;
  };
  