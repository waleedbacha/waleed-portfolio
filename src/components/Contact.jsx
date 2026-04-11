import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your EmailJS credentials
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setSubmitStatus("error"))
      .finally(() => setIsSubmitting(false));
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/waleedbacha",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/waleed-badshah-93b260247/",
      label: "LinkedIn",
    },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    {
      icon: <FaEnvelope />,
      url: "waleedbadshah2003@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">Get In Touch</h2>
          <p className="lead" style={{ color: "var(--text-secondary)" }}>
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="row g-5">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-lg-5"
          >
            <div className="glass p-4" style={{ borderRadius: "20px" }}>
              <h3 className="h3 mb-4">Contact Info</h3>
              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div style={{ color: "var(--accent)" }}>
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0">waleedbadshah2003@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div style={{ color: "var(--accent)" }}>
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h6 className="mb-0">Phone</h6>
                    <p className="mb-0">+92 03459270471</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div style={{ color: "var(--accent)" }}>
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h6 className="mb-0">Location</h6>
                    <p className="mb-0">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h6 className="mb-3">Follow Me</h6>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--card-bg)",
                        borderRadius: "50%",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-4"
              style={{ borderRadius: "20px" }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary-custom w-100"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitStatus === "success" && (
                <div className="alert alert-success mt-3">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="alert alert-danger mt-3">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .social-link:hover {
          transform: translateY(-3px);
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
