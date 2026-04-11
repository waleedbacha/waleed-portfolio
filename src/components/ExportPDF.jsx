import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaSpinner } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import ResumeForPDF from "./ResumeForPDF";

const ExportPDF = () => {
  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = useRef();

  const exportToPDF = async () => {
    setIsExporting(true);

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `Waleed_Badshah_Resume_${new Date().toISOString().split("T")[0]}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        letterRendering: true,
        useCORS: true,
        logging: false,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    try {
      await html2pdf().set(opt).from(resumeRef.current).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      {/* Hidden resume component for PDF generation */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <ResumeForPDF ref={resumeRef} />
      </div>

      {/* Export Button */}
      <motion.button
        onClick={exportToPDF}
        disabled={isExporting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          background: "var(--gradient)",
          border: "none",
          borderRadius: "50px",
          color: "white",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "14px",
          transition: "all 0.3s ease",
          opacity: isExporting ? 0.7 : 1,
        }}
      >
        {isExporting ? (
          <>
            <FaSpinner className="spinner" />
            Generating Resume...
          </>
        ) : (
          <>
            <FaFilePdf />
            Download Resume
          </>
        )}
      </motion.button>
    </>
  );
};

export default ExportPDF;
