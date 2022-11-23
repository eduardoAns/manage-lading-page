import React, { useState } from 'react'
import { Menu } from './Menu'

export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    
    <nav className="h-24 w-full px-14 lg:px-32 xl:px-44">
      {
          openMenu? <Menu/> : null
      }
      <section className=' h-full w-full flex justify-between items-center'>
        <a href='#' className=' cursor-pointer'>
          <img src='images/logo.svg' />
        </a>
        <article className='h-6 lg:hidden fixed right-16 top-9 cursor-pointer z-20'>
          {
            openMenu ?
              <img src='images/icon-close.svg' onClick={handleOpenMenu} className='h-full '/>
            :
              <img src='images/icon-hamburger.svg' onClick={handleOpenMenu} className='h-full'/>
          }
        </article>
        
        <article className=' hidden lg:flex lg:w-[70%] lg:justify-between xl:w-3/4 '>
            <div className='lg:w-4/5 xl:w-4/6 flex justify-evenly items-center '>
              <a href='#'>Pricing</a>
              <a href='#'>Product</a>
              <a href='#'>About Us</a>
              <a href='#'>Careers</a>
              <a href='#'>Community</a>
            </div>
            <div className='lg:w-1/5 xl:w-1/6 '>
              <button 
                className='h-12 w-full rounded-3xl text-sm font-bold text-center text-secondary-400 bg-primary-100'
              >
                Get Started
              </button>
            </div>
        </article>
      </section>
        
    </nav>
  )
}
