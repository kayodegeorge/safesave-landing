import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      <nav>
        <div className='flex justify-between mx-auto max-w-7xl shadow-sm px-4 lg:px-8'>
          <Image
            src='/assets/safesave-logo.svg'
            width={120}
            height={100}
            alt='Safesave logo'
          ></Image>
          <div className='mt-12'>
            <Link
              href={'/#'}
              className='text-white bg-safe-blue font-medium py-3 px-6 rounded-md'
            >
              Download app
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
