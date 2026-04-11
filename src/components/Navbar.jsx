import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "glass py-2" : "py-3"}`}
      style={{
        backgroundColor: scrolled ? "var(--card-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand fw-bold fs-2 gradient-text"
          style={{ cursor: "pointer" }}
        >
          Portfolio.
        </Link>

        <button
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          style={{ border: "none", background: "transparent" }}
        >
          {isOpen ? (
            <FaTimes size={24} color="var(--text-primary)" />
          ) : (
            <FaBars size={24} color="var(--text-primary)" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link"
                  style={{
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                  }}
                  activeStyle={{ color: "var(--accent)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <button
                onClick={toggleTheme}
                className="btn"
                style={{
                  background: "var(--card-bg)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--border-color)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {theme === "light" ? (
                  <FaMoon size={20} color="var(--text-primary)" />
                ) : (
                  <FaSun size={20} color="var(--text-primary)" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
