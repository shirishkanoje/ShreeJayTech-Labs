import React from 'react'

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      onClick={() => window.open("https://forms.gle/vbWq1vgvvVi5JJMr5", "_blank")}
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:scale-105 transition duration-300`}
    >
      Register Now 🚀
    </button>
  )
}

export default Button