import Link from 'next/link'
import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import RatingsStar from './RatingsStar'

export default function CarouselCards() {
  return (
    <div>
      <section className='px-16 pt-16 pb-60'>
        <h3 className='text-center text-4xl font-bold'>
          What our customers are saying
        </h3>

        <div className='mt-12 flex items-center gap-5'>
          <Link href={'/'}>
            <div>
              <BsArrowLeftCircle size={30} />
            </div>
          </Link>

          <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
            <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
              <div>
                <RatingsStar />
              </div>

              <div className='mt-6'>
                <span className='font-semibold'>
                  SafeSave allowed me to buy my dream house
                </span>

                <p className='mt-2 text-safe-light'>
                  I was bad with my money management for a long time until i
                  opened a safesave account, my life has not remained the same
                </p>

                <div className='mt-6 w-px bg-[#DFE4FF]'></div>

                <div className='flex items-center gap-4'>
                  <div className='h-11 w-11 rounded-full border-2 border-[#2948FF] bg-gray-400'></div>

                  <span>
                    Chinedu <br /> Ndunaka
                  </span>
                </div>
              </div>
            </div>

            <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
              <RatingsStar />

              <div className='mt-6'>
                <span className='font-semibold'>
                  I finally started my business thanks to SafeSave
                </span>

                <p className='mt-2 text-safe-light'>
                  I have not been able to kickstart my business because i have
                  not seen where i can save my money, i stumbled upon safesave
                  and after a year i was able to start with their wonderful
                  interest rates.
                </p>

                <div className='mt-6 w-px bg-[#DFE4FF]'></div>

                <div className='flex items-center gap-4'>
                  <div className='h-11 w-11 rounded-full border-2 border-[#2948FF] bg-gray-400'></div>

                  <span>
                    Ajanaku <br /> Robiat
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link href={'/'}>
            <div>
              <BsArrowRightCircle size={30} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
