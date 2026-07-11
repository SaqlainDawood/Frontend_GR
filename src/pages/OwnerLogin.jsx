import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaLock, FaEye, FaEyeSlash, 
  FaUserCog, FaShieldAlt, FaChartLine, 
  FaUsers, FaDatabase, FaRocket 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import './OwnerLogin.css';

const OwnerLogin = () => {
  // ✅ ALL STATE - UNCHANGED
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // ✅ VALIDATION - UNCHANGED
  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ HANDLE SUBMIT - COMPLETELY UNCHANGED
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

  // ✅ RENDER - UI COMPLETELY REDESIGNED (Logic Unchanged)
  return (
    <div className="owner-login-container">
      {/* Animated Background */}
      <div className="owner-login-bg">
        <div className="bg-gradient-mesh"></div>
        <div className="bg-aurora aurora-1"></div>
        <div className="bg-aurora aurora-2"></div>
        <div className="bg-aurora aurora-3"></div>
        <div className="bg-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`
            }} />
          ))}
        </div>
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      {/* Main Wrapper */}
      <div className="owner-login-wrapper">
        {/* Left - Login Card */}
        <motion.div 
          className="owner-login-card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Brand Section */}
          <div className="owner-login-brand">
            <motion.div 
              className="brand-logo"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="logo-wrapper">
                <FaUserCog className="logo-icon" />
                <div className="logo-ring"></div>
              </div>
              <FaShieldAlt className="logo-icon-shield" />
            </motion.div>
            <motion.h1 
              className="brand-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Admin Portal
            </motion.h1>
            <motion.p 
              className="brand-subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              ICP Smart Services — Owner Access
            </motion.p>
          </div>

          {/* Form - UNCHANGED STRUCTURE */}
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
                <div className="input-glow"></div>
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
                <div className="input-glow"></div>
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
              <span className="btn-shine"></span>
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

        {/* Right - Premium Illustration */}
        <motion.div 
          className="owner-login-decoration"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="decoration-content">
            <motion.div 
              className="decoration-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FaRocket /> v3.0
            </motion.div>

            <motion.div 
              className="decoration-icon"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUserCog />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Welcome Admin
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Manage all client registrations with ease
            </motion.p>

            {/* Glass Cards */}
            <motion.div 
              className="decoration-glass-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="glass-card">
                <FaUsers className="glass-icon" />
                <div className="glass-info">
                  <span className="glass-value">2,847</span>
                  <span className="glass-label">Total Clients</span>
                </div>
              </div>
              <div className="glass-card">
                <FaChartLine className="glass-icon" />
                <div className="glass-info">
                  <span className="glass-value">+12.5%</span>
                  <span className="glass-label">Growth Rate</span>
                </div>
              </div>
              <div className="glass-card">
                <FaDatabase className="glass-icon" />
                <div className="glass-info">
                  <span className="glass-value">96%</span>
                  <span className="glass-label">Data Accuracy</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="decoration-features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
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
            </motion.div>

            <div className="decoration-footer-badge">
              <FaShieldAlt /> ICP Smart Services
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerLogin;