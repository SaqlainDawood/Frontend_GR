import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, userAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('goldenResidencyToken');
    const userData = localStorage.getItem('goldenResidencyUser');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
        
        // ✅ Verify token and refresh user data
        const verifyUser = async () => {
          try {
            const response = await authAPI.getMe();
            if (response.data.success) {
              const updatedUser = response.data.data;
              setUser(updatedUser);
              localStorage.setItem('goldenResidencyUser', JSON.stringify(updatedUser));
            }
          } catch (error) {
            // Token expired or invalid
            authAPI.logout();
            setUser(null);
            setIsAuthenticated(false);
          }
        };
        verifyUser();
        
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('goldenResidencyToken');
        localStorage.removeItem('goldenResidencyUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authAPI.login(email, password);
      
      if (response.data.success) {
        const { token, user } = response.data;
        localStorage.setItem('goldenResidencyToken', token);
        localStorage.setItem('goldenResidencyUser', JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        return { success: true };
      }
      
      return { success: false, message: response.data.message };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed. Please try again.' 
      };
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const setPassword = async (email, password, userId) => {
    try {
      const response = await authAPI.setPassword(email, password, userId);
      if (response.data.success) {
        const { token, user } = response.data;
        localStorage.setItem('goldenResidencyToken', token);
        localStorage.setItem('goldenResidencyUser', JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        return { success: true };
      }
      return { success: false, message: response.data.message };
    } catch (error) {
      console.error('Set password error:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Error setting password' 
      };
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      isAuthenticated, 
      login, 
      logout,
      setPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};