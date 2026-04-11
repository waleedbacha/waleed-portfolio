import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaTrophy, FaRocket, FaHeart } from "react-icons/fa";

const AchievementBadges = () => {
  const { scrollYProgress } = useScroll();

  const badge1Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const badge2Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const badge3Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  const badges = [
    {
      icon: <FaCode />,
      title: "Code Master",
      description: "10,000+ lines of code",
      color: "#667eea",
    },
    {
      icon: <FaTrophy />,
      title: "Problem Solver",
      description: "500+ problems solved",
      color: "#f093fb",
    },
    {
      icon: <FaRocket />,
      title: "Innovation Leader",
      description: "5+ innovative projects",
      color: "#4facfe",
    },
    {
      icon: <FaHeart />,
      title: "Community Hero",
      description: "100+ contributions",
      color: "#43e97b",
    },
  ];

  const opacities = [
    badge1Opacity,
    badge2Opacity,
    badge3Opacity,
    badge3Opacity,
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
      }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          style={{ opacity: opacities[index] }}
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.1, x: -10 }}
          className="badge-item"
          onMouseEnter={(e) => {
            const tooltip = e.currentTarget.querySelector(".badge-tooltip");
            if (tooltip) tooltip.style.display = "block";
          }}
          onMouseLeave={(e) => {
            const tooltip = e.currentTarget.querySelector(".badge-tooltip");
            if (tooltip) tooltip.style.display = "none";
          }}
        >
          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: `linear-gradient(135deg, ${badge.color}, ${badge.color}dd)`,
              borderRadius: "50px",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ fontSize: "24px" }}>{badge.icon}</div>
            <div
              className="badge-tooltip"
              style={{
                display: "none",
                position: "absolute",
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
                padding: "8px 12px",
                borderRadius: "10px",
                whiteSpace: "nowrap",
                marginRight: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                fontSize: "12px",
              }}
            >
              <strong>{badge.title}</strong>
              <br />
              <small>{badge.description}</small>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementBadges;
