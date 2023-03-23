import Image from 'next/image'
import React from 'react'

export default function BenefitsCardInvest() {
  return (
    <div className=''>
      <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
        <div>
          <Image
            alt='Academic caps'
            src={'/assets/academic-blue.svg'}
            width={38}
            height={38}
            className='mt-[2px]'
          ></Image>
        </div>

        <div className='mt-6'>
          <span className='font-semibold'>Invest</span>

          <p className='mt-2 text-safe-light'>
            Based on any of the savings plans you choose, we offer interest
            rates from 10% to over 13% per annum on your savings. Do not worry
            about deposit fees with us there are not any!
          </p>
        </div>
      </div>
    </div>
  )
}
