import decode from 'jwt-decode';

export const jwtVerify = (token) => {
  if (token) {
    try {
      const decoded = decode(token);
      const now = Date.now() / 1000;
      // Check if now (in ms) is less then exp time
      return now <= decoded.exp;
    } catch (error) {
      console.error('👾 invalid token!', error);
      return false;
    }
  }
  return false;
};
