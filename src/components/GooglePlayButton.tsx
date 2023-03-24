import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GooglePlayButton() {
  return (
    <div>
      <Link href={'/#'}>
        <Image
          alt='App store image'
          src={'/assets/googleplay-dn.svg'}
          width={150}
          height={50}
        ></Image>
      </Link>
    </div>
  )
}
