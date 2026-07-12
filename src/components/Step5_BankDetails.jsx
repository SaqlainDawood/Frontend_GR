import React, { useState, useRef, useEffect } from "react";
import useApi from "../hooks/useApi";
import { API_ENDPOINTS } from "../config/api";
import {
  FaChevronDown,
  FaSearch,
  FaCheck,
  FaPen,
  FaFileAlt,
} from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { IoArrowBack, IoArrowForward, IoClose } from "react-icons/io5";
// UAE Banks List
const UAE_BANKS = [
  { id: 1, name: "Abu Dhabi Commercial Bank (ADCB)" },
  { id: 2, name: "Abu Dhabi Islamic Bank (ADIB)" },
  { id: 3, name: "Ajman Bank" },
  { id: 4, name: "Al Hilal Bank" },
  { id: 5, name: "Arab Bank PLC" },
  { id: 6, name: "Bank of Baroda" },
  { id: 7, name: "Bank of Sharjah" },
  { id: 8, name: "Barclays Bank UAE" },
  { id: 9, name: "Citibank UAE" },
  { id: 10, name: "Commercial Bank of Dubai (CBD)" },
  { id: 11, name: "Dubai Islamic Bank (DIB)" },
  { id: 12, name: "Emirates Development Bank (EDB)" },
  { id: 13, name: "Emirates Islamic Bank" },
  { id: 14, name: "Emirates NBD" },
  { id: 15, name: "First Abu Dhabi Bank (FAB)" },
  { id: 16, name: "HSBC Bank Middle East" },
  { id: 17, name: "Mashreq Bank" },
  { id: 18, name: "National Bank of Fujairah" },
  { id: 19, name: "National Bank of Ras Al Khaimah (RAKBank)" },
  { id: 20, name: "National Bank of Umm Al Quwain" },
  { id: 21, name: "Rivoli Bank" },
  { id: 22, name: "Sharjah Islamic Bank" },
  { id: 23, name: "Standard Chartered Bank UAE" },
  { id: 24, name: "United Arab Bank (UAB)" },
  { id: 25, name: "WIO Bank" },
  { id: 26, name: "Zand Bank" },
  { id: 27, name: "Other" },
];

const Step5_BankDetails = ({
  nextStep,
  prevStep,
  updateFormData,
  formData,
  userId,
}) => {
  const [bankData, setBankData] = useState({
    accountCount: formData?.bankDetails?.accountCount || "1",
    hasLoan: formData?.bankDetails?.hasLoan || "No",
    bankName: formData?.bankDetails?.bankName || "",
    verificationType: formData?.bankDetails?.verificationType || "Manual",
    verificationDocument:formData?.bankDetails?.verificationDocument || ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBanks, setFilteredBanks] = useState(UAE_BANKS);
  const dropdownRef = useRef(null);
  const api = useApi();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBanks(UAE_BANKS);
    } else {
      const filtered = UAE_BANKS.filter((bank) =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredBanks(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!bankData.accountCount)
      newErrors.accountCount = "Please select number of accounts";
    if (!bankData.hasLoan) newErrors.hasLoan = "Please select loan status";
    if (!bankData.bankName)
      newErrors.bankName = "Please select or enter bank name";
    if (!bankData.verificationType)
      newErrors.verificationType = "Please select verification type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        console.log("📤 Saving Step 5 - Bank Details:", bankData);
        console.log("📤 User ID:", userId);

        // ✅ Send direct data, not nested
        const response = await api.post(API_ENDPOINTS.SAVE_STEP, {
          step: 5,
          data: bankData,
          userId: userId,
        });

        console.log("✅ Step 5 Response:", response.data);

        if (response.data.success) {
          updateFormData({ bankDetails: bankData });
          nextStep();
        } else {
          alert(response.data.message || "Error saving data");
        }
      } catch (error) {
        console.error("❌ Error saving bank details:", error);
        alert("Error saving data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };
const handleDocumentUpload = async (e) => {
  try {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:5000";

    const response = await axios.post(
      `${API_URL}/api/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success) {
      setBankData((prev) => ({
        ...prev,
        verificationDocument: response.data.filePath,
      }));

      toast.success("Document uploaded successfully");
    }
    console.log("Upload Response:", response.data);

setBankData(prev => {
  const updated = {
    ...prev,
    verificationDocument: response.data.filePath
  };

  console.log("Updated State:", updated);

  return updated;
});
    
  } catch (error) {
    console.error(error);
    toast.error("Document upload failed");
  }
};
  const handleBankSelect = (bankName) => {
    setBankData({ ...bankData, bankName: bankName });
    setIsDropdownOpen(false);
    setSearchTerm("");
    setErrors({ ...errors, bankName: "" });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setSearchTerm("");
      setFilteredBanks(UAE_BANKS);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bank-details">
      <h2>Bank Account Details</h2>
      <p className="subtitle">How many bank accounts do you have in UAE?</p>

      <div className="form-group">
        <label>How Many Bank Accounts do you have in UAE? *</label>
        <select
          value={bankData.accountCount}
          onChange={(e) =>
            setBankData({ ...bankData, accountCount: e.target.value })
          }
          className={errors.accountCount ? "error" : ""}
        >
          <option value="1">1 Account</option>
          <option value="2">2 Accounts</option>
          <option value="3">3 Accounts</option>
          <option value="4+">4+ Accounts</option>
        </select>
        {errors.accountCount && (
          <div className="error-text">{errors.accountCount}</div>
        )}
      </div>

      <div className="form-group">
        <label>Do you get Loan from any Bank? *</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={bankData.hasLoan === "Yes"}
              onChange={(e) =>
                setBankData({ ...bankData, hasLoan: e.target.value })
              }
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="No"
              checked={bankData.hasLoan === "No"}
              onChange={(e) =>
                setBankData({ ...bankData, hasLoan: e.target.value })
              }
            />
            No
          </label>
        </div>
        {errors.hasLoan && <div className="error-text">{errors.hasLoan}</div>}
      </div>

      <div className="form-group" ref={dropdownRef}>
        <label>Bank Name *</label>
        <div className="custom-dropdown">
          <div
            className={`dropdown-header ${errors.bankName ? "error" : ""}`}
            onClick={toggleDropdown}
          >
            <span
              className={
                bankData.bankName ? "selected-text" : "placeholder-text"
              }
            >
              {bankData.bankName || "Select or search your bank..."}
            </span>
            <span className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-search">
                <FaSearch className="search-icon" size={16} />
                <input
                  type="text"
                  placeholder="Search bank..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="dropdown-search-input"
                  autoFocus
                />
                {searchTerm && (
                  <button
                    type="button"
                    className="clear-search"
                    onClick={() => setSearchTerm("")}
                  >
                    <IoClose size={18} />
                  </button>
                )}
              </div>

              <div className="dropdown-options">
                {filteredBanks.length > 0 ? (
                  filteredBanks.map((bank) => (
                    <div
                      key={bank.id}
                      className={`dropdown-option ${bankData.bankName === bank.name ? "selected" : ""}`}
                      onClick={() => handleBankSelect(bank.name)}
                    >
                      <span>{bank.name}</span>
                      {bankData.bankName === bank.name && (
                        <FaCheck
                          className="check-icon"
                          size={16}
                          color="#22c55e"
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="dropdown-no-results">
                    <span>No banks found</span>
                    <button
                      type="button"
                      className="add-custom-bank"
                      onClick={() => {
                        setBankData({ ...bankData, bankName: searchTerm });
                        setIsDropdownOpen(false);
                        setSearchTerm("");
                      }}
                    >
                      Add "{searchTerm}" as custom bank
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {errors.bankName && <div className="error-text">{errors.bankName}</div>}
      </div>

      <div className="form-group">
        <label>Document verification Type? *</label>
        <div className="verification-type">
          <button
            type="button"
            className={bankData.verificationType === "Manual" ? "active" : ""}
            onClick={() =>
              setBankData({ ...bankData, verificationType: "Manual" })
            }
          >
            <>
              <FaPen /> Manual verification
            </>{" "}
          </button>
          <button
            type="button"
            className={bankData.verificationType === "Scan" ? "active" : ""}
            onClick={() =>
              setBankData({ ...bankData, verificationType: "Scan" })
            }
          >
            <>
              <FaFileAlt /> Scan Documents
            </>{" "}
           
          </button>
          {bankData.verificationType === "Scan" && (
  <div className="form-group">
    <label>Upload Verification Document *</label>

    <input
      type="file"
      accept=".jpg,.jpeg,.png,.pdf"
      onChange={handleDocumentUpload}
    />

    {bankData.verificationDocument && (
      <p
        style={{
          color: "green",
          marginTop: "8px",
          fontSize: "14px",
        }}
      >
        ✅ Document uploaded successfully
      </p>
    )}
  </div>
)}
        </div>
        {errors.verificationType && (
          <div className="error-text">{errors.verificationType}</div>
        )}
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#6c757d",
          textAlign: "center",
          padding: "12px",
          background: "#f8f9fa",
          borderRadius: "8px",
          margin: "15px 0",
        }}
      >
        All financial institutions listed here comply with UAE regulations and
        are under the supervision of the Central Bank of UAE.
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
              Verify Finance <IoArrowForward />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default Step5_BankDetails;
