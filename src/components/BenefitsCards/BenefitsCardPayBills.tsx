import Image from 'next/image'
import React from 'react'

export default function BenefitsCardPayBills() {
  return (
    <div className=''>
      <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
        <div>
          <Image
            alt='Academic caps'
            src={'/assets/academic-gray.svg'}
            width={38}
            height={38}
            className='mt-[2px]'
          ></Image>
        </div>

        <div className='mt-6'>
          <span className='font-semibold'>Pay Bills</span>

          <p className='mt-2 text-safe-light'>
            You can also pay your bills with SafeSave as we have features for
            Airtime Top-Up, Electricity bill, Cable bill etc. We are big on Ajo
            or Esusu's contribution too. Do you manage one or more we got you!
          </p>
        </div>
      </div>
    </div>
  )
}
