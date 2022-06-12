import axios from '../../utils/axios';

export const login = async (payload) => {
  const data = await axios.post('/auth/authenticate', payload);

  return data;
};
