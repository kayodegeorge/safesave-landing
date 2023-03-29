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
      <button className='mr-2' onClick={() => emblaApi?.scrollPrev}>
        previous
      </button>
      <button onClick={() => emblaApi?.scrollNext}>next</button>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-12 overflow-hidden'>
          <div className='h-96 flex-[0_0_100%] basis-full bg-red-900'></div>
          <div className='h-96 flex-[0_0_100%] basis-full bg-blue-900'></div>
          <div className='h-96 flex-[0_0_100%] basis-full bg-blue-900'></div>
          <div className='h-96 flex-[0_0_100%] basis-full bg-blue-900'></div>
        </div>
      </div>
    </div>
  )
}
