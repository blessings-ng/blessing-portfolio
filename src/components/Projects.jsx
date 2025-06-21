import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/project.css";

import BeauteCrateImg from "../assets/images/beaute-crate.png";
import CalculatorImg from "../assets/images/calculator.png";
import GuessingGameImg from "../assets/images/bclassic.png";
import NeonImg from "../assets/images/neon.png";
import BclaasicImg from "../assets/images/hero-banner-grid.png";
import EducationWebsiteImg from "../assets/images/Capture.PNG";

const projects = [
  {
    title: "BeautéCrate",
    imgAlt: "BeautéCrate Project",
    imgSrc: BeauteCrateImg,
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    description:
      "An elegant beauty subscription platform emphasizing curated skincare products.",
  },
  {
    title: "Calculator",
    imgAlt: "Calculator App",
    imgSrc: CalculatorImg,
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A Calculator app that performs basic arithmetic operations with a user-friendly interface.",
  },
  {
    title: "Guessing Game",
    imgAlt: "Guessing Game Project",
    imgSrc: GuessingGameImg,
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A fun interactive game where users guess a randomly generated number, enhancing engagement through simple yet effective gameplay mechanics.",
  },
  {
    title: "NEON",
    imgAlt: "Neon Project",
    imgSrc: NeonImg,
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "A modern web application built with Next.js and styled with Tailwind CSS.",
  },
  {
    title: "B'CLAASIC",
    imgAlt: "B'CLAASIC E-commerce",
    imgSrc: BclaasicImg,
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    description:
      "An e-commerce platform showcasing a variety of products.",
  },
  {
    title: "Education Website",
    imgAlt: "Education Website Project Screenshot",
    imgSrc: EducationWebsiteImg,
    tech: ["React", "CSS", "Figma"],
    description:
      "A user-friendly education portal focused on interactive learning experiences.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-heading" tabIndex={-1}>
      <h2 id="projects-heading">Projects I Have Worked On</h2>
      <div className="cards">
        {projects.map(({ title, imgAlt, imgSrc, tech, description }) => (
          <article
            data-aos="fade-right"
            key={title}
            className="card"
            tabIndex={0}
            aria-label={`${title} project`}
          >
            <img src={imgSrc} alt={imgAlt} width="400" height="160" loading="lazy" />
            <div className="card-content">
              <h3>{title}</h3>
              <ul className="tech-list" aria-label="Tech stack">
                {tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}