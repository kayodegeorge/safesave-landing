import Image from 'next/image'
import React from 'react'
import { FcMoneyTransfer } from 'react-icons/fc'
export default function BenefitsCardSave() {
  return (
    <div className=''>
      <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
        <div>
          <FcMoneyTransfer size={20} />
        </div>

        <div className='mt-6'>
          <span className='font-semibold'>Save</span>

          <p className='mt-2 text-safe-light'>
            By automating your savings and the ability to save towards multiple
            goals, you are able to meet all your goals. Just like its name,
            safesave and do not worry about the rainy day.
          </p>
        </div>
      </div>
    </div>
  )
}
