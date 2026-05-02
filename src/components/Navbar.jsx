import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const handleClick = (nav) => {

    // ✅ WhatsApp
    if (nav.id === "contact") {
      window.open(nav.link, "_blank")
      return
    }

    // ✅ External link (like careers form)
    if (nav.link && nav.link.startsWith("http")) {
      window.open(nav.link, "_blank")
      return
    }

    // ✅ Route navigation (Team / Projects)
    if (nav.link && nav.link.startsWith("/")) {
      navigate(nav.link)
      setToggle(false)
      return
    }

    // ✅ Scroll sections (home page)
    if (nav.id) {
      const section = document.getElementById(nav.id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo} alt='logo' className='w-[250px] h-[180px]'/>

      {/* DESKTOP MENU */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            onClick={() => handleClick(nav)}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            {nav.title}
          </li>        
        ))}
      </ul>

      {/* MOBILE MENU */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                onClick={() => handleClick(nav)}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white`}
              >
                {nav.title}
              </li>        
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar