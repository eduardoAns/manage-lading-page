import { useState } from 'react'
import { About } from './components/about/About'
import { Careers } from './components/careers/Careers'
import { Community } from './components/community/Community'
import { Header } from './components/header/Header'
import { Pricing } from './components/pricing/Pricing'
import { Product } from './components/product/Product'

function App() {
  return (
      
    <main className=" h-auto font-be-vietnam-pro overflow-x-hidden">
      <section className=''>
        <div className="bg-header">
          <Header />
          <Pricing />
        </div>
        <div className='bg-main'>
          <Product />
          <About />
        </div>
        <Careers />
        <Community />
      </section>
    </main>
  )
}

export default App
