import React, { useState } from 'react';
import { FaSearch, FaBell, FaCog, FaUser, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './TopNav.css';

const TopNav = ({ user }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const getFullName = () => {
    if (user?.personalInfo?.fullName) return user.personalInfo.fullName;
    if (user?.fullName) return user.fullName;
    return 'Client';
  };

  return (
    <header className="topnav">
      <div className="topnav-left">
        <h1 className="topnav-title">Golden Residency Dashboard</h1>
      </div>

      <div className="topnav-center">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="topnav-right">
        <button className="nav-icon-btn">
          <FaBell />
          <span className="notification-badge">3</span>
        </button>
        
        <button className="nav-icon-btn">
          <FaCog />
        </button>

        <div className="profile-dropdown">
          <button 
            className="profile-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="profile-avatar">
              {user?.documents?.photo ? (
                <img src={user.documents.photo} alt="Profile" />
              ) : (
                <FaUser />
              )}
            </div>
            <span className="profile-name">{getFullName()}</span>
            <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                className="dropdown-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="dropdown-item">
                  <FaUser /> Profile
                </div>
                <div className="dropdown-item">
                  <FaCog /> Settings
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item logout" onClick={handleLogout}>
                  Logout
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default TopNav;