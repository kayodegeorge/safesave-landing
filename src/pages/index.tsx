import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

import RatingsStar from '@/components/RatingsStar'
import Navbar from '@/components/Navbar'
import AppStoreButton from '@/components/AppStoreButton'
import GooglePlayButton from '@/components/GooglePlayButton'
import Footer from '@/components/Footer'
import BenefitsCardSave from '@/components/BenefitsCards/BenefitsCardSave'
import BenefitsCardStash from '@/components/BenefitsCards/BenefitsCardStash'
import BenefitsCardInvest from '@/components/BenefitsCards/BenefitsCardInvest'
import BenefitsCardPayBills from '@/components/BenefitsCards/BenefitsCardPayBills'
import CarouselCards from '@/components/CarouselCards'
import CookiesModal from '@/components/CookiesModal'

// import { AnimationWrapper } from 'react-hover-animation'

export default function Home() {
  return (
    <>
      <Navbar />

      <CookiesModal />

      <section className='mx-auto mt-8 max-w-7xl px-4 lg:mt-10 lg:px-8'>
        <div className='lg:flex'>
          {/* left/top */}
          <div className='h-full pr-14 lg:w-3/5'>
            <h1 className='text-5xl lg:text-[64px] lg:leading-[76px]'>
              <span className='text-safe-orange'>Group Savings,</span> <br />
              <span className='text-safe-blue'>Credit and Investments.</span>
            </h1>
            {/* <Typed
              className='text-2xl lg:text-[64px] leading-[76px] mb-6 text-safe-blue'
              strings={['Group Savings', 'Credit and Investments']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            <br />
            <Typed
              className='text-2xl lg:text-[64px] leading-[76px] mb-6 text-safe-orange'
              strings={['Japa Contributions', 'Pay Bills Seemlessly']}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> */}
            <p className='mt-4 text-lg font-normal text-safe-light lg:text-xl'>
              We bring about Group savings, Credit and Investment to help SME &
              Corporate Employees in building their interest.
            </p>

            {/* Download buttons */}
            <div className='mt-4 flex gap-4'>
              <AppStoreButton />
              <GooglePlayButton />
            </div>

            <div className='mt-4 flex gap-2 text-safe-light'>
              <span>Excellent 4.5 out of 5</span>

              <RatingsStar />
            </div>
          </div>

          {/* right/bottom */}

          <div className='relative mt-8 hidden h-96 w-full md:block lg:mt-0 lg:w-2/5'>
            <Image
              src={'/assets/woman-safe-removebg.png'}
              alt='Save hero'
              fill
              className='object-cover object-center'
            />
          </div>
        </div>
      </section>

      <section className='mt-8 bg-gray-100'>
        <div className='mx-auto max-w-7xl px-4 pt-12 pb-28 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-4xl font-semibold lg:text-5xl'>
              Save automatically or on your terms, <br />
              set daily, weekly, or monthly savings.
            </h2>

            <div className='mt-4 text-safe-light'>
              <p>
                SafeSave leverages our wealth of 3 decades of experience
                delivering value to our customers,
              </p>
              <p>
                enabling your Esusu or Ajo contribution with technology while
                paying you competitive interest rates.
              </p>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <BenefitsCardSave />
            <BenefitsCardStash />
            <BenefitsCardInvest />
            <BenefitsCardPayBills />
          </div>
        </div>
      </section>

      <CarouselCards />

      <section className='mx-auto max-w-7xl px-4 pt-16 pb-16 lg:px-8 lg:pb-60'>
        <h3 className='text-center text-4xl font-bold'>
          What our customers are saying
        </h3>

        <div className='mt-12 flex items-center gap-5'>
          <button type='button' className='hidden'>
            <BsArrowLeftCircle size={30} />
          </button>

          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='min-w-[200px]   rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
              <div>
                <RatingsStar />
              </div>

              <div className='mt-6'>
                <span className='font-semibold'>
                  SafeSave allowed me to buy my dream house
                </span>

                <p className='mt-2 text-safe-light'>
                  I was bad with my money management for a long time until i
                  opened a safesave account, my life has not remained the same
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

            <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
              <RatingsStar />

              <div className='mt-6'>
                <span className='font-semibold'>
                  I finally started my business thanks to SafeSave
                </span>

                <p className='mt-2 text-safe-light'>
                  I have not been able to kickstart my business because i have
                  not seen where i can save my money, i stumbled upon safesave
                  and after a year i was able to start with their wonderful
                  interest rates.
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

          <button type='button' className='hidden'>
            <BsArrowRightCircle size={30} />
          </button>
        </div>
      </section>

      <section className='flex h-96 justify-center bg-gradient-to-b from-[#3770C1] to-[#092C5F]'>
        <div className='relative hidden w-96 md:block'>
          <div className='absolute left-0 -top-28 h-96 w-96'>
            <Image
              src={'/assets/unsplash-new.svg'}
              alt='Join our tribe'
              fill
              className='object-cover object-top'
            />
          </div>
        </div>

        <div className='mt-14 pl-4 md:pl-28'>
          <h2 className='text-5xl text-gray-100'>Join the tribe.</h2>

          <p className='mt-4 text-lg text-gray-300'>
            Android or iPhone user? We got you covered! <br /> Download SafeSave
            and start saving immediately across any plaform Do not miss out,
            join our tribe today!
          </p>

          <div className='mt-8 flex gap-4'>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
