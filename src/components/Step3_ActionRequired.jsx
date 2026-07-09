import React, { useState } from 'react';
import { FaExclamationTriangle, FaLock } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
const Step3_ActionRequired = ({ nextStep, prevStep, updateFormData }) => {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleNext = () => {
    if (acknowledged) {
      updateFormData({ actionRequired: true });
      nextStep();
    }
  };

  return (
    <div className="action-required">
      <div className="warning-banner">
        <span className="icon">
          <span className="icon">
  <FaExclamationTriangle />
</span>
        </span>
        <span className="text">
          Complete the account verification process. Failure to verify your information 
          may result in the temporary suspension or blocking of your UAE Pass.
        </span>
      </div>

      <h2 className="action-title">Action Required:</h2>

      <ul className="action-list">
        <li>
          <strong>1.</strong> Complete your UAE Pass verification immediately to avoid 
          disruptions in access to government services.
        </li>
        <li>
          <strong>2.</strong> Failure to verify your information may result in temporary 
          <span className="highlight"> suspension or blocking</span> of your UAE Pass account.
        </li>
        <li>
          <strong>3.</strong> Providing false or incomplete information may lead to further 
          investigation and could carry <strong>legal consequences</strong>.
        </li>
      </ul>

      <div className="get-verified" style={{ textAlign: 'center', margin: '25px 0' }}>
       <div className="icon-large" style={{ fontSize: '48px' }}>
  <FaLock size={48}
  style={{color:'goldenrod'}} />
</div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginTop: '10px' }}>
          Get Verified Now!
        </h2>
        <p style={{ color: '#6c757d' }}>Start Your Clearance Application Process</p>
      </div>

      <div className="understand-section">
        <label>
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
          />
          <span>
            I understand and acknowledge the importance of completing my verification process immediately.
          </span>
        </label>
      </div>

      <div style={{ 
        background: '#fff3cd', 
        padding: '12px 16px', 
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #ffc107'
      }}>
       <span
  style={{
    color: "#856404",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <FaExclamationTriangle />
  This is a mandatory step. Do not delay your verification.
</span>
      </div>

      <div className="button-group">
       <button className="btn btn-secondary" onClick={prevStep}>
  <IoArrowBack /> Back
</button>
        <button 
          className="btn btn-primary" 
          onClick={handleNext}
          disabled={!acknowledged}
        >
          Continue to Clearance Application <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Step3_ActionRequired;