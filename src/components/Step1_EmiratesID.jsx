import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { API_ENDPOINTS } from '../config/api';
import { FaShieldAlt, FaLock } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
const Step1_EmiratesID = ({ nextStep, updateFormData, formData, setUserId }) => {
  const [emiratesId, setEmiratesId] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');
  const api = useApi();

  const handleVerify = async () => {
    const cleanId = emiratesId.replace(/\s/g, '');
    
    if (!emiratesId || cleanId.length < 15) {
      setError('Please enter a valid Emirates ID');
      return;
    }

    setIsVerifying(true);
    setError('');

    try {
      // First verify the ID
      const response = await api.post(API_ENDPOINTS.VERIFY_EMIRATES, { emiratesId });
      
      if (response.data.success) {
        setIsVerified(true);
        
        // ✅ Save Step 1 data to database
        const saveResponse = await api.post(API_ENDPOINTS.SAVE_STEP, {
          step: 1,
          data: {
            number: emiratesId,
            verified: true
          },
          userId: null
        });
        
        console.log('✅ Step 1 saved:', saveResponse.data);
        
        if (saveResponse.data.userId) {
          setUserId(saveResponse.data.userId);
        }
        
        updateFormData({
          emiratesId: { number: emiratesId, verified: true }
        });
        
      } else {
        setError('Invalid Emirates ID. Please try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setError('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleNext = () => {
    if (isVerified) {
      nextStep();
    } else {
      setError('Please verify your Emirates ID first');
    }
  };

  return (
    <div className="step1-container">
      {/* Verification Icon */}
      <div className="verification-icon-wrapper">
        <div className="verification-ring">
          <div className="ring-glow"></div>
          <div className="ring-rotate">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
            <div className="dot dot-6"></div>
            <div className="dot dot-7"></div>
            <div className="dot dot-8"></div>
          </div>
          <div className="center-icon">
  <FaShieldAlt size={34} />
</div>
        </div>
      </div>

      <h1 className="step1-heading">Verify Emirates ID</h1>

      <div className="emirates-id-image-wrapper">
        <img 
          src="/emirates-id-card.png" 
          alt="Emirates ID Card" 
          className="emirates-id-image"
        />
      </div>

      <label className="step1-label">
        Emirates ID <span className="asterisk">*</span>
      </label>

      <input
        type="text"
        className={`step1-input ${error ? 'error' : ''}`}
        value={emiratesId}
        onChange={(e) => {
          setEmiratesId(e.target.value);
          setIsVerified(false);
          setError('');
        }}
        placeholder="784-xxxx-xxxx"
        disabled={isVerified}
      />
      {error && <div className="step1-error">{error}</div>}

      <button 
        className="step1-verify-btn"
        onClick={handleVerify}
        disabled={isVerifying || isVerified}
      >
        {isVerifying ? (
          <span className="btn-loader">
            <span className="btn-spinner"></span>
            Verifying...
          </span>
        ) : (
          'Verify Now'
        )}
      </button>

      <div className="step1-footer">
       <span className="footer-icon">
  <FaLock />
</span>
        Your information is secure and encrypted
      </div>

      {isVerified && (
        <button className="step1-next-btn" onClick={handleNext}>
         Next Step <IoArrowForward />
        </button>
      )}
    </div>
  );
};

export default Step1_EmiratesID;