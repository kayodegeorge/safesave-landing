import { useState } from 'react'
import { useCookieConsentContext } from '@use-cookie-consent/react'
import Link from 'next/link'

export default function CookiesModal() {
  const [showModal, setShowModal] = useState(true)

  // const { acceptAllCookies, declineAllCookies, acceptCookies, consent } =
  //   useCookieConsentContext();

  return (
    <>
      {showModal ? (
        <div className='fixed inset-x-0 bottom-8 z-50 flex items-end justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
          <div className='flex w-4/5 flex-col items-center rounded-xl bg-gradient-to-b from-[#3770C1] to-[#092C5F] px-10 py-8 lg:w-3/4 lg:flex-row'>
            <p className='text-center text-sm text-gray-100'>
              This website uses cookies to optimize your experience and to
              provide us insight on how to interact with the site. All
              information shared with us through cookies are secure and covered
              by our data privacy obligations. You can access our{' '}
              <span className='mr-1 underline'>
                <Link href={'/privacy'}>Privacy Policy</Link>
              </span>
              here
            </p>

            <div className='mt-2 flex flex-row items-center space-x-4 md:ml-auto lg:mt-0'>
              <button
                onClick={() => setShowModal(false)}
                className='block text-sm text-gray-100 underline hover:text-gray-300'
              >
                Decline
              </button>
              <button
                onClick={() => setShowModal(false)}
                className='inline-flex justify-center rounded-md border border-transparent bg-white py-[0.25rem] px-4 text-sm font-bold hover:bg-safe-light focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:py-2 md:px-6'
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
