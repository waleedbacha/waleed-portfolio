import React from "react";

const Footer = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center py-4"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container-custom">
        {children}
        <p className="mb-0" style={{ color: "var(--text-secondary)" }}>
          © {currentYear} Waleed Badshah. All rights reserved. | Built with
          React.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
