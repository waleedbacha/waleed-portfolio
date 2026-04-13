import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Node.js",
        "React.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Problem Solver",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center section-padding"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="row align-items-center"
        >
          <motion.div variants={itemVariants} className="col-lg-6">
            <p className="text-accent mb-2" style={{ color: "var(--accent)" }}>
              Hello, I'm
            </p>
            <h1 className="fw-bold mb-3">
              <span style={{ fontSize: "3rem", display: "inline-block" }}>
                Waleed
              </span>{" "}
              <span style={{ fontSize: "3rem", display: "inline-block" }}>
                Badshah
              </span>
            </h1>{" "}
            <h2 className="h3 mb-4">
              <span ref={typedRef} style={{ color: "var(--accent)" }}></span>
            </h2>
            <p className="lead mb-4" style={{ color: "var(--text-secondary)" }}>
              Creating stunning digital experiences with modern web
              technologies. Specialized in building exceptional websites and
              applications.
            </p>
            <div className="d-flex gap-3 mb-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-primary-custom"
              >
                Hire Me
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-outline-custom"
              >
                View Projects
              </Link>
            </div>
            <div className="d-flex gap-3">
              <a href="https://github.com/waleedbacha" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/waleed-badshah-93b260247/"
                className="social-icon"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/waleedbadshah"
                className="social-icon"
              >
                <FaTwitter size={24} />
              </a>
              <a href="waleedbadshah2003@gmail.com" className="social-icon">
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-lg-6 text-center mt-5 mt-lg-0"
          >
            <div className="position-relative">
              <div
                className="rounded-circle overflow-hidden mx-auto"
                style={{
                  width: "350px",
                  height: "350px",
                  background: "var(--gradient)",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "var(--bg-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "100px",
                  }}
                >
                  👨‍💻
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="position-absolute bottom-0 end-0"
                style={{
                  background: "var(--gradient)",
                  borderRadius: "50%",
                  padding: "15px",
                }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .social-icon {
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Home;
