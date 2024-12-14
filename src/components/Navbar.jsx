import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='fixed top-0 w-full h-20 flex justify-center items-center pt-8 z-50'>
      <div className='w-8/12 md:w-2/5 lg:w-1/4 px-4 md:px-5 lg:px-5 py-2 md:py-3 flex justify-center items-center bg-[#f2f0f0] rounded-full shadow-md border border-gray-300'>
        <ul className='w-full flex flex-row justify-between md:justify-center items-center text-center gap-4 text-sm md:text-lg lg:text-xl'>
          <li className='flex-1 md:w-1/3 text-center hover:underline underline-offset-4 hover:font-medium cursor-pointer'><Link to="/WeatherApp">Home</Link></li>
          <li className='flex-1 md:w-1/3 text-center hover:underline underline-offset-4 hover:font-medium cursor-pointer'><Link to="/weather">Weather</Link></li>
          <li className='flex-1 md:w-1/3 text-center hover:underline underline-offset-4 hover:font-medium cursor-pointer'><Link to="/privacy">Privacy</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar




