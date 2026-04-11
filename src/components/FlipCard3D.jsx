import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const FlipCard3D = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        perspective: "1000px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
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
          <div style={{ fontSize: "60px", marginBottom: "20px" }}>
            {project.icon}
          </div>
          <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
          <p style={{ fontSize: "14px", opacity: 0.9 }}>{project.tech}</p>
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              fontSize: "12px",
              opacity: 0.7,
            }}
          >
            Hover to flip →
          </div>
        </div>

        {/* Back Side */}
        <div
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
          <h3 style={{ marginBottom: "15px", color: "var(--accent)" }}>
            {project.title}
          </h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
            {project.description}
          </p>
          <div
            style={{ display: "flex", gap: "15px", justifyContent: "center" }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 15px",
                background: "var(--gradient)",
                color: "white",
                borderRadius: "25px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "14px",
              }}
            >
              <FaGithub /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "8px 15px",
                background: "transparent",
                border: "2px solid var(--accent)",
                color: "var(--text-primary)",
                borderRadius: "25px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "14px",
              }}
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard3D;
