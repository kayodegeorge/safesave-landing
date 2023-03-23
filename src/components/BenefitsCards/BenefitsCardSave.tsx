import Image from 'next/image'
import React from 'react'

export default function BenefitsCardSave() {
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
          <span className='font-semibold'>Save</span>

          <p className='mt-2 text-safe-light'>
            By automating your savings and the ability to save towards multiple
            goals, you are able to meet all your savings goals. Do More, be more
            with SafeSave, save towards that hair, Phone, rent, car, real estate
            etc.
          </p>
        </div>
      </div>
    </div>
  )
}
