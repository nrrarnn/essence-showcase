import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-[500px] bg-[#aadcb6]'>
      <div className='w-full sm:w-[46%] flex flex-col justify-center px-20'>
        <h1 className='font-montserrat text-4xl font-bold'>Lorem, ipsum dolor.</h1>
        <h3 className='font-montserrat text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
      </div>
      <div className='w-full sm:w-[46%]'>
        <img src="/images/hero1.png" alt="hero image" className='w-[400px]' />
      </div>
    </div>
  )
}

export default Hero
