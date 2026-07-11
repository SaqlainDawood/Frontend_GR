import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { 
  FaUsers, FaSearch, FaEye, FaFilter, 
  FaDownload, FaSignOutAlt, FaShieldAlt,
  FaCheckCircle, FaClock, FaTimesCircle,
  FaUser, FaEnvelope, FaPhone, FaIdCard,
  FaBuilding, FaCalendar
} from 'react-icons/fa';
import './OwnerDashboard.css';

const OwnerDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [stats, setStats] = useState({
    total: 0,
    submitted: 0,
    approved: 0,
    rejected: 0,
    draft: 0
  });

  const navigate = useNavigate();

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('ownerToken');
      if (!token) {
        navigate('/owner-login');
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/admin/users`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        if (response.data.success) {
          setUsers(response.data.data);
          calculateStats(response.data.data);
        }
      } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          localStorage.removeItem('ownerToken');
          localStorage.removeItem('ownerData');
          navigate('/owner-login');
        } else {
          toast.error('Error fetching users');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  const calculateStats = (data) => {
    const stats = {
      total: data.length,
      submitted: data.filter(u => u.status === 'submitted').length,
      approved: data.filter(u => u.status === 'approved').length,
      rejected: data.filter(u => u.status === 'rejected').length,
      draft: data.filter(u => u.status === 'draft').length
    };
    setStats(stats);
  };

  const handleLogout = () => {
    localStorage.removeItem('ownerToken');
    localStorage.removeItem('ownerData');
    toast.success('Logged out successfully');
    navigate('/owner-login');
  };

  // Filter users
  const filteredUsers = users.filter(user => {
    const searchMatch = 
      user.personalInfo?.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.contactDetails?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.emiratesId?.number?.includes(searchTerm) ||
      user._id?.includes(searchTerm);

    const statusMatch = filterStatus === 'all' || user.status === filterStatus;
    
    return searchMatch && statusMatch;
  });

  const getStatusBadge = (status) => {
    const statusMap = {
      'submitted': { label: 'Submitted', icon: FaClock, color: '#ffc107', bg: '#fff3cd' },
      'approved': { label: 'Approved', icon: FaCheckCircle, color: '#28a745', bg: '#d4edda' },
      'rejected': { label: 'Rejected', icon: FaTimesCircle, color: '#dc3545', bg: '#f8d7da' },
      'draft': { label: 'In Progress', icon: FaClock, color: '#17a2b8', bg: '#d1ecf1' },
    };
    return statusMap[status] || statusMap['draft'];
  };

  if (loading) {
    return (
      <div className="owner-dashboard-loading">
        <div className="loading-spinner-large"></div>
        <p>Loading client data...</p>
      </div>
    );
  }

  return (
    <div className="owner-dashboard">
      {/* Header */}
      <header className="owner-header">
        <div className="owner-header-content">
          <div className="owner-header-left">
            <FaShieldAlt className="header-icon" />
            <h1>Admin Dashboard</h1>
            <span className="header-badge">Owner Access</span>
          </div>
          <div className="owner-header-right">
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="owner-stats">
        <div className="stat-card total">
          <div className="stat-icon"><FaUsers /></div>
          <div className="stat-info">
            <span className="stat-value">{stats.total}</span>
            <span className="stat-label">Total Clients</span>
          </div>
        </div>
        <div className="stat-card submitted">
          <div className="stat-icon"><FaClock /></div>
          <div className="stat-info">
            <span className="stat-value">{stats.submitted}</span>
            <span className="stat-label">Submitted</span>
          </div>
        </div>
        <div className="stat-card approved">
          <div className="stat-icon"><FaCheckCircle /></div>
          <div className="stat-info">
            <span className="stat-value">{stats.approved}</span>
            <span className="stat-label">Approved</span>
          </div>
        </div>
        <div className="stat-card rejected">
          <div className="stat-icon"><FaTimesCircle /></div>
          <div className="stat-info">
            <span className="stat-value">{stats.rejected}</span>
            <span className="stat-label">Rejected</span>
          </div>
        </div>
        <div className="stat-card draft">
          <div className="stat-icon"><FaClock /></div>
          <div className="stat-info">
            <span className="stat-value">{stats.draft}</span>
            <span className="stat-label">In Progress</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="owner-controls">
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, email, ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-wrapper">
          <FaFilter className="filter-icon" />
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="draft">In Progress</option>
            <option value="submitted">Submitted</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="owner-table-container">
        <div className="table-header">
          <h3>Registered Clients</h3>
          <span className="table-count">{filteredUsers.length} clients</span>
        </div>

        <div className="table-responsive">
          <table className="owner-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Emirates ID</th>
                <th>Status</th>
                <th>Registered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="8" className="no-data">
                    <div className="no-data-content">
                      <FaUsers size={48} />
                      <p>No clients found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, index) => {
                  const statusBadge = getStatusBadge(user.status);
                  const StatusIcon = statusBadge.icon;
                  return (
                    <motion.tr
                      key={user._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <td>{index + 1}</td>
                      <td>
                        <div className="client-info">
                          <div className="client-avatar">
                            {user.documents?.photo ? (
                              <img src={user.documents.photo} alt="Profile" />
                            ) : (
                              <FaUser />
                            )}
                          </div>
                          <div className="client-name">
                            <strong>{user.personalInfo?.fullName || 'N/A'}</strong>
                            <span className="client-id">ID: {user._id?.slice(-8)}</span>
                          </div>
                        </div>
                      </td>
                      <td>{user.contactDetails?.email || 'N/A'}</td>
                      <td>{user.contactDetails?.phone || 'N/A'}</td>
                      <td>{user.emiratesId?.number || 'N/A'}</td>
                      <td>
                        <span 
                          className="status-badge"
                          style={{ 
                            background: statusBadge.bg, 
                            color: statusBadge.color 
                          }}
                        >
                          <StatusIcon size={12} />
                          {statusBadge.label}
                        </span>
                      </td>
                      <td>
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </td>
                      <td>
                        <button 
                          className="view-btn"
                          onClick={() => navigate(`/owner/client/${user._id}`)}
                        >
                          <FaEye /> View
                        </button>
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;