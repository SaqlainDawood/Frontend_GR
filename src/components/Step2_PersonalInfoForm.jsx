import React, { useState } from "react";
import useApi from "../hooks/useApi";
import { API_ENDPOINTS } from "../config/api";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
const Step2_PersonalInfoForm = ({
  nextStep,
  prevStep,
  updateFormData,
  formData,
  userId,
}) => {
  const [formDataState, setFormDataState] = useState({
    fullName: formData?.personalInfo?.fullName || "",
    nationality: formData?.personalInfo?.nationality || "",
    phone: formData?.contactDetails?.phone || "",
    email: formData?.contactDetails?.email || "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const api = useApi();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s]{7,15}$/;

    if (!formDataState.fullName) newErrors.fullName = "Name is required";
    if (!formDataState.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formDataState.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formDataState.phone))
      newErrors.phone = "Invalid phone number";
    if (!formDataState.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formDataState.email))
      newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        console.log("📤 Saving Step 2 - Personal Info:", formDataState);
        console.log("📤 User ID:", userId);

        // ✅ Save Personal Info
        const personalResponse = await api.post(API_ENDPOINTS.SAVE_STEP, {
          step: 2,
          data: {
            fullName: formDataState.fullName,
            dateOfBirth: formData?.personalInfo?.dateOfBirth || "",
            nationality: formDataState.nationality,
            gender: formData?.personalInfo?.gender || "",
            maritalStatus: formData?.personalInfo?.maritalStatus || "",
          },
          userId: userId,
        });

        console.log("✅ Personal Info saved:", personalResponse.data);

        // ✅ Save Contact Details
        const contactResponse = await api.post(API_ENDPOINTS.SAVE_STEP, {
          step: 3,
          data: {
            email: formDataState.email,
            phone: formDataState.phone,
            address: formData?.contactDetails?.address || "",
            city: formData?.contactDetails?.city || "",
          },
          userId: userId,
        });

        console.log("✅ Contact Details saved:", contactResponse.data);

        if (personalResponse.data.success && contactResponse.data.success) {
          updateFormData({
            personalInfo: {
              fullName: formDataState.fullName,
              nationality: formDataState.nationality,
            },
            contactDetails: {
              email: formDataState.email,
              phone: formDataState.phone,
            },
          });
          nextStep();
        }
      } catch (error) {
        console.error("❌ Error saving data:", error);
        alert("Error saving data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  // Nationalities List
  const nationalities = [
    "Afghanistan",
    "Algeria",
    "Australia",
    "Bangladesh",
    "Brazil",
    "Canada",
    "China",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Italy",
    "Japan",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "Malaysia",
    "Morocco",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Poland",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Sweden",
    "Switzerland",
    "Syria",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Vietnam",
    "Yemen",
  ];

  return (
    <form onSubmit={handleSubmit} className="bank-details">
      <div
        style={{
          background: "#fff3cd",
          padding: "12px 16px",
          borderRadius: "8px",
          marginBottom: "20px",
          border: "1px solid #ffc107",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span style={{ fontSize: "20px" }}>
          <FaExclamationTriangle size={20} color="#856404" />
        </span>
        <span style={{ color: "#856404", fontSize: "14px" }}>
          Complete the account verification process. Failure to verify your
          information may result in the temporary suspension or blocking of your
          UAE Pass.
        </span>
      </div>

      <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "5px" }}>
        Get Verified Now!
      </h2>
      <p className="subtitle">Start Your Clearance Application Process</p>

      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          value={formDataState.fullName}
          onChange={(e) =>
            setFormDataState({ ...formDataState, fullName: e.target.value })
          }
          className={errors.fullName ? "error" : ""}
          placeholder="Enter Your Name"
        />
        {errors.fullName && <div className="error-text">{errors.fullName}</div>}
      </div>

      <div className="form-group">
        <label>Nationality *</label>
        <select
          value={formDataState.nationality}
          onChange={(e) =>
            setFormDataState({ ...formDataState, nationality: e.target.value })
          }
          className={errors.nationality ? "error" : ""}
        >
          <option value="">Select Country</option>
          {nationalities.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.nationality && (
          <div className="error-text">{errors.nationality}</div>
        )}
      </div>

      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          value={formDataState.phone}
          onChange={(e) =>
            setFormDataState({ ...formDataState, phone: e.target.value })
          }
          className={errors.phone ? "error" : ""}
          placeholder="Mobile Number"
        />
        {errors.phone && <div className="error-text">{errors.phone}</div>}
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          value={formDataState.email}
          onChange={(e) =>
            setFormDataState({ ...formDataState, email: e.target.value })
          }
          className={errors.email ? "error" : ""}
          placeholder="Email Address"
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
      </div>

      <div className="button-group">
        <button type="button" className="btn btn-secondary" onClick={prevStep}>
          <IoArrowBack /> Back
        </button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? (
            "Saving..."
          ) : (
            <>
              Start Verification <IoArrowForward />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default Step2_PersonalInfoForm;
