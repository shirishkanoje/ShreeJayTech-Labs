import React from 'react'
import { bill } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      
      {/* IMAGE SIDE */}
      <div className={layout.sectionImgReverse}>
        
        {/* 🔥 Animation Style (inline) */}
        <style>
          {`
            @keyframes floatX {
              0% { transform: translateX(0px); }
              50% { transform: translateX(30px); }
              100% { transform: translateX(0px); }
            }
          `}
        </style>

        {/* Animated Image */}
        <img
          src={bill}
          alt='about'
          className='w-[100%] h-[100%] relative z-[5]'
          style={{
            animation: "floatX 6s ease-in-out infinite"
          }}
        />

        {/* Background effects */}
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>

      {/* TEXT SIDE */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          We Don’t Just Teach <br className='sm:block hidden'/> We Build Careers.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At ShreeTech Labs, we focus on building modern digital solutions while helping students gain real-world experience.
          Our mission is to bridge the gap between learning and industry by providing hands-on internships, 
          live projects, and expert guidance.
        </p>
      </div>  

    </section>
  )
}

export default Billing