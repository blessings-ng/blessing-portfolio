import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/hero.css";
import BeauteCrateImg from "../assets/images/beaute-crate.png";
import CalculatorImg from "../assets/images/calculator.png";
import GuessingGameImg from "../assets/images/bclassic.png";
import NeonImg from "../assets/images/neon.png";
import BclaasicImg from "../assets/images/hero-banner-grid.png";
import EducationWebsiteImg from "../assets/images/heroimage2.jpg";

const reviews = [
  {
    id: 1,
    name: "Blessings Igwe",
    company: "B'classic Ltd.",
    text: "Blessings delivered an amazing frontend UI that exceeded expectations!",
  },
  {
    id: 2,
    name: "Nelson Igwe",
    company: "Neon Innovate Ltd.",
    text: "Great collaboration, fast and responsive results.",
  },
  {
    id: 3,
    name: "Miracle Igwe",
    company: "Design Studio",
    text: "Absolutely seamless integration and eye-catching design.",
  },
];

const logos = [
  {
    id: 1,
    alt: "Company 1 Logo",
    src: { BeauteCrateImg },
  },
  {
    id: 2,
    alt: "Company 2 Logo",
    src: {CalculatorImg},
  },
  {
    id: 3,
    alt: "Company 3 Logo",
    src: { GuessingGameImg },
  },
  {
    id: 4,
    alt: "Company 4 Logo",
    src: { NeonImg },
  },
];

export default function Hero() {
  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <>
      <header className="hero-100dvh">
        {/* <img src={EducationWebsiteImg} alt="hero-image" height={'dvh'}/>
        <div></div> */}
        <div className="hero-overlay" />
        <div className="hero-inner-content" tabIndex={-1}>
          <h1 className="hero-animated-h1">
            Hello, I'm <span className="highlight">Blessings Igwe</span>
          </h1>
          <p className="hero-subtitle">
            The Frontend Magic You've been looking for.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn primary-btn" aria-label="View Projects">
              View Projects
            </a>
            <a href="/hireMe" className="btn outline-btn" aria-label="Hire Me">
              Hire Me
            </a>
          </div>
        </div>
      </header>
      
      
      <section className="logos-section" aria-label="Companies I've Worked With" tabIndex={-1}>
        <h2>Companies I've Worked With</h2>
        <div className="logos-row" tabIndex={-1}>
          {logos.map(({ id, alt, }) => (
            <div key={id} className="logo-slide" tabIndex={0}>
              <img src={BclaasicImg} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section" >
        <h2>Client Reviews</h2>
        <Slider {...reviewSettings}>
          {reviews.map(({ id, name, company, text }) => (
            <blockquote key={id} className="review-card" tabIndex={0} aria-label={`Review from ${name} at ${company}`}>
              <p>"{text}"</p>
              <footer>— {name}, <em>{company}</em></footer>
            </blockquote>
          ))}
        </Slider>
      </section>

    

      <section className="skills-section"data-aos-delay="">
        <h2>My Skills</h2>
        <ul>
          <li>HTML &amp; CSS (Semantic and Accessible)</li>
          <li>JavaScript ES6+ & React.js with Hooks</li>
          <li>Responsive & Mobile-first Design</li>
          <li>Cross-browser Compatibility & Accessibility</li>
          <li>Version Control with Git & GitHub</li>
          <li>API Integration & RESTful Web Services</li>
          <li>UI/UX Collaboration — Figma to Code</li>
        </ul>
      </section>

      <section className="map-section" >
        <h2>Find Me Here</h2>
        
        <div className="map-container">
          <iframe
            title="Google Map location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253634.72047788062!2d3.115949102821706!3d6.641643831238413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90c7cc74c0b7%3A0x4dd12fb3e45324d5!2sAgege!5e0!3m2!1sen!2sng!4v1733300769552!5m2!1sen!2sng"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section>
      <div className="skills-section" >
        <div  style={{marginBottom:'30px'}}>
        <h2>For more information:</h2>
                <h4>Reach Us On:</h4>
                <p>Hotlines: 09132893843</p>
                <p>Email: blessmiss1@gmail.com</p>
                <p>Location: no 14 olumo stree, illo awella, tollgate</p>
        </div>

        <div>
        <a href="/projects" className="btn primary-btn" aria-label="View Projects">
              Contact Me
            </a>
        </div>
            </div>
      </section>
    </>
  );
}