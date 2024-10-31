import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[500px] bg-[#dbc9f5]'>
      <div className='w-full flex flex-col justify-center px-20'>
        <h1 className='font-montserrat text-4xl font-extrabold'>Discover Your Signature Scent</h1>
        <h3 className='font-montserrat text-sm'>Unleash a fragrance as unique as you. Timeless, elegant, unforgettable</h3>
      </div>
      <div className='w-full'>
        <img src="/images/p1.png" alt="hero image" className='w-[400px]' />
      </div>
    </div>
  )
}

export default Hero
