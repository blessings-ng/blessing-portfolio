import "../assets/css/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-brand">IB-Ngozi</h2>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Blessing Igwe. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:blessmiss1@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
