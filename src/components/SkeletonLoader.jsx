import React from "react";
import { motion } from "framer-motion";

const SkeletonLoader = ({ type = "card" }) => {
  const shimmerVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: "100%",
      transition: { repeat: Infinity, duration: 1.5, ease: "linear" },
    },
  };

  if (type === "card") {
    return (
      <div
        className="skeleton-card"
        style={{
          padding: "20px",
          background: "var(--card-bg)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            background: "var(--border-color)",
            borderRadius: "10px",
            marginBottom: "15px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
        <div
          style={{
            width: "80%",
            height: "20px",
            background: "var(--border-color)",
            borderRadius: "5px",
            marginBottom: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
        <div
          style={{
            width: "60%",
            height: "15px",
            background: "var(--border-color)",
            borderRadius: "5px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "30px",
            background: "var(--border-color)",
            borderRadius: "5px",
            marginBottom: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
        <div
          style={{
            width: "90%",
            height: "20px",
            background: "var(--border-color)",
            borderRadius: "5px",
            marginBottom: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
        <div
          style={{
            width: "80%",
            height: "20px",
            background: "var(--border-color)",
            borderRadius: "5px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            variants={shimmerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default SkeletonLoader;
