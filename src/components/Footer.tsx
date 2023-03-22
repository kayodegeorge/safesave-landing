import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { TfiTwitterAlt } from 'react-icons/tfi'

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col items-center bg-[#0C0C0C] pt-24 pb-28 text-white'>
        <div className='mb-14'>
          <Image
            src='/assets/safesave-logo.svg'
            width={140}
            height={20}
            alt='Logo for footer'
          ></Image>
          <div className='mt-5 flex justify-between'>
            <FaFacebookF />
            <TfiTwitterAlt />
            <FaInstagram />
          </div>
        </div>
        <span className='text-sm font-semibold'>
          Astra Polaris Micro Finance Bank Ltd
        </span>
        <span className='mt-2 text-sm'>
          Astra Polaris Building, Safari Junction, Onikolobo, Abeokuta.
        </span>
      </footer>
    </div>
  )
}
