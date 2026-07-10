import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFilePdf, FaFileImage, FaFileAlt, 
  FaDownload, FaEye, FaCheckCircle,
  FaPassport, FaIdCard, FaUser
} from 'react-icons/fa';
import './DocumentsSection.css';

const DocumentsSection = ({ user, expanded = false }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const documents = [
    { 
      id: 1, 
      name: 'Passport Copy',
      icon: FaPassport,
      file: user?.documents?.passportCopy || null,
      uploaded: !!user?.documents?.passportCopy,
      color: '#667eea'
    },
    { 
      id: 2, 
      name: 'Emirates ID',
      icon: FaIdCard,
      file: user?.emiratesId?.image || null,
      uploaded: !!user?.emiratesId?.image,
      color: '#764ba2'
    },
    { 
      id: 3, 
      name: 'Profile Photo',
      icon: FaUser,
      file: user?.documents?.photo || null,
      uploaded: !!user?.documents?.photo,
      color: '#4facfe'
    },
    { 
      id: 4, 
      name: 'Supporting Document',
      icon: FaFileAlt,
      file: user?.documents?.additionalDoc || null,
      uploaded: !!user?.documents?.additionalDoc,
      color: '#f093fb'
    },
  ];

  const handlePreview = (file) => {
    if (file) {
      setPreviewImage(file);
    }
  };

  return (
    <motion.div 
      className={`documents-section ${expanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h3 className="section-title">Uploaded Documents</h3>
      
      <div className="documents-grid">
        {documents.map((doc, index) => {
          const Icon = doc.icon;
          return (
            <motion.div
              key={doc.id}
              className={`document-card ${doc.uploaded ? 'uploaded' : 'missing'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="document-icon" style={{ background: `${doc.color}15`, color: doc.color }}>
                <Icon />
              </div>
              <div className="document-info">
                <p className="document-name">{doc.name}</p>
                <p className="document-status">
                  {doc.uploaded ? (
                    <span className="status-uploaded">
                      <FaCheckCircle /> Uploaded
                    </span>
                  ) : (
                    <span className="status-missing">Not Uploaded</span>
                  )}
                </p>
              </div>
              {doc.uploaded && doc.file && (
                <div className="document-actions">
                  <button 
                    className="doc-action-btn"
                    onClick={() => handlePreview(doc.file)}
                    title="Preview"
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="doc-action-btn"
                    onClick={() => window.open(doc.file, '_blank')}
                    title="Download"
                  >
                    <FaDownload />
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="preview-modal" onClick={() => setPreviewImage(null)}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="preview-close" onClick={() => setPreviewImage(null)}>×</button>
            <img src={previewImage} alt="Document Preview" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DocumentsSection;