import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import TiltCard from "./TiltCard"; // Import the TiltCard

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Building responsive, high-performance websites using modern technologies.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description:
        "Developing cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Efficient database architecture and optimization for scalability.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Deploying and managing applications on AWS, Azure, and GCP.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security",
      description: "Implementing best practices for secure web applications.",
    },
  ];

  return (
    <section
      id="services"
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
          <h2 className="display-4 fw-bold mb-3 gradient-text">My Services</h2>
          <p className="lead" style={{ color: "var(--text-secondary)" }}>
            What I can do for you
          </p>
        </motion.div>

        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-lg-4 col-md-6"
            >
              <TiltCard glareEnable={true} scale={1.05}>
                <div
                  className="card h-100 text-center p-4"
                  style={{ background: "var(--card-bg)", borderRadius: "20px" }}
                >
                  <div
                    className="icon-wrapper mb-3 mx-auto"
                    style={{
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "var(--gradient)",
                      borderRadius: "50%",
                      fontSize: "30px",
                      color: "white",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4 className="h4 mb-3">{service.title}</h4>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
