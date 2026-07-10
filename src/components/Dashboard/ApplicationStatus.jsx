import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import './ApplicationStatus.css';

const ApplicationStatus = ({ user, expanded = false }) => {
  const status = user?.status || 'draft';
  
  const steps = [
    { 
      key: 'draft', 
      label: 'Application Started', 
      icon: FaSpinner,
      description: 'Your application has been initiated',
      color: '#17a2b8'
    },
    { 
      key: 'submitted', 
      label: 'Application Submitted', 
      icon: FaClock,
      description: 'Your application is under review',
      color: '#ffc107'
    },
    { 
      key: 'approved', 
      label: 'Application Approved', 
      icon: FaCheckCircle,
      description: 'Your application has been approved',
      color: '#28a745'
    },
    { 
      key: 'rejected', 
      label: 'Application Rejected', 
      icon: FaTimesCircle,
      description: 'Your application was not approved',
      color: '#dc3545'
    },
  ];

  const currentIndex = steps.findIndex(s => s.key === status);
  const currentStep = steps[currentIndex] || steps[0];

  return (
    <motion.div 
      className={`application-status ${expanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <h3 className="section-title">Application Status</h3>
      
      <div className="status-timeline">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentIndex;
          const isCurrent = index === currentIndex;
          
          return (
            <div key={step.key} className="status-step">
              <div className={`status-dot ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                {isActive ? <Icon /> : index + 1}
              </div>
              <div className="status-line-wrapper">
                <div className={`status-line ${isActive ? 'active' : ''}`}></div>
              </div>
              <div className="status-content">
                <div className="status-label" style={{ color: isActive ? step.color : '#adb5bd' }}>
                  {step.label}
                </div>
                <div className="status-description">{step.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="status-summary">
        <div className="summary-card" style={{ borderColor: currentStep.color }}>
          <div className="summary-icon" style={{ color: currentStep.color }}>
            <currentStep.icon />
          </div>
          <div className="summary-info">
            <p className="summary-label">Current Status</p>
            <p className="summary-value" style={{ color: currentStep.color }}>
              {currentStep.label}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationStatus;