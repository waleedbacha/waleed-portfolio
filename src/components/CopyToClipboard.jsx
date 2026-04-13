import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const CopyToClipboard = ({ text, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div onClick={handleCopy} style={{ cursor: "pointer" }}>
        {children}
      </div>
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: -30, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--gradient)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "20px",
              fontSize: "12px",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FaCheck size={12} /> Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyToClipboard;
