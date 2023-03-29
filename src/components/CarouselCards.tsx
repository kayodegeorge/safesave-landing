import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import RatingsStar from './RatingsStar'
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

export default function CarouselCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div>
      <h3 className='mt-10 text-center text-4xl font-bold'>
        What our customers are saying
      </h3>
      <div className='embla overflow-hidden' ref={emblaRef}>
        <section className='mx-auto max-w-7xl px-4 pt-16 pb-16 lg:px-8 lg:pb-60'>
          <div className='mt-12 flex items-center gap-5'>
            <button type='button' className='hidden'>
              <BsArrowLeftCircle size={30} />
            </button>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
              <div className='embla__container flex '>
                <div className='embla__slide'>
                  <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
                    <div>
                      <RatingsStar />
                    </div>

                    <div className='mt-6'>
                      <span className='font-semibold'>
                        SafeSave allowed me to buy my dream house
                      </span>

                      <p className='mt-2 text-safe-light'>
                        I was bad with my money management for a long time until
                        i opened a safesave account, my life has not remained
                        the same
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
                </div>
                <div className='embla__slide'>
                  <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
                    <RatingsStar />

                    <div className='mt-6'>
                      <span className='font-semibold'>
                        I finally started my business thanks to SafeSave
                      </span>

                      <p className='mt-2 text-safe-light'>
                        I have not been able to kickstart my business because i
                        have not seen where i can save my money, i stumbled upon
                        safesave and after a year i was able to start with their
                        wonderful interest rates.
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
                <div className='embla__slide'>
                  <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
                    <RatingsStar />

                    <div className='mt-6'>
                      <span className='font-semibold'>
                        I finally started my business thanks to SafeSave
                      </span>

                      <p className='mt-2 text-safe-light'>
                        I have not been able to kickstart my business because i
                        have not seen where i can save my money, i stumbled upon
                        safesave and after a year i was able to start with their
                        wonderful interest rates.
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
                <div className='embla__slide'>
                  <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
                    <RatingsStar />

                    <div className='mt-6'>
                      <span className='font-semibold'>
                        I finally started my business thanks to SafeSave
                      </span>

                      <p className='mt-2 text-safe-light'>
                        I have not been able to kickstart my business because i
                        have not seen where i can save my money, i stumbled upon
                        safesave and after a year i was able to start with their
                        wonderful interest rates.
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
