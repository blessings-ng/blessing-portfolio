import "../assets/css/nav.css"

export const Navbar = () => {
  return (
    <div>
        <nav className="main-nav" aria-label="Primary navigation">
        <ul>
          <li>
            <NavLink to="/" end activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeclassname="active">
              Projects
            </NavLink>
              </li>
            <li>
            <NavLink to="/homelayout" activeclassname="active">
              HHome
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/hireMe" activeclassname="active">
              HireMe
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
