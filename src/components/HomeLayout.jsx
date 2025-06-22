import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

const HomeLayout = () => {
  return (
    <div>
        <Navbar/>
        <main role="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hireMe" element={<HireMe />} />
            <Route
              path="*"
              element={
                <section style={{ padding: "6rem 1rem", textAlign: "center" }}>
                  <h2>404 - Page not found</h2>
                  <p>
                    Sorry, that page doesn’t exist.
                    <br />
                    <Link to="/">Go back home</Link>
                  </p>
                </section>
              }
            />
          </Routes>
        </main>
        <Outlet />
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default HomeLayout