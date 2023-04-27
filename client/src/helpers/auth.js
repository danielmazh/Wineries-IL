import Cookies from 'js-cookie';

export const setJwt = (token) => {
  Cookies.set('jwt', token);
};

export const getJwt = () => {
  return Cookies.get('jwt');
};

export const removeJwt = () => {
  Cookies.remove('jwt');
};

// auth.js
export const clearJwt = () => {
  localStorage.removeItem('token');
  console.log('Token removed from localStorage');
};

