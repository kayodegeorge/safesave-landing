import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <div>
      <Navbar />
      <section className='mx-auto mt-10 max-w-7xl px-4 lg:px-8'>
        <div className='lg:flex'>
          {/* left/top */}
          <div className='h-full pr-14 lg:w-3/5'>
            <h1 className='text-3xl font-bold'>About Us</h1>
            <p className='font-abold mt-5 p-2 text-4xl text-safe-light'>
              We bring about Group savings, Credit and Investments to help SMEs
              & Corporate employees in building their interests.
            </p>

            {/* extra contents */}
          </div>

          {/* right/bottom */}
          <div className='h-90 mb-5 lg:w-2/5'>
            <Image
              src={'/assets/join-astra1.jpg'}
              alt='Privacy Policy'
              width={700}
              height={500}
            ></Image>
          </div>
        </div>
        <div className=' mt-5 border bg-gray-900 '></div>
      </section>
      <Footer />
    </div>
  )
}
