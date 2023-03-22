import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import BenefitsCard from '@/components/BenefitsCard'
import RatingsStar from '@/components/RatingsStar'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import AppStoreButton from '@/components/AppStoreButton'
import GooglePlayButton from '@/components/GooglePlayButton'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=''>
        <Navbar />
      </div>
      <section className='mx-auto max-w-7xl px-4 lg:px-8 mt-6'>
        <div className='lg:flex'>
          {/* left/top */}
          <div className='h-full pr-14 lg:w-3/5'>
            <h1 className='text-2xl lg:text-[64px] leading-[76px] mb-8'>
              Velit officia{' '}
              <span className='text-safe-blue'>consequat duis</span> enim velit
              mollit exercitation.
            </h1>
            <p className='font-normal'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
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
          <div className='h-96 bg-gray-50 lg:w-2/5'></div>
        </div>
      </section>

      <section className='bg-gray-100 pt-12 pb-28 mt-10'>
        <div className='text-center lg:px-24'>
          <h2 className='text-5xl font-semibold'>
            Velit officia consequat duis enim
          </h2>
          <h2 className='text-5xl font-semibold'>velit mollit exercitation</h2>
          <div className='mt-4 text-safe-light'>
            <p className=''>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat
            </p>
            <p>
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
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
          <BenefitsCard />

          <BenefitsCard />
          <BenefitsCard />

          <BenefitsCard />
        </div>
      </section>

      <section className='px-16 pt-16 pb-60'>
        <h3 className='text-center text-4xl font-bold'>
          What our customers are saying
        </h3>

        <div className='mt-12 flex items-center gap-5'>
          <div>
            <BsArrowLeftCircle size={30} />
          </div>

          <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
            <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
              <div>
                <RatingsStar />
              </div>

              <div className='mt-6'>
                <span className='font-semibold'>
                  Velit officia consequat duis ...
                </span>

                <p className='mt-2 text-safe-light'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                <div className='mt-6 w-px bg-[#DFE4FF]'></div>

                <div className='flex items-center gap-4'>
                  <div className='h-11 w-11 rounded-full border-2 border-[#2948FF] bg-gray-400'></div>

                  <span>
                    Wade <br /> Warren
                  </span>
                </div>
              </div>
            </div>

            <div className='min-w-[200px] rounded-lg bg-white pl-[72px] pb-16 pr-[88px] pt-10 shadow-md'>
              <RatingsStar />

              <div className='mt-6'>
                <span className='font-semibold'>
                  Velit officia consequat duis ...
                </span>

                <p className='mt-2 text-safe-light'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                <div className='mt-6 w-px bg-[#DFE4FF]'></div>

                <div className='flex items-center gap-4'>
                  <div className='h-11 w-11 rounded-full border-2 border-[#2948FF] bg-gray-400'></div>

                  <span>
                    Wade <br /> Warren
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <BsArrowRightCircle size={30} />
          </div>
        </div>
      </section>

      <section className='flex h-96 justify-center bg-gradient-to-b from-[#3770C1] to-[#092C5F]'>
        <div className='relative w-96'>
          <div className='absolute left-0 -top-28 h-96 w-96 bg-gray-400'></div>
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
