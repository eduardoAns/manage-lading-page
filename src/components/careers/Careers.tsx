import React from 'react'

export const Careers = () => {
  return (
    <section id='careers' className=" h-screen-1/2 w-full bg-primary-100 lg:h-screen-1/4">
      <div className=" h-full w-full flex flex-col justify-center items-center px-16 bg-[url('images/bg-simplify-section-mobile.svg')] bg-[length:220px_400px] bg-no-repeat bg-blend-soft-light lg:flex-row lg:justify-around" 
          style={{ backgroundPositionX:'-7rem', backgroundPositionY:'-1rem'}}>
        <h2 className=' text-4xl text-secondary-400 font-medium text-center lg:text-left '>
          Simplify how your team works today.
        </h2>
        <button className='h-12 w-40 rounded-3xl text-sm mt-6 font-bold text-center text-primary-100 bg-secondary-400'>
              Get Started
        </button>
      </div>
    </section>
  )
}
