import Image from 'next/image'
import React from 'react'

export default function BenefitsCard() {
  return (
    <div className=''>
      <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
        <div>
          <Image
            alt='Academic caps'
            src={'/assets/cap-yellow.svg'}
            width={38}
            height={38}
            className='mt-[2px]'
          ></Image>
        </div>

        <div className='mt-6'>
          <span className='font-semibold'>Velit mollit exercitation</span>

          <p className='mt-2 text-safe-light'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  )
}
