import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between items-center py-6 px-32'>
      <div className='font-jost text-3xl font-bold'>
        SAGA
      </div>
      <ul className='flex gap-5 text-[15px]'>
        <li className='font-montserrat font-thin tracking-wider'>Home</li>
        <li className='font-montserrat font-thin tracking-wider'>Products</li>
        <li className='font-montserrat font-thin tracking-wider'>Contacts</li>
      </ul>
    </nav>
  )
}

export default Navbar
