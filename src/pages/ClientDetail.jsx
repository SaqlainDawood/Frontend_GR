import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaIdCard, FaBuilding, FaCalendar } from 'react-icons/fa';
import './ClientDetail.css';

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClient = async () => {
      const token = localStorage.getItem('ownerToken');
      if (!token) {
        navigate('/owner-login');
        return;
      }

      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await axios.get(`${API_URL}/api/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.data.success) {
          setClient(response.data.data);
        }
      } catch (error) {
        toast.error('Error fetching client details');
        navigate('/owner-dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="client-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading client details...</p>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="client-detail-error">
        <p>Client not found</p>
        <button onClick={() => navigate('/owner-dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="client-detail-container">
      <button className="back-btn" onClick={() => navigate('/owner-dashboard')}>
        <FaArrowLeft /> Back to Dashboard
      </button>

      <div className="client-detail-card">
        <div className="client-detail-header">
          <div className="client-avatar-large">
            {client.documents?.photo ? (
              <img src={client.documents.photo} alt="Profile" />
            ) : (
              <FaUser />
            )}
          </div>
          <div className="client-detail-info">
            <h1>{client.personalInfo?.fullName || 'N/A'}</h1>
            <p className="client-id-text">Client ID: {client._id}</p>
            <span className={`status-badge status-${client.status}`}>
              {client.status || 'draft'}
            </span>
          </div>
        </div>

        <div className="client-detail-grid">
          {/* Personal Information */}
          <div className="detail-section">
            <h3><FaUser /> Personal Information</h3>
            <div className="detail-row">
              <span className="detail-label">Full Name:</span>
              <span>{client.personalInfo?.fullName || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date of Birth:</span>
              <span>{client.personalInfo?.dateOfBirth || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Nationality:</span>
              <span>{client.personalInfo?.nationality || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Gender:</span>
              <span>{client.personalInfo?.gender || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Marital Status:</span>
              <span>{client.personalInfo?.maritalStatus || 'N/A'}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="detail-section">
            <h3><FaEnvelope /> Contact Details</h3>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span>{client.contactDetails?.email || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span>{client.contactDetails?.phone || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Address:</span>
              <span>{client.contactDetails?.address || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">City:</span>
              <span>{client.contactDetails?.city || 'N/A'}</span>
            </div>
          </div>

          {/* Emirates ID */}
          <div className="detail-section">
            <h3><FaIdCard /> Emirates ID</h3>
            <div className="detail-row">
              <span className="detail-label">ID Number:</span>
              <span>{client.emiratesId?.number || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Verified:</span>
              <span>{client.emiratesId?.verified ? '✅ Yes' : '❌ No'}</span>
            </div>
          </div>

          {/* Bank Details */}
          <div className="detail-section">
            <h3><FaBuilding /> Bank Details</h3>
            <div className="detail-row">
              <span className="detail-label">Bank Name:</span>
              <span>{client.bankDetails?.bankName || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Account Count:</span>
              <span>{client.bankDetails?.accountCount || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Loan Status:</span>
              <span>{client.bankDetails?.hasLoan || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Verification Type:</span>
              <span>{client.bankDetails?.verificationType || 'N/A'}</span>
            </div>
          </div>

          {/* Registration Info */}
          <div className="detail-section full-width">
            <h3><FaCalendar /> Registration Information</h3>
            <div className="detail-row">
              <span className="detail-label">Registered On:</span>
              <span>{client.createdAt ? new Date(client.createdAt).toLocaleString() : 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Last Updated:</span>
              <span>{client.updatedAt ? new Date(client.updatedAt).toLocaleString() : 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Current Step:</span>
              <span>{client.currentStep || 'N/A'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Application Status:</span>
              <span className={`status-badge status-${client.status}`}>
                {client.status || 'draft'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;