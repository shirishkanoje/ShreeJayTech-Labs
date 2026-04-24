import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  // 🔥 WhatsApp function
  const handleClick = (nav) => {
    if (nav.id === "clients") {
      window.open(
        "https://wa.me/917820986647?text=Hi%20I%20am%20interested%20in%20ShreeTech%20Labs%20internship",
        "_blank"
      );
    } else {
      document.getElementById(nav.id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      
      <img src={logo} alt='logo' className='w-[250px] h-[180px]'/>

      {/* DESKTOP MENU */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            onClick={() => handleClick(nav)}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
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

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                onClick={() => handleClick(nav)}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
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