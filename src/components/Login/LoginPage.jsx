import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaLock, FaEye, FaEyeSlash, 
  FaUserGraduate, FaBuilding, FaShieldAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    
    try {
      const result = await login(email, password);
      
      if (result.success) {
        toast.success('Welcome back! 🎉');
        navigate('/dashboard');
      } else {
        toast.error(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Background Decoration */}
      <div className="login-bg">
        <div className="bg-overlay"></div>
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="login-wrapper">
        <motion.div 
          className="login-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="login-brand">
            <div className="brand-logo">
              <FaBuilding className="logo-icon" />
              <FaShieldAlt className="logo-icon-shield" />
            </div>
            <h1 className="brand-title">Golden Residency</h1>
            <p className="brand-subtitle">Smart Services Portal</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label className="form-label">
                <FaEnvelope className="label-icon" />
                Email Address
              </label>
              <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  className="form-input"
                  disabled={loading}
                />
                <div className="input-highlight"></div>
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaLock className="label-icon" />
                Password
              </label>
              <div className={`input-wrapper ${errors.password ? 'error' : ''}`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="form-input"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <div className="input-highlight"></div>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember Me
              </label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <motion.button
              type="submit"
              className="login-btn"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <span className="btn-loader">
                  <span className="spinner"></span>
                  Signing In...
                </span>
              ) : (
                <span>Sign In to Dashboard</span>
              )}
            </motion.button>

            <div className="login-divider">
              <span>Protected Government Service</span>
            </div>

            <div className="login-footer">
              <p className="secure-text">
                <FaShieldAlt /> Secure & Encrypted Connection
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div 
          className="login-decoration"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="decoration-content">
            <div className="decoration-icon">
              <FaUserGraduate />
            </div>
            <h2>Welcome Back</h2>
            <p>Access your Golden Residency application</p>
            <div className="decoration-features">
              <div className="feature-item">
                <span className="feature-dot"></span>
                Track Application Status
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                View Personal Information
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Uploaded Documents
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Residency Updates
              </div>
            </div>
            <div className="decoration-badge">ICP Smart Services</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;