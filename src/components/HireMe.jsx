import React from "react";
import "../App.css";
import capture from "../assets/images/heroimage2.jpg"; 

export default function HireMe() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem",  }}>
      <div>
        <img src={capture} alt="Hire Me" width={'300px'} />
      </div>

      <section
        style={{
          maxWidth: "700px",
          margin: "3rem auto",
          padding: "0 1rem",
          fontFamily: "system-ui, sans-serif",
        color: "var(--text)",
      }}
    >
      <h1>Hire Me</h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
        I'm actively looking for exciting frontend development opportunities.
        With strong skills in React, modern JavaScript, and responsive design, I
       ’m eager to bring exceptional user experiences to your projects.
      </p>

      <a
        href="/public/Virtual Assistance CV-.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Blessing_Igwe_Resume.pdf"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.7rem 1.2rem",
          backgroundColor: "var(--accent)",
          color: "var(--btn-text)",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
          boxShadow: "var(--shadow)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-focus)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
      >
        View / Download Resume (PDF)
      </a>

      <div style={{ marginTop: "2rem" }}>
        <p>Connect with me on social media:</p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "1.2rem",
            fontSize: "1.5rem",
          }}
        >
          <li>
            <a
              href="https://github.com/blessings-ng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--text)" }}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/blessingigwe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--text)" }}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_iambclassic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{ color: "var(--text)" }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="mailto:blessmiss1@gmail.com"
              aria-label="Email"
              style={{ color: "var(--text)" }}
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
}