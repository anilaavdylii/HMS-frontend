import axios from 'axios';
import { API_URL } from '../config/app';
import { useToken } from '../hooks/useToken';

const token = useToken();

axios.defaults.baseURL = API_URL;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

axios.interceptors.request.use((config) => {
  console.log(config);
  if (token) {
    console.log('yeah');
  }
  return config;
});

export default axios;
