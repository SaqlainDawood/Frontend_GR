import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { userAPI } from '../services/api';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import ProfileCard from './ProfileCard';
import StatsCards from './StatsCards';
import PersonalInfo from './PersonalInfo';
import BankDetails from './BankDetails';
import DocumentsSection from './DocumentsSection';
import ApplicationStatus from './ApplicationStatus';
import LoadingSpinner from '../common/LoadingSpinner';
import './Dashboard.css';

const Dashboard = () => {
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user?._id) {
        try {
          const response = await userAPI.getUser(user._id);
          if (response.data.success) {
            setUserData(response.data.data);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const data = userData || user;

  return (
    <div className="dashboard-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="dashboard-main">
        <TopNav user={data} />
        
        <div className="dashboard-content">
          {activeSection === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="dashboard-grid"
            >
              <ProfileCard user={data} />
              <StatsCards user={data} />
              <ApplicationStatus user={data} />
              <PersonalInfo user={data} />
              <BankDetails user={data} />
              <DocumentsSection user={data} />
            </motion.div>
          )}
          
          {activeSection === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileCard user={data} expanded />
            </motion.div>
          )}
          
          {activeSection === 'personal' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PersonalInfo user={data} expanded />
            </motion.div>
          )}
          
          {activeSection === 'bank' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BankDetails user={data} expanded />
            </motion.div>
          )}
          
          {activeSection === 'documents' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DocumentsSection user={data} expanded />
            </motion.div>
          )}
          
          {activeSection === 'status' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ApplicationStatus user={data} expanded />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;