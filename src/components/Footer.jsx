import "../assets/css/footer.css"
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
        <div className="footer-container">
         <div className="footer-top">
         <div className="footer-brand">
        <h3>Blessing Igwe</h3>
        <p>
          Creative Frontend Developer passionate about building beautiful, fast, and user-focused web experiences.
        </p>
      </div>

      <div className="footer-links">

        <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
        </div>

      <div className="footer-legal">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Settings</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <h4>Connect</h4>
        <div className="social-icons">
          <a href="https://github.com/blessings-ng" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/blessingigwe" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/2349132893843" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com/blessingsigwe_" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/_iambclassic" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="mailto:blessmiss1@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Blessing Igwe. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
