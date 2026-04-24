import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      
      {/* TEXT */}
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>
          Building Skills. Creating Careers.
        </h2>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join ShreeTech Labs and gain real-world experience through internships, live projects, and mentorship.
        </p>
      </div>

      {/* BUTTON */}
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <button
          type="button"
          onClick={() => window.open("https://forms.gle/vbWq1vgvvVi5JJMr5", "_blank")}
          className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:scale-105 transition duration-300"
        >
          Apply Now 🚀
        </button>
      </div>

    </section>
  )
}

export default CTA