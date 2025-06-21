import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

const HomeLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout