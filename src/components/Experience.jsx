import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences = [
    {
      role: "Application Developer",
      company: "Deister Software",
      duration: "Nov 2025 - Present",
      description:
        "Deister Software is a global leader in enterprise-level business solutions delivering modular, scalable ERP, CRM, WMS and low-code platforms.",
    },
    {
      role: "Full Stack Developer",
      company: "Code Alpha",
      duration: "March 2025 - Aug-2025",
      description:
        "Code Alpha is an IT services and consulting company where I workedas a MERN Stack Developer. My role focused on building efficient,scalable, and user-friendly web applications.",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techsol Labs",
      duration: "Aug 2024 - Jan 2025",
      description:
        "TechSol Labs is an IT servicing and consulting company where Icontribute as a Full-stack developer Intern. My role involves developing interactive, user-friendly web applications.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "University of Malakand",
      year: "2020 - 2024",
    },
    {
      degree: "HSSC Pre-Engineering",
      institution: "The Ghandhara College",
      year: "2018 - 2020",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">
            Experience & Education
          </h2>
          <p className="lead" style={{ color: "var(--text-secondary)" }}>
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="row g-5">
          <div className="col-lg-6">
            <h3 className="h3 mb-4 d-flex align-items-center gap-2">
              <FaBriefcase /> Work Experience
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : {}}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card mb-4 p-4 neumorph"
                >
                  <h4 className="h5 mb-1">{exp.role}</h4>
                  <p className="text-muted mb-2">
                    {exp.company} | {exp.duration}
                  </p>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-lg-6">
            <h3 className="h3 mb-4 d-flex align-items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : {}}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card mb-4 p-4 neumorph"
                >
                  <h4 className="h5 mb-1">{edu.degree}</h4>
                  <p className="text-muted">
                    {edu.institution} | {edu.year}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
