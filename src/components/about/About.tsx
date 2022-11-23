import React from 'react'
import { AboutSlideShow } from './AboutSlideShow'

export const About = () => {
  return (
    <section id='about' className="h-screen w-full lg:h-screen-3/4">
      <div className=' h-full w-full flex flex-col justify-around items-center px-6 lg:justify-start lg:gap-16'>
        <h1 className=' text-primary-200 text-3xl font-bold '>
          What they’ve said
        </h1>
        <div className='lg:hidden w-96 h-72 mt-[-10rem] '>
          <AboutSlideShow />
        </div>
        <div className=' gap-4 hidden lg:flex'>
          <article className=' w-80 h-64 flex flex-col items-center justify-evenly bg-secondary-400 lg:w-[32rem]'>
            <div className='h-16 mt-[-3.5rem]'>
              <img src='images/avatar-ali.png' className='h-full'/>
            </div>
            <h1 className=' font-bold b'>Ali Bravo</h1>
            <p className='text-center text-secondary-100 leading-8'>
              “We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.”
            </p>
          </article>
          <article className='hidden w-80 h-64 lg:flex flex-col items-center justify-evenly bg-secondary-400 lg:w-[32rem]'>
            <div className='h-16 mt-[-3.5rem]'>
              <img src='images/avatar-ali.png' className='h-full'/>
            </div>
            <h1 className=' font-bold b'>Ali Bravo</h1>
            <p className='text-center text-secondary-100 leading-8'>
              “We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.”
            </p>
          </article>
          <article className='hidden w-80 h-64 xl:flex flex-col items-center justify-evenly bg-secondary-400 lg:w-[32rem]'>
            <div className='h-16 mt-[-3.5rem]'>
              <img src='images/avatar-ali.png' className='h-full'/>
            </div>
            <h1 className=' font-bold b'>Ali Bravo</h1>
            <p className='text-center text-secondary-100 leading-8'>
              “We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.”
            </p>
          </article>
        </div>
        <button className='h-12 w-40 rounded-3xl text-sm mt-6 font-bold text-center text-secondary-400 bg-primary-100 lg:mt-0'>
              Get Started
        </button>
      </div>
    </section>
  )
}
