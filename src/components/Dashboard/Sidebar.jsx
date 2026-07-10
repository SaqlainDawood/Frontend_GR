import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, FaUser, FaIdCard, FaUniversity, 
  FaFileAlt, FaCheckCircle, FaBell, FaCog, 
  FaSignOutAlt, FaBuilding, FaShieldAlt
} from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: 'dashboard', icon: FaHome, label: 'Dashboard' },
    { id: 'profile', icon: FaUser, label: 'My Profile' },
    { id: 'personal', icon: FaIdCard, label: 'Personal Information' },
    { id: 'bank', icon: FaUniversity, label: 'Bank Details' },
    { id: 'documents', icon: FaFileAlt, label: 'Uploaded Documents' },
    { id: 'status', icon: FaCheckCircle, label: 'Application Status' },
    { id: 'notifications', icon: FaBell, label: 'Notifications' },
    { id: 'settings', icon: FaCog, label: 'Settings' },
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <motion.div 
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon-wrapper">
            <FaBuilding className="logo-icon" />
          </div>
          {isExpanded && (
            <div className="logo-text">
              <span className="logo-title">Golden</span>
              <span className="logo-subtitle">Residency</span>
            </div>
          )}
        </div>
        <button 
          className="sidebar-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '◀' : '▶'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <motion.div
              key={item.id}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="sidebar-icon" />
              {isExpanded && <span className="sidebar-label">{item.label}</span>}
              {isActive && isExpanded && (
                <motion.div 
                  className="sidebar-indicator"
                  layoutId="sidebarIndicator"
                />
              )}
            </motion.div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar">
            <FaUser />
          </div>
          {isExpanded && (
            <div className="user-info">
              <span className="user-name">Account</span>
              <span className="user-role">Registered Client</span>
            </div>
          )}
        </div>
        <motion.div 
          className="sidebar-item logout"
          onClick={handleLogout}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaSignOutAlt className="sidebar-icon" />
          {isExpanded && <span className="sidebar-label">Logout</span>}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;