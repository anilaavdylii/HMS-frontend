import axios from '../../utils/axios';

export const fetchMe = async (payload) => {
  const data = await axios.get('/users', payload);

  return data;
};
