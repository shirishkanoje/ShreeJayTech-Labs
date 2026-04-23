import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Instant Certificate Verification System.
          <br className='sm:block hidden'/>
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Ensure the authenticity of your internship certificate issued by ShreeTech Labs.
          Simply enter your certificate ID to verify details instantly and securely.
        </p>

        {/* ✅ Button directly here */}
        <button
          className="mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px]"
          onClick={() => window.location.href = "/verify"}
        >
          Verify Certificate
        </button>

      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal