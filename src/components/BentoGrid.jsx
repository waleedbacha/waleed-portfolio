import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaUserTie,
  FaTrophy,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const BentoGrid = () => {
  const items = [
    {
      size: "large",
      title: "2+ Years",
      subtitle: "Experience",
      icon: <FaCode />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      size: "small",
      title: "30+",
      subtitle: "Projects Completed",
      icon: <FaRocket />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      size: "small",
      title: "15+",
      subtitle: "Happy Clients",
      icon: <FaUserTie />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      size: "wide",
      title: "Award Winning",
      subtitle: "Recognized for excellence",
      icon: <FaTrophy />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      size: "small",
      title: "100%",
      subtitle: "Client Satisfaction",
      icon: <FaHeart />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      size: "small",
      title: "4.9",
      subtitle: "Average Rating",
      icon: <FaStar />,
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    },
  ];

  return (
    <div className="bento-grid">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`bento-item ${item.size}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          style={{
            background: item.gradient,
            padding: "20px",
            borderRadius: "20px",
            color: "white",
            cursor: "pointer",
          }}
        >
          <div style={{ fontSize: "40px", marginBottom: "15px" }}>
            {item.icon}
          </div>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            {item.title}
          </h3>
          <p style={{ opacity: 0.9 }}>{item.subtitle}</p>
        </motion.div>
      ))}

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          grid-auto-rows: minmax(100px, auto);
        }

        .bento-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-item.wide {
          grid-column: span 2;
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bento-item.large,
          .bento-item.wide {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
};

export default BentoGrid;
