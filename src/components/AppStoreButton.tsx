import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { AnimationWrapper } from 'react-hover-animation'

export default function AppStoreButton() {
  return (
    <div>
      <Link href={'/#'}>
        <Image
          alt='App store image'
          src={'/assets/appstore-dn.svg'}
          width={150}
          height={50}
        ></Image>
      </Link>
    </div>
  )
}
