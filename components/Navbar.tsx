import React from 'react'
import  bell  from '../public/Images/bell.png'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
const navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-2 bg-white border-b border-gray-900 dark:border-orange-500 dark:bg-gray-900">
      {/* Logo and title */}
      <div className="flex  items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-md" />
        <div className='flex flex-col'>
        <h1 className="text-lg text-orange-500 font-semibold">ORBITPLUG</h1>
        <span className="text-gray-300">Admin Panel</span>
        </div>
      </div>

      {/* Search input */}
      <div className="flex-1 max-w-sm mx-4">
        <input
          type="text"
          placeholder="Input receipt number"
          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className='text-black dark:text-orange-400'>
        <ThemeToggle />
      </div>
      {/* Notification and Add Report button */}
      <div className="flex items-center space-x-4">
        <Image src={bell} alt='bellicon' width={32} height={32}/>
        <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-green-600">
          + Add Report
        </button>
      </div>
    </div>
    </div>
  )
}

export default navbar
