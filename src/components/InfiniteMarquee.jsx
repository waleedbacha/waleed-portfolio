import React from "react";
import { motion } from "framer-motion";

const InfiniteMarquee = ({ items, direction = "left", speed = 20 }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="marquee-container"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ display: "inline-block" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="marquee-item"
            style={{
              display: "inline-block",
              margin: "0 20px",
              padding: "8px 20px",
              background: "var(--card-bg)",
              borderRadius: "50px",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {item.icon && (
              <span style={{ marginRight: "8px" }}>{item.icon}</span>
            )}
            {item.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
