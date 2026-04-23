import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { 
  Billing, 
  Business, 
  CardDeal, 
  CTA, 
  Footer,        // ✅ FIXED
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'

import Verify from "./components/Verify"
import Terms from "./components/Terms"     // 🔥 ADD THIS
import styles from './style'


// 👉 Home Page
const Home = () => {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </>
  )
}


// 👉 App with Routing
const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-primary w-full overflow-hidden'>

        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/terms" element={<Terms />} />   {/* 🔥 NEW */}
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App