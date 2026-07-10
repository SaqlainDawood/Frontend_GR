import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaIdCard, FaPassport, FaUserCheck, FaCalendarCheck,
  FaShieldAlt, FaBuilding
} from 'react-icons/fa';
import './StatsCards.css';

const StatsCards = ({ user }) => {
  const personalInfo = user?.personalInfo || {};
  const emiratesId = user?.emiratesId || {};

  const stats = [
    { 
      icon: FaIdCard, 
      label: 'Emirates ID', 
      value: emiratesId.verified ? '✅ Verified' : '⏳ Pending',
      color: '#667eea'
    },
    { 
      icon: FaPassport, 
      label: 'Nationality', 
      value: personalInfo.nationality || 'N/A',
      color: '#764ba2'
    },
    { 
      icon: FaUserCheck, 
      label: 'Gender', 
      value: personalInfo.gender || 'N/A',
      color: '#4facfe'
    },
    { 
      icon: FaCalendarCheck, 
      label: 'Date of Birth', 
      value: personalInfo.dateOfBirth || 'N/A',
      color: '#43e97b'
    },
    { 
      icon: FaShieldAlt, 
      label: 'Application Status', 
      value: user?.status || 'draft',
      color: '#fa709a'
    },
    { 
      icon: FaBuilding, 
      label: 'Marital Status', 
      value: personalInfo.maritalStatus || 'N/A',
      color: '#f093fb'
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
          >
            <div className="stat-icon" style={{ background: `${stat.color}12`, color: stat.color }}>
              <Icon />
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;