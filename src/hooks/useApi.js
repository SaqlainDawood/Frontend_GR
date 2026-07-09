import axios from 'axios';

const useApi = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      console.log(`🚀 ${config.method.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      console.log(`✅ ${response.status} ${response.config.url}`);
      return response;
    },
    (error) => {
      console.error(`❌ ${error.response?.status || 'Network Error'} ${error.config?.url}`);
      return Promise.reject(error);
    }
  );

  return api;
};

export default useApi;