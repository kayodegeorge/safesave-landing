import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      <nav>
        <div className='flex justify-between p-3'>
          <Image
            src='/assets/safesave-logo.svg'
            width={120}
            height={100}
            alt='Safesave logo'
          ></Image>
          <button className='text-white bg-[#3770C1] p-3 font-medium py-3 px-2]'>
            Download app
          </button>
        </div>
      </nav>
    </div>
  )
}
