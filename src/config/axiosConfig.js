import axios from 'axios';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (error.code === 'ERR_CANCELED') {
    toast.error('API Canceled!');
    return Promise.resolve();
  }

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
    toast.error(error);
  }
  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error);
});
