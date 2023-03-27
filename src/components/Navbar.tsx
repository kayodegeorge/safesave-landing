import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=''>
      <nav>
        <div className='flex justify-between mx-auto max-w-7xl px-4 lg:px-8'>
          <Link href={'/'}>
            <Image
              src='/assets/safesave-logo.svg'
              width={120}
              height={100}
              alt='Safesave logo'
            ></Image>
          </Link>
          <div className='mt-12'>
            <Link
              href={'/#'}
              className='text-white bg-safe-blue font-medium py-3 px-6 rounded-md hover:bg-safe-orange hover:delay-100'
            >
              Download app
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
