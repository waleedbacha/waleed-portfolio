import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "var(--gradient)",
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: 10000,
      }}
    />
  );
};

export default ScrollProgress;
