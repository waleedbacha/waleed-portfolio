import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const ToastContext = React.createContext();

export const useToast = () => React.useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                marginTop: "10px",
                padding: "12px 20px",
                background: "var(--bg-primary)",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                borderLeft: `4px solid ${getToastColor(toast.type)}`,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                minWidth: "250px",
              }}
            >
              {getToastIcon(toast.type)}
              <span style={{ color: "var(--text-primary)" }}>
                {toast.message}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

const getToastColor = (type) => {
  switch (type) {
    case "success":
      return "#00cec9";
    case "error":
      return "#d63031";
    case "warning":
      return "#fdcb6e";
    default:
      return "#0984e3";
  }
};

const getToastIcon = (type) => {
  switch (type) {
    case "success":
      return <FaCheckCircle style={{ color: "#00cec9", fontSize: "20px" }} />;
    case "error":
      return (
        <FaExclamationCircle style={{ color: "#d63031", fontSize: "20px" }} />
      );
    case "warning":
      return (
        <FaExclamationTriangle style={{ color: "#fdcb6e", fontSize: "20px" }} />
      );
    default:
      return <FaInfoCircle style={{ color: "#0984e3", fontSize: "20px" }} />;
  }
};
