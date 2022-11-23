import React, { FC } from 'react'
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import styles from './AboutSlideshow.module.css';

export const AboutSlideShow:FC = () => {
  return (
    <Slide
        easing="ease"
        duration={ 7000 }
        indicators
        
    >
        <div className={ styles['each-slide'] }>
            <div className='w-96 pt-36'>
                <article className=' w-96 h-64 flex flex-col items-center justify-evenly bg-secondary-400 lg:w-[32rem]'>
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
        </div>
        <div className={ styles['each-slide'] }>
            <div className='w-96 pt-36'>
                <article className=' w-96 h-64 flex flex-col items-center justify-evenly bg-secondary-400 lg:w-[32rem]'>
                    <div className='h-16 mt-[-3.5rem]'>
                    <img src='images/avatar-anisha.png' className='h-full'/>
                    </div>
                    <h1 className=' font-bold b'>Ali Bravo</h1>
                    <p className='text-center text-secondary-100 leading-8'>
                    “We have been able to cancel so many other subscriptions since using 
                    Manage. There is no more cross-channel confusion and everyone is much 
                    more focused.”
                    </p>
                </article>
            </div>
        </div>
        <div className={ styles['each-slide'] }>
            <div className='w-96 pt-36'>
                <article className=' w-96 h-64 flex flex-col items-center justify-evenly bg-secondary-400 lg:w-[32rem]'>
                    <div className='h-16 mt-[-3.5rem]'>
                    <img src='images/avatar-richard.png' className='h-full'/>
                    </div>
                    <h1 className=' font-bold b'>Ali Bravo</h1>
                    <p className='text-center text-secondary-100 leading-8'>
                    “We have been able to cancel so many other subscriptions since using 
                    Manage. There is no more cross-channel confusion and everyone is much 
                    more focused.”
                    </p>
                </article>
            </div>
        </div>

    </Slide>
  )
}
