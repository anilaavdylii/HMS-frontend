import axios from '../../utils/axios';

export const register = async (payload) => {
  const data = await axios.post('/auth/signup', payload);

  return data;
};
