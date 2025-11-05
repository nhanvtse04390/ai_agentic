import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Cấu hình cơ bản cho Axios
const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    },
  withCredentials: true, // Cho phép gửi cookie trong request
};

// Tạo instance
const apiClient: AxiosInstance = axios.create(axiosConfig);

// Interceptor cho request
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// Interceptor cho response
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config,
    };
  },
  (error: any) => {
    if (error.response) {
      // Xử lý lỗi HTTP
      return Promise.reject({
        data: error.response.data,
        status: error.response.status,
        statusText: error.response.statusText,
        headers: error.response.headers,
        config: error.response.config,
      });
    } else if (error.request) {
      console.error('Không nhận được phản hồi từ server');
      return Promise.reject({ message: 'No response from server' });
    } else {
      console.error('Lỗi cấu hình request', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export default apiClient;
