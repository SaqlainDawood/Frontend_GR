import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMoneyBillWave, FaCheckCircle, FaBuilding } from 'react-icons/fa';
import './BankDetails.css';

const BankDetails = ({ user, expanded = false }) => {
  const bankDetails = user?.bankDetails || {};
  const cardDetails = user?.cardDetails || {};

  const bankFields = [
    { icon: FaBuilding, label: 'Bank Name', value: bankDetails.bankName || 'N/A' },
    { icon: FaMoneyBillWave, label: 'Account Count', value: `${bankDetails.accountCount || '0'} Account(s)` },
    { icon: FaCheckCircle, label: 'Loan Status', value: bankDetails.hasLoan || 'No' },
    { icon: FaUniversity, label: 'Verification Type', value: bankDetails.verificationType || 'Manual' },
  ];

  const cardFields = [
    { label: 'Card Number', value: cardDetails.cardNumber || 'N/A' },
    { label: 'Valid Through', value: cardDetails.validThrough || 'N/A' },
    { label: 'Balance', value: cardDetails.balance ? `AED ${cardDetails.balance}` : 'N/A' },
  ];

  return (
    <motion.div 
      className={`bank-details-section ${expanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <h3 className="section-title">Bank & Card Details</h3>
      
      <div className="bank-grid">
        <div className="bank-subsection">
          <h4 className="subsection-title">Bank Information</h4>
          <div className="bank-fields">
            {bankFields.map((field, index) => {
              const Icon = field.icon;
              return (
                <div key={index} className="bank-field">
                  <Icon className="bank-field-icon" />
                  <div>
                    <p className="bank-field-label">{field.label}</p>
                    <p className="bank-field-value">{field.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {cardDetails.cardNumber && (
          <div className="bank-subsection">
            <h4 className="subsection-title">Card Information</h4>
            <div className="bank-fields">
              {cardFields.map((field, index) => (
                <div key={index} className="bank-field">
                  <div>
                    <p className="bank-field-label">{field.label}</p>
                    <p className="bank-field-value">{field.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BankDetails;