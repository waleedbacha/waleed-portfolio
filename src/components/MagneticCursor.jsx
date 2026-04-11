import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);

      // Detect hovered element type
      const target = e.target;
      if (target.closest("a") || target.closest("button")) {
        setCursorText("Click");
      } else if (target.closest(".social-icon")) {
        setCursorText("Follow");
      } else if (target.closest(".project-card")) {
        setCursorText("View");
      } else {
        setCursorText("");
      }
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="magnetic-cursor"
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          width: cursorText ? "70px" : "30px",
          height: cursorText ? "70px" : "30px",
          borderRadius: "50%",
          background: "var(--gradient)",
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "bold",
          color: "white",
          transition: "width 0.2s ease, height 0.2s ease",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      >
        {cursorText}
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="cursor-trail"
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0.15,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default MagneticCursor;
