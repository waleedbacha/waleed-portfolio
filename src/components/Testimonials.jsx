import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fiverr",
      avatar: "👩‍💼",
      rating: 5,
      text: "Absolutely phenomenal work! Waleed delivered our project ahead of schedule and exceeded all expectations. The attention to detail and code quality is outstanding.",
    },
    {
      name: "Michael Chen",
      role: "Fiverr",
      avatar: "👨‍💻",
      rating: 5,
      text: "Working with Waleed was a game-changer for our company. His technical expertise and creative problem-solving helped us launch successfully. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeHub",
      avatar: "👩‍🎨",
      rating: 5,
      text: "Waleed is not just a developer; he is a true partner in success. He understood our vision perfectly and brought it to life with amazing design and functionality.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            Client Testimonials
          </h2>
          <p className="lead" style={{ color: "var(--text-secondary)" }}>
            What my clients say about me
          </p>
        </motion.div>

        <div
          className="position-relative"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center p-5 glass"
            style={{ borderRadius: "30px" }}
          >
            <div
              className="mx-auto mb-4"
              style={{
                width: "80px",
                height: "80px",
                background: "var(--gradient)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
              }}
            >
              {testimonials[currentIndex].avatar}
            </div>
            <FaQuoteLeft
              style={{
                color: "var(--accent)",
                fontSize: "30px",
                opacity: 0.5,
                marginBottom: "20px",
              }}
            />
            <p
              className="lead mb-4"
              style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
            >
              "{testimonials[currentIndex].text}"
            </p>
            <div className="mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} style={{ color: "#ffc107", margin: "0 2px" }} />
              ))}
            </div>
            <h4 className="h4 mb-1" style={{ color: "var(--text-primary)" }}>
              {testimonials[currentIndex].name}
            </h4>
            <p style={{ color: "var(--accent)" }}>
              {testimonials[currentIndex].role}
            </p>
          </motion.div>

          {/* Left Arrow Button - FIXED */}
          <button
            onClick={prevSlide}
            className="position-absolute top-50 start-0 translate-middle-y btn"
            style={{
              background: "var(--card-bg)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <FaChevronLeft
              style={{ color: "var(--text-primary)", fontSize: "20px" }}
            />
          </button>

          {/* Right Arrow Button - FIXED */}
          <button
            onClick={nextSlide}
            className="position-absolute top-50 end-0 translate-middle-y btn"
            style={{
              background: "var(--card-bg)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border-color)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--card-bg)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <FaChevronRight
              style={{ color: "var(--text-primary)", fontSize: "20px" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
