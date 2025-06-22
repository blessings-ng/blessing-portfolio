import React from "react";
import "../assets/css/nav.css"

export const Navbar = () => {

  const [isNavOpen, setNavOpen] = React.useState(false);
  
    const toggleNav = () => setNavOpen((o) => !o);
    const closeNav = () => setNavOpen(false);

    React.useEffect(() => {
      const handleRouteChange = () => closeNav();
      window.addEventListener("popstate", handleRouteChange);
      return () => window.removeEventListener("popstate", handleRouteChange);
    }, []);
  return (
    <div>
        <nav className="main-nav" aria-label="Primary navigation">
          <div className="nav-container">
            <Link to="/" className="logo" onClick={closeNav}>
              IB_NGOZI
            </Link>

            <button
              className={`hamburger ${isNavOpen ? "open" : ""}`}
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isNavOpen}
              aria-controls="primary-navigation"
            >
              <span />
              <span />
              <span />
            </button>

            <ul
              id="primary-navigation"
              className={`nav-links ${isNavOpen ? "open" : ""}`}
              role="menu"
            >
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
                { to: "/hireMe", label: "Hire Me" },
              ].map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    role="menuitem"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                    onClick={closeNav}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

    </div>
  )
}
