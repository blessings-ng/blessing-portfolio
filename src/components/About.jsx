import "../assets/css/about.css";
import capture from "../assets/images/about.jpeg"; // Ensure the path is correct

export default function About() {
  return (
    <main className="about-container">
      <div
        className="about-photo-container"
        
      >
        <img
          src={capture}
          alt="Blessings Igwe"
          className="about-photo"
          loading="lazy"
        />
      </div>

      <div
        className="about-text"
        
      >
        <h1 data-aos-delay="100">
          About Me
        </h1>

        <p className="about-intro" data-aos="fade-up" data-aos-delay="300">
          Hello! I’m <span className="highlight">Blessings Igwe</span>, a passionate frontend developer who loves transforming ideas into beautiful and functional web experiences. With a strong focus on accessibility, responsiveness, and pixel-perfect design, I craft websites that truly engage users.
        </p>

        <blockquote
          className="about-quote"
          
        >
          " Web-design is not just how it looks and feels. Design is how it works." <br />
          – Steve Jobs
        </blockquote>

        <h2 data-aos="fade-down" data-aos-delay="600">Skills & Expertise</h2>

        <ul className="about-skills" data-aos="fade-up" data-aos-delay="700">
          <li>HTML5 &amp; CSS3 – Semantic, Maintainable</li>
          <li>JavaScript ES6+ & React.js with Hooks</li>
          <li>Responsive & Mobile-first Web Design</li>
          <li>Cross-browser & Accessibility Standards</li>
          <li>Version Control with Git & GitHub</li>
          <li>API Integration & RESTful Web Services</li>
          <li>UI/UX collaboration — Figma to Code</li>
        </ul>

        <h2 data-aos="fade-down" data-aos-delay="800">What Drives Me</h2>

        <p data-aos="fade-up" data-aos-delay="900">
          I thrive on bringing creative vision to life with clean code and robust architecture. Every project is a new adventure, where I combine technical skills and artistic eye to build something meaningful.
        </p>
      </div>
    </main>
  );
}