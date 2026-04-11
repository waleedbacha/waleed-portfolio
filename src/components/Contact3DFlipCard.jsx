import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact3DFlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card"
      style={{
        width: "100%",
        height: "400px",
        perspective: "1000px",
        cursor: "pointer",
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="flip-card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className="flip-card-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "var(--gradient)",
            borderRadius: "20px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>📇</div>
          <h3 style={{ marginBottom: "10px" }}>Contact Me</h3>
          <p>Tap to flip and see my info</p>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ fontSize: "30px", marginTop: "20px" }}
          >
            👆
          </motion.div>
        </div>

        {/* Back Side */}
        <div
          className="flip-card-back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "var(--bg-primary)",
            borderRadius: "20px",
            padding: "30px",
            transform: "rotateY(180deg)",
            border: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ marginBottom: "20px", color: "var(--accent)" }}>
            Contact Info
          </h3>
          <div style={{ textAlign: "left", color: "var(--text-primary)" }}>
            <p
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaEnvelope style={{ color: "var(--accent)" }} /> alex@example.com
            </p>
            <p
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaPhone style={{ color: "var(--accent)" }} /> +1 (555) 123-4567
            </p>
            <p
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaMapMarkerAlt style={{ color: "var(--accent)" }} /> San
              Francisco, CA
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <FaGithub size={24} style={{ cursor: "pointer" }} />
            <FaLinkedin size={24} style={{ cursor: "pointer" }} />
            <FaTwitter size={24} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact3DFlipCard;
