import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Team from "./components/pages/Team";
import Projects from "./components/pages/Projects";

import { 
  About, 
  Career, 
  VerifyCard, 
  CTA, 
  Footer,        // ✅ FIXED
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'

import VerifyPage from "./components/pages/VerifyPage"
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
          <Career/>
          <About/>
          <VerifyCard/>
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
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/terms" element={<Terms />} />   
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} /> 
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App