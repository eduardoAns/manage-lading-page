import React from 'react'

export const Product = () => {
  return (
    <section id='product' className=" h-screen-5/4 w-full md:h-screen-3/4 md:px-20 lg:px-32 xl:px-44">
      <div className=' h-full w-full flex flex-col justify-center items-center gap-12  lg:flex-row  lg:items-start'>
        <article className='w-full flex flex-col  gap-4 px-12 lg:px-0'>
            <h1 className=' font-bold text-primary-200 text-3xl text-center lg:text-4xl xl:text-5xl lg:text-left'>
              What’s different about Manage?
            </h1>
            <p className=' text-secondary-100 text-center text-sm leading-7 lg:text-base lg:text-left lg:w-2/3 lg:leading-8'>
              Manage provides all the functionality your team needs, without 
              the complexity. Our software is tailor-made for modern digital 
              product teams. 
            </p> 
        </article>
        <article className='w-full pl-4 flex flex-col gap-8 '>
          <div className='flex flex-col gap-2'>
            <div 
              className="w-full flex flex-row rounded-l-2xl bg-[url('images/bg-tablet-pattern.svg')] bg-no-repeat bg-[length:1000px_1000px] lg:bg-none"
              style={{backgroundPositionY:'-40rem'}}
            >
              <p className='w-16 h-9 pt-2 rounded-3xl bg-primary-100 text-center text-secondary-400 font-bold text-sm'>
                01
              </p>
              <h1 className='text-left font-bold text-primary-200 pl-6 pt-1 '>
                Track company-wide progress
              </h1>
            </div>
            <p className=' text-secondary-100 text-sm text-left pr-8 leading-7 lg:text-base xl:pl-[88px]'>
              See how your day-to-day tasks fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className='flex flex-col gap-2'>
              <div 
                className="w-full flex flex-row rounded-l-2xl bg-[url('images/bg-tablet-pattern.svg')] bg-no-repeat bg-[length:1000px_1000px] lg:bg-none"
                style={{backgroundPositionY:'-40rem'}}
              >
                <p className='w-16 h-9 pt-2 rounded-3xl bg-primary-100 text-center text-secondary-400 font-bold text-sm'>02</p>
                <h1 className='text-left font-bold text-primary-200 pl-6 pt-1 bg'>
                  Advanced built-in reports
                </h1>
              </div>
              <p className=' text-secondary-100 text-sm text-left pr-8 leading-7 lg:text-base xl:pl-[88px]'>
                Set internal delivery estimates and track progress toward company 
                goals. Our customisable dashboard helps you build out the reports 
                you need to keep key stakeholders informed.
              </p>
          </div>
          <div className='flex flex-col gap-2'>
            <div 
              className="w-full flex flex-row rounded-l-2xl bg-[url('images/bg-tablet-pattern.svg')] bg-no-repeat bg-[length:1000px_1000px] lg:bg-none"
              style={{backgroundPositionY:'-40rem'}}
            >
              <p className='w-16 h-9 pt-2 rounded-3xl bg-primary-100 text-center text-secondary-400 font-bold text-sm'>03</p>
              <h1 className='text-left font-bold text-primary-200 pl-6 pt-1 bg'>
                Everything you need in one place
              </h1>
            </div>
            <p className=' text-secondary-100 text-sm text-left pr-8 leading-7 lg:text-base xl:pl-[88px]'>
              Stop jumping from one service to another to communicate, store files, 
              track tasks and share documents. Manage offers an all-in-one team 
              productivity solution.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
