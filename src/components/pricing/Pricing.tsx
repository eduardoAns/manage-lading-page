import React from 'react'

export const Pricing = () => {
  return (
    <section id='pricing' className="h-screen w-full bg-pricing lg:px-32 xl:px-44 " >
      <div className='h-full w-full flex flex-col items-center gap-4 lg:flex-row-reverse  lg:justify-between'>
        <article className=' h-[25rem]  lg:w-auto  lg:h-[30rem]'>
          <img src='images/illustration-intro.svg' className='h-full'/>
        </article>
        
        <article className='w-3/4 flex flex-col items-center lg:w-[45%] lg:items-start lg:gap-4 '>
          <h1 className=' font-bold text-4xl text-center text-primary-200 lg:text-left xl:text-6xl'> 
            Bring everyone together to build better products.
          </h1>
          <p className='text-center text-secondary-100 text-base mt-6 px-2 lg:text-left lg:px-0 lg:pr-40 xl:text-lg'>
            Manage makes it simple for software teams to plan day-to-day 
            tasks while keeping the larger team goals in view.
          </p>
          <button className='h-12 w-40 rounded-3xl text-sm mt-6 font-bold text-center text-secondary-400 bg-primary-100'>
              Get Started
          </button>
        </article>
      </div>
    </section>
  )
}
