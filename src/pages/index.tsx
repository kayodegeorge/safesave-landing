import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import RatingsStar from '@/components/RatingsStar'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import AppStoreButton from '@/components/AppStoreButton'
import GooglePlayButton from '@/components/GooglePlayButton'
import Footer from '@/components/Footer'
import BenefitsCardSave from '@/components/BenefitsCards/BenefitsCardSave'
import BenefitsCardStash from '@/components/BenefitsCards/BenefitsCardStash'
import BenefitsCardInvest from '@/components/BenefitsCards/BenefitsCardInvest'
import BenefitsCardPayBills from '@/components/BenefitsCards/BenefitsCardPayBills'
import Typed from 'react-typed'
import CarouselCards from '@/components/CarouselCards'
// import { AnimationWrapper } from 'react-hover-animation'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=''>
        <Navbar />
      </div>
      <section className='mx-auto max-w-7xl px-4 lg:px-8 mt-10'>
        <div className='lg:flex'>
          {/* left/top */}
          <div className='h-full pr-14 lg:w-3/5'>
            {/* <h1 className='text-2xl lg:text-[64px] leading-[76px] mb-6'>
              Group Savings,
              <span className='text-safe-blue'> Credit </span>and Investment.
            </h1> */}
            <Typed
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
            />
            <p className='font-normal text-safe-light mt-5 text-xl'>
              We bring about Group savings, Credit and Investment to help SME &
              Corporate Employees in building their interest.
            </p>

            {/* Download buttons */}
            <div className='mt-12 flex gap-4'>
              <div className='flex gap-4'>
                <AppStoreButton />
              </div>
              <div className='flex gap-4'>
                <GooglePlayButton />
              </div>
            </div>

            <div className='mt-6 text-safe-light flex gap-2'>
              <span>Excellent 4.5 out of 5</span>

              <RatingsStar />
            </div>
          </div>

          {/* right/bottom */}
          <div className='h-90 lg:w-2/5 mb-5'>
            <Image
              src={'/assets/heroImg.jpg'}
              alt='Save woman'
              width={700}
              height={300}
            ></Image>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 pt-12 pb-28 mt-10'>
        <div className='text-center lg:px-24'>
          <h2 className='text-5xl font-semibold'>
            Save automatically or on your terms, set-
          </h2>
          <h2 className='text-5xl font-semibold'>
            daily, weekly, or monthly savings.
          </h2>
          <div className='mt-4 text-safe-light'>
            <p className=''>
              SafeSave leverages our wealth of 3 decades of experience
              delivering value to our customers,
            </p>
            <p>
              enabling your Esusu or Ajo contribution with technology while
              paying you competitive interest rates.
            </p>
          </div>
        </div>

        <div className='mt-14 grid grid-cols-1 gap-12 px-16 md:grid-cols-2 lg:grid-cols-4'>
          {/* <div className='min-w-[200px] rounded-lg bg-white p-6 shadow-md'>
            <div>
              <Image
                alt='Academic caps'
                src={'/assets/cap-yellow.svg'}
                width={38}
                height={38}
                className='mt-[2px]'
              ></Image>
            </div>

            <div className='mt-6'>
              <span className='font-semibold'>Velit mollit exercitation</span>

              <p className='mt-2'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div> */}
          <BenefitsCardSave />

          <BenefitsCardStash />
          <BenefitsCardInvest />

          <BenefitsCardPayBills />
        </div>
      </section>

      <div
        id='default-carousel'
        className='relative w-full bg-black'
        data-carousel='slide'
      >
        <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <Image
              src={'/assets/unsplash-new.svg'}
              alt='Join our tribe'
              width={800}
              height={300}
            ></Image>
          </div>

          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <Image
              src={'/assets/unsplash-new.svg'}
              alt='Join our tribe'
              width={800}
              height={300}
            ></Image>
          </div>
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <Image
              src={'/assets/unsplash-new.svg'}
              alt='Join our tribe'
              width={800}
              height={300}
            ></Image>
          </div>

          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <Image
              src={'/assets/unsplash-new.svg'}
              alt='Join our tribe'
              width={800}
              height={300}
            ></Image>
          </div>
        </div>
        {/* slider indicators */}
        <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='true'
            aria-label='Slide 1'
            data-carousel-slide-to='0'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to='1'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 3'
            data-carousel-slide-to='2'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 4'
            data-carousel-slide-to='3'
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
        >
          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
        >
          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>

      <section className='px-16 pt-16 pb-60'>
        <h3 className='text-center text-4xl font-bold'>
          What our customers are saying
        </h3>

        <div className='mt-12 flex items-center gap-5'>
          <Link href={'/'}>
            <div>
              <BsArrowLeftCircle size={30} />
            </div>
          </Link>

          <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
            <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
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

          <Link href={'/'}>
            <div>
              <BsArrowRightCircle size={30} />
            </div>
          </Link>
        </div>
      </section>

      <section className='flex h-96 justify-center bg-gradient-to-b from-[#3770C1] to-[#092C5F]'>
        <div className='relative w-96'>
          <div className='absolute left-0 -top-28 h-96 w-96 '>
            <Image
              src={'/assets/unsplash-new.svg'}
              alt='Join our tribe'
              width={800}
              height={300}
            ></Image>
          </div>
        </div>

        <div className='mt-14 pl-28'>
          <h2 className='text-5xl text-white'>Join the tribe.</h2>

          <p className='mt-4 text-white'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. <br /> Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt <br /> nostrud amet.
          </p>

          <div className='mt-14 flex gap-4'>
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
