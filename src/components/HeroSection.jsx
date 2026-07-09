import React, { useState, useEffect } from "react";
import heroBg from "../assets/hero-bg.jpg";
import deviceMockup from "../assets/device-mockup.png";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isTablet = windowWidth <= 992;
  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: isMobile ? "auto" : "480px",
        padding: isMobile ? "60px 20px" : "40px 20px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Dubai skyline"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(233, 229, 222, 0.79)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? "40px" : "20px",
        }}
      >
        {/* Left text */}
        <div
          style={{
            maxWidth: isMobile ? "100%" : "460px",
            padding: isMobile ? "0" : "0 32px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isSmallMobile
                ? "24px"
                : isMobile
                  ? "28px"
                  : isTablet
                    ? "30px"
                    : "31px",
              fontWeight: "800",
              color: "#111",
              marginBottom: "10px",
              lineHeight: "1.25",
              letterSpacing: "-0.3px",
              textShadow: "none",
            }}
          >
            Golden Residency Services
          </h1>

          <p
            style={{
              fontSize: isSmallMobile ? "14px" : "15px",
              color: "#222",
              marginBottom: "28px",
              lineHeight: "1.5",
            }}
          >
            for Federal Authority For Identity, Citizenship, Customs &amp;
            Port Security
          </p>

          <button
          onClick={() => navigate("/register")}
            style={{
              border: "1.5px solid #666",
              background: "rgba(248, 248, 248, 0.8)",
              color: "#111",
              padding: isSmallMobile ? "12px" : "9px 26px",
              borderRadius: "3px",
              fontWeight: "600",
              fontSize: "13px",
              cursor: "pointer",
              letterSpacing: "0.2px",
              width: isSmallMobile ? "100%" : "auto",
            }}
          >
            Click Here
          </button>
        </div>

        {/* Right image */}
        <div className="image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <img
            src={deviceMockup}
            alt="Golden Visa app on laptop and mobile"
            style={{
              width: "100%",
              maxWidth: isSmallMobile
                ? "250px"
                : isMobile
                  ? "320px"
                  : isTablet
                    ? "420px"
                    : "520px",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.12))",

            }}
          />
        </div>
      </div>
    </section>
  );
}