import Image from 'next/image'
import React from 'react'
import { GiMoneyStack } from 'react-icons/gi'

export default function BenefitsCardStash() {
  return (
    <div className=''>
      <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
        <div>
          <GiMoneyStack size={20} />
        </div>

        <div className='mt-6'>
          <span className='font-semibold'>Stash</span>

          <p className='mt-2 text-safe-light'>
            SafeSave allows you stash your money, keeping it with us for years
            with premium invest rates. SafeSave let you earn competitive
            returns, better than your bank savings account, we believe you can
            do it!
          </p>
        </div>
      </div>
    </div>
  )
}
