import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { TfiTwitterAlt } from 'react-icons/tfi'

export default function Footer() {
  return (
    <footer>
      {/* <footer className='flex flex-col items-center bg-[#0C0C0C] pt-24 pb-28 text-white'>
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
      </footer> */}
      <div className='px-4 py-8 lg:flex lg:py-16 lg:px-8 bg-[#0C0C0C]'>
        <div className='lg:basis-1/4'>
          {' '}
          <Image
            src='/assets/safesave-logo.svg'
            width={100}
            height={100}
            alt='Safesave logo'
          ></Image>
          <Image
            src='/assets/astra-logo.svg'
            width={150}
            height={150}
            alt='Safesave logo'
          ></Image>
        </div>
        <div className='mt-4 flex flex-col gap-4 lg:mt-0 lg:basis-2/4 lg:flex-row text-gray-300'>
          <div className='flex-1'>
            <p className='mb-2 font-bold '>Products</p>
            <Link href='#' className='block'>
              Invest
            </Link>
            <Link href='#' className='block'>
              Save
            </Link>
            <Link href='#' className='block'>
              Target Savings
            </Link>
            <Link href='#' className='block'>
              Pay Bills
            </Link>
          </div>
          <div className='flex-1 lg:pl-4'>
            <p className='mb-2 font-bold'>Company</p>
            <Link href='#' className='block'>
              About
            </Link>
            <Link href='#' className='block'>
              FAQs
            </Link>
          </div>
          <div className='flex-1 lg:pl-4'>
            <p className='mb-2 font-bold'>Legal</p>

            <Link href='#' className='block'>
              Privacy
            </Link>
            <Link href='#' className='block'>
              Security
            </Link>
          </div>
        </div>
        <div className='mt-4 lg:mt-0 lg:basis-1/4 text-gray-300'>
          <div className='mb-2 flex gap-4'>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <TfiTwitterAlt />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
          <p className='mt-4'>
            Astra Polaris Building, Safari Junction, Onikolobo, Abeokuta.
          </p>
          <a href='hello@safesave.money' className='mt-4 block '>
            hello@safesave.money
          </a>
          <a href='tel:+234700933933933' className='mt-4 block'>
            +234 8100000100
          </a>
        </div>
      </div>
    </footer>
  )
}
