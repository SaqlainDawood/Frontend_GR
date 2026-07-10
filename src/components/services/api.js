import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('goldenResidencyToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('goldenResidencyToken');
      localStorage.removeItem('goldenResidencyUser');
      // Only redirect if not already on login page
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// ✅ EXISTING - Registration APIs (UNCHANGED)
export const API_ENDPOINTS = {
  VERIFY_EMIRATES: '/api/verify-emirates',
  SAVE_STEP: '/api/save-step',
  UPLOAD: '/api/upload',
  GET_USER: '/api/user',
  GET_USERS: '/api/users',
  UPDATE_STATUS: '/api/user/:id/status',
};

// ✅ NEW - Auth APIs
export const authAPI = {
  login: (email, password) => api.post('/api/auth/login', { email, password }),
  setPassword: (email, password, userId) => api.post('/api/auth/register-password', { email, password, userId }),
  getMe: () => api.get('/api/auth/me'),
  logout: () => {
    localStorage.removeItem('goldenResidencyToken');
    localStorage.removeItem('goldenResidencyUser');
  }
};

// ✅ NEW - User APIs (with auth)
export const userAPI = {
  getUser: (userId) => api.get(`/api/user/${userId}`),
  getAllUsers: () => api.get('/api/users'),
  updateStatus: (userId, status) => api.patch(`/api/user/${userId}/status`, { status }),
};

export default api;