import Image from 'next/image'
import React from 'react'

export default function RatingsStar() {
  return (
    <div>
      <span>
        <Image
          alt='Stars ratings'
          src={'/assets/rating-stars.svg'}
          width={105}
          height={21}
          className='mt-[2px]'
        ></Image>
      </span>
    </div>
  )
}
