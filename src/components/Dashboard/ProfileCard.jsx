import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaEnvelope, FaPhone, FaIdCard, 
  FaCalendar, FaUserTag, FaFlag, FaCheckCircle,
  FaAddressCard, FaBuilding
} from 'react-icons/fa';
import './ProfileCard.css';

const ProfileCard = ({ user, expanded = false }) => {
  const personalInfo = user?.personalInfo || {};
  const contactDetails = user?.contactDetails || {};
  const emiratesId = user?.emiratesId || {};

  const getFullName = () => {
    return personalInfo.fullName || user?.fullName || 'Not Provided';
  };

  const getStatus = () => {
    return user?.status || 'draft';
  };

  const getStatusBadge = () => {
    const status = getStatus();
    const statusMap = {
      'submitted': { label: 'Submitted', color: '#ffc107', bg: '#fff3cd' },
      'approved': { label: 'Approved', color: '#28a745', bg: '#d4edda' },
      'rejected': { label: 'Rejected', color: '#dc3545', bg: '#f8d7da' },
      'draft': { label: 'In Progress', color: '#17a2b8', bg: '#d1ecf1' },
    };
    return statusMap[status] || statusMap['draft'];
  };

  const statusBadge = getStatusBadge();

  return (
    <motion.div 
      className={`profile-card ${expanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="profile-header">
        <div className="profile-avatar-large">
          {user?.documents?.photo ? (
            <img src={user.documents.photo} alt="Profile" />
          ) : (
            <FaUser />
          )}
        </div>
        <div className="profile-info">
          <h2 className="profile-name">{getFullName()}</h2>
          <p className="profile-id">Application ID: {user?._id?.slice(-8) || 'N/A'}</p>
          <span 
            className="profile-status" 
            style={{ background: statusBadge.bg, color: statusBadge.color }}
          >
            <FaCheckCircle /> {statusBadge.label}
          </span>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <span>{contactDetails.email || user?.email || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <FaPhone className="detail-icon" />
          <span>{contactDetails.phone || user?.phone || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <FaIdCard className="detail-icon" />
          <span>Emirates ID: {emiratesId.number || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <FaFlag className="detail-icon" />
          <span>Nationality: {personalInfo.nationality || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <FaCalendar className="detail-icon" />
          <span>DOB: {personalInfo.dateOfBirth || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <FaUserTag className="detail-icon" />
          <span>Gender: {personalInfo.gender || 'N/A'}</span>
        </div>
      </div>

      {expanded && (
        <motion.div 
          className="profile-expanded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h4>Additional Information</h4>
          <div className="expanded-grid">
            <div className="expanded-item">
              <label>Registration Date</label>
              <p>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
            </div>
            <div className="expanded-item">
              <label>Application Status</label>
              <p className="status-value" style={{ color: statusBadge.color }}>
                {statusBadge.label}
              </p>
            </div>
            <div className="expanded-item">
              <label>Emirates ID Verified</label>
              <p>{emiratesId.verified ? '✅ Verified' : '⏳ Pending'}</p>
            </div>
            <div className="expanded-item">
              <label>Marital Status</label>
              <p>{personalInfo.maritalStatus || 'N/A'}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProfileCard;