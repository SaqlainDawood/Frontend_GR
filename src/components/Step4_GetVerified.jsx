import React, { useState, useEffect } from 'react';
import { FaLock, FaCheckCircle } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
const Step4_GetVerified = ({ nextStep, prevStep, updateFormData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    updateFormData({ verified: true });
    nextStep();
  };

  return (
    <div className="get-verified">
      <div className="icon-large">
  <FaLock size={48} style={{color:'goldenrod'}} />
</div>
      <h2>Get Verified Now!</h2>
      <p className="subtitle">Start Your Clearance Application Process</p>

      <div style={{ 
        background: '#f8f9fa', 
        borderRadius: '12px', 
        padding: '30px',
        margin: '20px 0'
      }}>
        {isLoading ? (
          <div className="verification-loader">
            <div className="spinner"></div>
            <span style={{ fontSize: '16px', color: '#6c757d' }}>
              Initializing verification...
            </span>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
           <div style={{ marginBottom: '10px' }}>
  <FaCheckCircle size={48} color="#28a745" />
</div>
            <h3 style={{ color: '#28a745', marginBottom: '10px' }}>
              Verification Ready!
            </h3>
            <p style={{ color: '#6c757d' }}>
              Your identity has been confirmed. Proceed to complete your application.
            </p>
          </div>
        )}
      </div>

      <div style={{ 
        fontSize: '13px', 
        color: '#6c757d', 
        textAlign: 'center',
        padding: '15px',
        background: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        All financial institutions listed here comply with UAE regulations and are 
        under the supervision of the Central Bank of UAE.
      </div>

      <div className="button-group">
       <button className="btn btn-secondary" onClick={prevStep}>
  <IoArrowBack /> Back
</button>
        <button
  className="btn btn-primary"
  onClick={handleNext}
  disabled={isLoading}
>
  {isLoading ? (
    "Loading..."
  ) : (
    <>
      Continue <IoArrowForward />
    </>
  )}
</button>
      </div>
    </div>
  );
};

export default Step4_GetVerified;