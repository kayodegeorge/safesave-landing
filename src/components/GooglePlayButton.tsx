import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GooglePlayButton() {
  return (
    <div>
      <Link
        href={
          '/https://play.google.com/store/apps/details?id=com.safesave&hl=en'
        }
      >
        <Image
          alt='Google play store image'
          src={'/assets/googleplay-dn.svg'}
          width={150}
          height={50}
        ></Image>
      </Link>
    </div>
  )
}
