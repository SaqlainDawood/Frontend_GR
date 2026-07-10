import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaIdCard, FaCalendar, FaFlag, 
  FaUserTag, FaEnvelope, FaPhone, FaMapMarker,
  FaHome, FaCity
} from 'react-icons/fa';
import './PersonalInfo.css';

const PersonalInfo = ({ user, expanded = false }) => {
  const personalInfo = user?.personalInfo || {};
  const contactDetails = user?.contactDetails || {};
  const emiratesId = user?.emiratesId || {};

  const sections = [
    {
      title: 'Personal Information',
      icon: FaUser,
      fields: [
        { label: 'Full Name', value: personalInfo.fullName || 'N/A' },
        { label: 'Date of Birth', value: personalInfo.dateOfBirth || 'N/A' },
        { label: 'Gender', value: personalInfo.gender || 'N/A' },
        { label: 'Nationality', value: personalInfo.nationality || 'N/A' },
        { label: 'Marital Status', value: personalInfo.maritalStatus || 'N/A' },
      ]
    },
    {
      title: 'Contact Details',
      icon: FaEnvelope,
      fields: [
        { label: 'Email', value: contactDetails.email || user?.email || 'N/A' },
        { label: 'Phone Number', value: contactDetails.phone || user?.phone || 'N/A' },
        { label: 'Address', value: contactDetails.address || 'N/A' },
        { label: 'City', value: contactDetails.city || 'N/A' },
      ]
    },
    {
      title: 'Emirates ID Information',
      icon: FaIdCard,
      fields: [
        { label: 'Emirates ID Number', value: emiratesId.number || 'N/A' },
        { label: 'Verification Status', value: emiratesId.verified ? '✅ Verified' : '⏳ Pending' },
      ]
    }
  ];

  return (
    <motion.div 
      className={`personal-info ${expanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h3 className="section-title">Personal Information</h3>
      
      <div className="personal-grid">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.div 
              key={idx}
              className="personal-section"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <div className="section-header">
                <Icon className="section-icon" />
                <h4>{section.title}</h4>
              </div>
              <div className="section-fields">
                {section.fields.map((field, index) => (
                  <div key={index} className="field-item">
                    <span className="field-label">{field.label}</span>
                    <span className="field-value">{field.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PersonalInfo;