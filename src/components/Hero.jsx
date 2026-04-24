import styles from '../style'
import { robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      {/* LEFT SIDE */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            Innovation <br className='sm:block hidden' />{" "}
            <span className='text-gradient'>That Builds</span>{" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Real Skills.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We create powerful software solutions and provide real-world internship 
          experiences to help you grow in today’s tech industry.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        
        {/* 🔥 Inline Animation Style */}
        <style>
          {`
            @keyframes floatY {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

        {/* Animated Image */}
        <img
          src={robot}
          alt='robot'
          className='w-[100%] h-[100%] relative z-[5]'
          style={{
            animation: "floatY 5s ease-in-out infinite"
          }}
        />

        {/* Background Effects */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      {/* MOBILE BUTTON */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
  )
}

export default Hero