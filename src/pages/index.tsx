import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=''>
        <Navbar />
      </div>
      <section className=''>
        <div className=''>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            labore quibusdam amet adipisci.
          </h1>
        </div>
        <div className=''>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className=''>
          <button>Download on the App Store</button>
          <button>Get on Google play</button>
        </div>
      </section>
    </>
  )
}
