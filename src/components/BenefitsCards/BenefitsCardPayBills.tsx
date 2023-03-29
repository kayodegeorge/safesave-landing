import Image from 'next/image'
import React from 'react'

import {RiBillFill} from 'react-icons/ri'
export default function BenefitsCardPayBills() {
  return (
    <div className=''>
      <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
        <div>
         <RiBillFill size={20}/>
        </div>

        <div className='mt-6'>
          <span className='font-semibold'>Pay Bills</span>

          <p className='mt-2 text-safe-light'>
            You can also pay your bills with SafeSave as we have features for
            Airtime Top-Up, Electricity bill, Cable bill etc. We are big on Ajo
            or Esusus contribution too. Do you manage one or more we got you!
          </p>
        </div>
      </div>
    </div>
  )
}
