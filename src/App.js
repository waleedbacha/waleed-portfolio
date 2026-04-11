import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

// New Feature Imports
import ParticleBackground from "./components/ParticleBackground";
import MagneticCursor from "./components/MagneticCursor";
import AchievementBadges from "./components/AchievementBadges";
import { ToastProvider } from "./components/AnimatedToast";
import ThreeGlobe from "./components/ThreeGlobe";
import BentoGrid from "./components/BentoGrid";
import LiveVisitorCounter from "./components/LiveVisitorCounter";
import CopyToClipboard from "./components/CopyToClipboard";
import { FaShareAlt } from "react-icons/fa";
import ExportPDF from "./components/ExportPDF"; // ADD THIS LINE
import Projects from "./components/Projects";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // FIX: Default to dark theme
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Handle share portfolio
  const handleSharePortfolio = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ToastProvider>
      {/* Interactive Backgrounds */}
      <ParticleBackground theme={theme} />

      {/* Custom Cursor Effects (only on desktop) */}
      <MagneticCursor />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Achievement Badges (right side sticky) */}
      <AchievementBadges />

      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <Home />

        {/* About Section with 3D Globe */}
        <About />
        <div className="container-custom my-5">
          <div className="text-center mb-4">
            <h2 className="gradient-text">Global Reach</h2>
            <p>Working with clients worldwide</p>
          </div>
          <ThreeGlobe />
        </div>

        {/* Bento Grid Stats Section */}
        <section
          className="section-padding"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="container-custom">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3 gradient-text">
                Stats That Matter
              </h2>
              <p className="lead" style={{ color: "var(--text-secondary)" }}>
                Numbers speak louder than words
              </p>
            </div>
            <BentoGrid />
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* projects Section */}
        <Projects />

        {/* Services Section */}
        <Services />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer with Live Visitor Counter, PDF Export and Share Button */}
      <Footer>
        <div
          className="footer-extras"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <LiveVisitorCounter />
            <ExportPDF /> {/* ADD THIS LINE */}
          </div>

          <CopyToClipboard text={window.location.href}>
            <button
              onClick={handleSharePortfolio}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "50px",
                color: "var(--text-primary)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <FaShareAlt />
              Share Portfolio
            </button>
          </CopyToClipboard>
        </div>
      </Footer>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Share Tooltip */}
      {showShareTooltip && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            background: "var(--gradient)",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            zIndex: 1000,
            animation: "fadeInUp 0.3s ease",
          }}
        >
          Link copied to clipboard! ✨
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ToastProvider>
  );
}

export default App;
