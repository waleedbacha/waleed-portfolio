import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

const RotatingCube = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  // const skills = [
  //   { icon: <FaReact />, name: "React.js", color: "#61dafb", side: "front" },
  //   { icon: <FaNodeJs />, name: "Node.js", color: "#68a063", side: "back" },
  //   { icon: <FaDatabase />, name: "MongoDB", color: "#47a248", side: "right" },
  //   { icon: <FaPython />, name: "Express.js", color: "#3776ab", side: "left" },
  //   { icon: <FaAws />, name: "AWS", color: "#ff9900", side: "top" },
  //   { icon: <FaGitAlt />, name: "Git", color: "#f05032", side: "bottom" },
  // ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 0.5,
        y: prev.y + 0.5,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "350px",
        perspective: "800px",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <motion.div
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        style={{
          width: "180px",
          height: "180px",
          position: "relative",
          transformStyle: "preserve-3d",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            border: "2px solid var(--accent)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "translateZ(90px)",
            boxShadow: "0 0 15px rgba(108, 92, 231, 0.3)",
          }}
        >
          <div style={{ fontSize: "45px", color: "#61dafb" }}>
            <FaReact />
          </div>
          <h3 style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>
            React.js
          </h3>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            border: "2px solid var(--accent)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateY(180deg) translateZ(90px)",
            boxShadow: "0 0 15px rgba(108, 92, 231, 0.3)",
          }}
        >
          <div style={{ fontSize: "45px", color: "#68a063" }}>
            <FaNodeJs />
          </div>
          <h3 style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>
            Node.js
          </h3>
        </div>

        {/* Right */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            border: "2px solid var(--accent)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateY(90deg) translateZ(90px)",
            boxShadow: "0 0 15px rgba(108, 92, 231, 0.3)",
          }}
        >
          <div style={{ fontSize: "45px", color: "#47a248" }}>
            <FaDatabase />
          </div>
          <h3 style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>
            MongoDB
          </h3>
        </div>

        {/* Left */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            border: "2px solid var(--accent)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateY(-90deg) translateZ(90px)",
            boxShadow: "0 0 15px rgba(108, 92, 231, 0.3)",
          }}
        >
          <div style={{ fontSize: "45px", color: "#3776ab" }}>
            <FaPython />
          </div>
          <h3 style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>
            Python
          </h3>
        </div>

        {/* Top */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            border: "2px solid var(--accent)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateX(90deg) translateZ(90px)",
            boxShadow: "0 0 15px rgba(108, 92, 231, 0.3)",
          }}
        >
          <div style={{ fontSize: "45px", color: "#ff9900" }}>
            <FaAws />
          </div>
          <h3 style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>
            AWS
          </h3>
        </div>

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            border: "2px solid var(--accent)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateX(-90deg) translateZ(90px)",
            boxShadow: "0 0 15px rgba(108, 92, 231, 0.3)",
          }}
        >
          <div style={{ fontSize: "45px", color: "#f05032" }}>
            <FaGitAlt />
          </div>
          <h3 style={{ color: "white", marginTop: "10px", fontSize: "14px" }}>
            Git
          </h3>
        </div>
      </motion.div>

      {/* Instructions */}
      {/* <div
        style={{
          position: "absolute",
          bottom: "10px",
          textAlign: "center",
          fontSize: "11px",
          color: "var(--text-secondary)",
        }}
      >
        🖱️ Drag to rotate
      </div> */}
    </div>
  );
};

export default RotatingCube;
