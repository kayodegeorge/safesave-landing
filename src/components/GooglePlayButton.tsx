import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

export default function GooglePlayButton() {
  return (
    <div>
      <Link href={'/#'}>
        <AnimationWrapper
          animationConfig={{
            duration: 100,
          }}
        >
          <Image
            alt='App store image'
            src={'/assets/googleplay-dn.svg'}
            width={150}
            height={50}
          ></Image>
        </AnimationWrapper>
      </Link>
    </div>
  )
}
