import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const LiveVisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simulate fetching visitor count from API
    // Replace with actual API call
    const fetchVisitorCount = async () => {
      try {
        // const response = await fetch('https://your-api.com/visitors');
        // const data = await response.json();
        // setVisitors(data.count);

        // Simulated data
        const randomVisitors = Math.floor(Math.random() * 1000) + 500;
        setVisitors(randomVisitors);
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }
    };

    fetchVisitorCount();

    // Update every 30 seconds
    const interval = setInterval(() => {
      setIsAnimating(true);
      setVisitors((prev) => prev + Math.floor(Math.random() * 5));
      setTimeout(() => setIsAnimating(false), 500);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="visitor-counter"
      animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 16px",
        background: "var(--card-bg)",
        borderRadius: "50px",
        backdropFilter: "blur(10px)",
        border: "1px solid var(--border-color)",
      }}
    >
      <FaUsers style={{ color: "var(--accent)" }} />
      <span style={{ fontWeight: "bold" }}>{visitors.toLocaleString()}</span>
      <span style={{ fontSize: "12px", opacity: 0.7 }}>Live Visitors</span>
    </motion.div>
  );
};

export default LiveVisitorCounter;
