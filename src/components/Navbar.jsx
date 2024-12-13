import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='fixed top-0 w-full h-20 flex justify-center items-center pt-8 z-50'>
      <div className='h-2/3 w-80 px-7 py-7 flex justify-center items-center bg-[#f2f0f0] rounded-full shadow-sm border-2 border-gray-200'>
        <ul className='w-full h-full flex flex-row justify-center items-center text-center gap-4 text-lg'>
          <li className='w-1/3 text-center hover:underline underline-offset-4 hover:font-medium cursor-pointer'><Link to="/">Home</Link></li>
          <li className='w-1/3 hover:underline underline-offset-4 hover:font-medium cursor-pointer'><Link to="/weather">Weather</Link></li>
          <li className='w-1/3 hover:underline underline-offset-4 hover:font-medium cursor-pointer'><Link to="/privacy">Privacy</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar