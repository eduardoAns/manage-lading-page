import React, { FC, MouseEventHandler, useState } from 'react'


export const Menu = () => {

  const handleCloseMenu = () => {
    console.log("cerrado")
  }

  return (
    <section 
      className='h-screen w-full fixed  mx-[-3.5rem] lg:hidden bg-gradient-to-t from-black/60 to-secondary-400/10 z-20' 
      onClick={handleCloseMenu}
    >
      <div className=' h-96 w-5/6 mt-24 bg-secondary-400 flex flex-col justify-evenly items-center text-lg text-primary-200 font-bold ml-12'>
        <a href="#pricing" className=' hover:text-indigo-900'> 
          Pricing 
        </a>
        <a href="#product" className=' hover:text-indigo-900'>
          Product
        </a>
        <a href="#about" className=' hover:text-indigo-900'>
          About Us
        </a>
        <a href="#careers" className=' hover:text-indigo-900'>
          Careers
        </a>
        <a href="#community" className=' hover:text-indigo-900'>
          Community
        </a>
      </div>
    </section>
  )
}
