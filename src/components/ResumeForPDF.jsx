import React from "react";

const ResumeForPDF = React.forwardRef((props, ref) => {
  const personalInfo = {
    name: "Waleed Badshah",
    title: "Full Stack Developer",
    email: "waleedbadshah2003@gmail.com",
    phone: "+92 03459270471",
    location: "Islamabad, Pakistan",
    github: "https://github.com/waleedbacha",
    linkedin: "https://www.linkedin.com/in/waleed-badshah-93b260247/",
  };

  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "JavaScript",
    "HTML5/CSS3",
    "UI/UX Design",
    "AWS",
    "PHP",
    "Bootstrap",
    "Git",
    "REST APIs",
  ];

  const experiences = [
    {
      role: "Application Developer",
      company: "Deister Software",
      duration: "Nov 2025 - Present",
      description:
        "Developing enterprise-level business solutions including ERP, CRM, WMS and low-code platforms.",
    },
    {
      role: "Full Stack Developer",
      company: "Code Alpha",
      duration: "March 2025 - Aug 2025",
      description:
        "Built efficient, scalable, and user-friendly web applications using MERN stack.",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Techsol Labs",
      duration: "Aug 2024 - Jan 2025",
      description:
        "Developed interactive, user-friendly web applications as a full-stack intern.",
    },
  ];

  const education = [
    {
      degree: "Bachelor in Information Technology",
      institution: "University of Malakand",
      year: "2020 - 2024",
    },
    {
      degree: "HSSC in Pre-Engineering",
      institution: "The Ghandhara College",
      year: "2018 - 2020",
    },
  ];

  const projects = [
    {
      title: "ShopIT - E-Commerce Platform",
      tech: "MERN Stack (React.js / Node.js / MongoDB)",
      description:
        "Full-featured e-commerce platform with shopping cart, secure payment integration, product management, and admin dashboard for complete store management.",
      link: "https://github.com/waleedbacha/shopIT",
    },
    {
      title: "FamilyHub - Social Platform",
      tech: "MERN Stack (React.js / Node.js / MongoDB)",
      description:
        "Complete family social platform allowing users to connect, share moments, create posts, like content, and manage friend requests with real-time updates.",
      link: "https://github.com/waleedbacha/FamilyHub-Full-Mern-Stack-Project",
    },
    {
      title: "Durshawl Marquee",
      tech: "React.js / CSS Animations",
      description:
        "Professional marquee and animation showcase website for Durshawl, featuring smooth scrolling text, animated banners, and responsive design.",
      link: "https://github.com/waleedbacha/Durshawl-Marquee-ReacjJs",
    },
    {
      title: "MedLabs - Medical Lab System",
      tech: "PHP / MySQL / Bootstrap",
      description:
        "Complete medical laboratory management system for test reports, patient records, appointment scheduling, and result tracking with secure login.",
      link: "https://github.com/waleedbacha/MedLabs",
    },
    {
      title: "Digital Library System",
      tech: "PHP / MySQL / Bootstrap / JavaScript",
      description:
        "Comprehensive digital library management system for book borrowing, returns, user management, cataloging, and search functionality.",
      link: "https://github.com/waleedbacha/Digital-Library",
    },
    {
      title: "Weather Forecast App",
      tech: "JavaScript / OpenWeather API / HTML5/CSS3",
      description:
        "Real-time weather application providing 7-day forecast, current conditions, humidity, wind speed, and location-based weather detection.",
      link: "https://github.com/waleedbacha/weather-forecast",
    },
  ];

  return (
    <div
      ref={ref}
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          borderBottom: "2px solid #333",
          paddingBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "5px", color: "#000" }}>
          {personalInfo.name}
        </h1>
        <h2 style={{ fontSize: "20px", color: "#666", marginBottom: "15px" }}>
          {personalInfo.title}
        </h2>
        <div style={{ fontSize: "14px", color: "#666" }}>
          <p>
            {personalInfo.email} | {personalInfo.phone} |{" "}
            {personalInfo.location}
          </p>
          <p style={{ marginTop: "5px" }}>
            GitHub: github.com/waleedbacha | LinkedIn:
            linkedin.com/in/waleed-badshah
          </p>
        </div>
      </div>

      {/* Professional Summary */}
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Professional Summary
        </h3>
        <p style={{ fontSize: "14px" }}>
          Passionate Full-Stack Developer with 2+ years of experience building
          web applications that solve real-world problems. Specialized in
          React.js and Node.js, creating seamless user experiences and robust
          back-end systems. Experienced in both MERN and LAMP stacks with a
          strong focus on responsive design and performance optimization.
        </p>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
            marginBottom: "10px",
            color: "#000",
          }}
        >
          Technical Skills
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {skills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: "#f0f0f0",
                padding: "4px 12px",
                borderRadius: "15px",
                fontSize: "13px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#000",
          }}
        >
          Work Experience
        </h3>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <strong style={{ fontSize: "16px" }}>{exp.role}</strong>
              <span style={{ fontSize: "13px", color: "#666" }}>
                {exp.duration}
              </span>
            </div>
            <div
              style={{ fontSize: "14px", color: "#666", marginBottom: "5px" }}
            >
              {exp.company}
            </div>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* Projects Section - NEW */}
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#000",
          }}
        >
          Featured Projects
        </h3>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <strong style={{ fontSize: "15px" }}>{project.title}</strong>
            </div>
            <div
              style={{ fontSize: "12px", color: "#888", marginBottom: "5px" }}
            >
              {project.tech}
            </div>
            <p style={{ fontSize: "13px", marginTop: "5px" }}>
              {project.description}
            </p>
            {project.link && (
              <div
                style={{ fontSize: "11px", color: "#666", marginTop: "3px" }}
              >
                🔗 {project.link}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginBottom: "25px" }}>
        <h3
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "5px",
            marginBottom: "15px",
            color: "#000",
          }}
        >
          Education
        </h3>
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{edu.degree}</strong>
              <span style={{ fontSize: "13px", color: "#666" }}>
                {edu.year}
              </span>
            </div>
            <div style={{ fontSize: "14px", color: "#666" }}>
              {edu.institution}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "30px",
          paddingTop: "15px",
          borderTop: "1px solid #ddd",
          textAlign: "center",
          fontSize: "11px",
          color: "#999",
        }}
      >
        <p>Reference available upon request</p>
        <p>
          📧 {personalInfo.email} | 📞 {personalInfo.phone}
        </p>
      </div>
    </div>
  );
});

export default ResumeForPDF;
