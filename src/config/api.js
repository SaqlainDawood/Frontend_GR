// API Configuration for Vite
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

export const API_ENDPOINTS = {
  VERIFY_EMIRATES: '/api/verify-emirates',
  SAVE_STEP: '/api/save-step',
  UPLOAD: '/api/upload',
  GET_USER: '/api/user',
  GET_USERS: '/api/users',
  UPDATE_STATUS: '/api/user/:id/status',
};