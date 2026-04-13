import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import RotatingCube from "./RotatingCube";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: "React.js", percentage: 90, icon: <FaReact />, color: "#61dafb" },
    {
      name: "Node.js, Express.js",
      percentage: 85,
      icon: <FaNodeJs />,
      color: "#68a063",
    },
    {
      name: "MongoDB, MySQL, PostgreSQL",
      percentage: 95,
      icon: <FaDatabase />,
      color: "#e34c26",
    },
    {
      name: "Airtool",
      percentage: 88,
      icon: <FaNodeJs />,
      color: "#df6b0d",
    },
    {
      name: "UI/UX Design",
      percentage: 95,
      icon: <FaFigma />,
      color: "#f24e1e",
    },
    {
      name: "HTML5 & CSS3",
      percentage: 82,
      icon: <FaHtml5 />,
      color: "#47a248",
    },
    {
      name: "JavaScript",
      percentage: 88,
      icon: <FaNodeJs />,
      color: "#f7df1e",
    },
  ];

  return (
    <section
      id="about"
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
          <h2 className="display-4 fw-bold mb-3 gradient-text">About Me</h2>
          <p
            className="lead"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Get to know me better
          </p>
        </motion.div>

        {/* Three column layout */}
        <div className="row g-5">
          {/* Column 1: Who Am I? */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-lg-4"
          >
            <div className="h-100">
              <h3 className="h3 mb-3">Who Am I?</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                I'm a passionate Full-Stack Developer with over 2 years of
                experience in building web applications that solve real-world
                problems. My journey in tech started when I built my first
                website at age 19, and I've been hooked ever since.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                I specialize in React.js and Node.js, creating seamless user
                experiences and robust back-end systems. When I'm not coding,
                you'll find me contributing to open-source projects or mentoring
                aspiring developers.
              </p>
            </div>
          </motion.div>

          {/* Column 2: My Skills */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-4"
          >
            <div className="h-100">
              <h3 className="h3 mb-3">My Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: skill.color }} className="me-2">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                    <span style={{ color: "var(--accent)" }}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div
                    className="progress"
                    style={{
                      height: "8px",
                      borderRadius: "10px",
                      background: "var(--border-color)",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="progress-bar"
                      style={{
                        width: `${skill.percentage}%`,
                        background: `linear-gradient(90deg, ${skill.color}, var(--accent))`,
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: 3D Tech Stack Cube */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-lg-4"
          >
            <div className="h-100 text-center">
              <h3 className="h3 mb-3">Tech Stack</h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                Drag to explore my skills in 3D
              </p>
              <RotatingCube />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
