import React from 'react'
import { founder } from '../constants'
import styles from '../style'
import Founder from './Founder'
import ContactForm from './ContactForm'

const Testimonials = () => {
  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>
          Get In Touch With Us
        </h2>

        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Have questions or want to connect with us? Reach out and our team will get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className='flex md:flex-row flex-col w-full gap-10 mt-10 relative z-[1]'>

        {/* LEFT */}
        <div className='flex-1 flex flex-wrap gap-6 sm:justify-start justify-center'>
          {founder.map((card) => (
            <Founder key={card.id} {...card} />
          ))}
        </div>

        {/* RIGHT */}
        <div className='flex-1 flex justify-center items-center'>
          <ContactForm />
        </div>

      </div>

    </section>
  )
}

export default Testimonials