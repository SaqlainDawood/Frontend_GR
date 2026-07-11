import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserCog, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import './OwnerLogin.css';

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/owner-login`,
        { email, password }
      );

      if (response.data.success) {
        localStorage.setItem('ownerToken', response.data.token);
        localStorage.setItem('ownerData', JSON.stringify(response.data.user));
        toast.success('Welcome Admin! 🎉');
        navigate('/owner-dashboard');
      } else {
        toast.error(response.data.message || 'Login failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="owner-login-container">
      <div className="owner-login-bg">
        <div className="bg-overlay"></div>
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="owner-login-wrapper">
        <motion.div 
          className="owner-login-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="owner-login-brand">
            <div className="brand-logo">
              <FaUserCog className="logo-icon" />
              <FaShieldAlt className="logo-icon-shield" />
            </div>
            <h1 className="brand-title">Admin Portal</h1>
            <p className="brand-subtitle">ICP Smart Services - Owner Access</p>
          </div>

          <form onSubmit={handleSubmit} className="owner-login-form">
            <div className="form-group">
              <label className="form-label">
                <FaEnvelope className="label-icon" />
                Admin Email
              </label>
              <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter admin email"
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
                  placeholder="Enter admin password"
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

            <motion.button
              type="submit"
              className="owner-login-btn"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? (
                <span className="btn-loader">
                  <span className="spinner"></span>
                  Authenticating...
                </span>
              ) : (
                <span>Login as Admin</span>
              )}
            </motion.button>

            <div className="login-divider">
              <span>Secure Admin Access</span>
            </div>

            <div className="login-footer">
              <p className="secure-text">
                <FaShieldAlt /> Secure & Encrypted Connection
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div 
          className="owner-login-decoration"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="decoration-content">
            <div className="decoration-icon">
              <FaUserCog />
            </div>
            <h2>Welcome Admin</h2>
            <p>Manage all client registrations</p>
            <div className="decoration-features">
              <div className="feature-item">
                <span className="feature-dot"></span>
                View All Registered Clients
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Track Application Status
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Monitor Registrations
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                Export Client Data
              </div>
            </div>
            <div className="decoration-badge">Admin Panel</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerLogin;