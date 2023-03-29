import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <nav>
      <div className=' mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8'>
        <Link href='/'>
          <Image
            src='/assets/safesave-logo.svg'
            width={50}
            height={100}
            alt='Safesave logo'
          />
        </Link>

        <div className='flex items-center'>
          <div className='hidden space-x-16 md:block '>
            <Link className='font-semibold hover:text-safe-light' href='/about'>
              About
            </Link>
            <Link className='font-semibold hover:text-safe-light' href='/about'>
              Privacy
            </Link>

            <a
              href='#'
              className='rounded-md bg-safe-blue py-3 px-6 font-medium text-white hover:bg-safe-orange hover:delay-100'
            >
              Download app
            </a>
          </div>

          <button type='button' className='md:hidden' onClick={toggleNav}>
            {/* hamburger Icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5 text-safe-blue'
            >
              <path
                fillRule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav Menu */}
      <div
        className={`fixed top-0 left-0 z-50 mx-auto  h-screen w-full transform bg-white transition-all delay-100 duration-300 ease-in-out ${
          navOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden`}
      >
        <button onClick={() => setNavOpen(false)}>
          <AiOutlineClose className='mt-5 p-3 text-safe-blue' size={45} />
        </button>

        <div className=' mt-5 flex justify-center text-center  text-lg'>
          <ul className='mt-5 space-y-14'>
            <li>
              <Link
                className='font-semibold hover:text-safe-light'
                href='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className='font-semibold hover:text-safe-light'
                href='/privacy'
              >
                Privacy
              </Link>
            </li>
            <li>
              <a
                href='#'
                className=' rounded-md bg-safe-blue py-3 px-6 font-medium text-white hover:bg-safe-orange hover:delay-100'
              >
                Download app
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-[100px] flex justify-center'>
          <Link href='/'>
            <Image
              src='/assets/safesave-logo.svg'
              width={100}
              height={100}
              alt='Safesave logo'
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
