import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FlipCard3D from "./FlipCard3D";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const projects = [
    {
      title: "ShopIT - E-Commerce Platform",
      icon: "🛒",
      tech: "MERN Stack (React.js / Node.js / MongoDB)",
      description:
        "Full-featured e-commerce platform with shopping cart, secure payment integration, product management, and admin dashboard for complete store management.",
      github: "https://github.com/waleedbacha/shopIT",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "FamilyHub - Social Platform",
      icon: "👨‍👩‍👧‍👦",
      tech: "MERN Stack (React.js / Node.js / MongoDB)",
      description:
        "Complete family social platform allowing users to connect, share moments, create posts, like content, and manage friend requests with real-time updates.",
      github:
        "https://github.com/waleedbacha/FamilyHub-Full-Mern-Stack-Project",
      demo: "https://family-hub-iota.vercel.app/",
    },
    {
      title: "Durshawl Marquee",
      icon: "🏢",
      tech: "React.js / CSS Animations",
      description:
        "Professional marquee and animation showcase website for Durshawl, featuring smooth scrolling text, animated banners, and responsive design.",
      github: "https://github.com/waleedbacha/Durshawl-Marquee-ReacjJs",
      demo: "https://durshawl.pk/marquee",
    },
    {
      title: "MedLabs - Medical Lab System",
      icon: "🏥",
      tech: "PHP / MySQL / Bootstrap",
      description:
        "Complete medical laboratory management system for test reports, patient records, appointment scheduling, and result tracking with secure login.",
      github: "https://github.com/waleedbacha/MedLabs",
      demo: "https://medlabs-demo.com",
    },
    {
      title: "Digital Library System",
      icon: "📚",
      tech: "PHP / MySQL / Bootstrap / JavaScript",
      description:
        "Comprehensive digital library management system for book borrowing, returns, user management, cataloging, and search functionality.",
      github: "https://github.com/waleedbacha/Digital-Library",
      demo: "https://digital-library-demo.com",
    },
    {
      title: "Weather Forecast App",
      icon: "🌤️",
      tech: "JavaScript / OpenWeather API / HTML5/CSS3",
      description:
        "Real-time weather application providing 7-day forecast, current conditions, humidity, wind speed, and location-based weather detection.",
      github: "https://github.com/waleedbacha/weather-forecast",
      demo: "https://weather-app-demo.com",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3 gradient-text">My Projects</h2>
          <p className="lead" style={{ color: "var(--text-secondary)" }}>
            Some of my best work
          </p>
        </motion.div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-lg-4 col-md-6"
            >
              <FlipCard3D project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
