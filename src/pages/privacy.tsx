import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function privacy() {
  return (
    <div>
      <Navbar />

      <section className='mx-auto max-w-7xl px-4 lg:px-8 mt-10'>
        <div className='lg:flex'>
          {/* left/top */}
          <div className='h-full pr-14 lg:w-3/5'>
            <h1 className='font-bold text-4xl'>Privacy Policy</h1>
            <p className='font-normal text-safe-light mt-5 text-xl p-2'>
              This privacy policy (this "Privacy Policy") explains how personal
              information is collected, used, stored, and disclosed by SafeSave
              Global Limited, ("SafeSave," "we," "us," and "our"). The
              provisions contained in this Privacy Policy supersede all previous
              notices and statements regarding our privacy practices with
              respect to our services.
            </p>

            {/* extra contents */}
          </div>

          {/* right/bottom */}
          <div className='h-90 lg:w-2/5 mb-5'>
            <Image
              src={'/assets/privacy-policy.jpg'}
              alt='Privacy Policy'
              width={700}
              height={500}
            ></Image>
          </div>
        </div>
        <div className=' mt-5 border bg-gray-900 '></div>
      </section>

      <section className='mx-auto max-w-7xl px-4 lg:px-8 mt-10'>
        <div className='m-5'>
          <h1 className='font-bold text-4xl'>
            Application of this Privacy Policy
          </h1>
          <p className='font-normal text-safe-light mt-5 text-xl p-2'>
            This Privacy Policy applies generally to the business of SafeSave
            and serves to set out our approach to personal data, inclusive of
            personal data of our consumer users ("Users").{' '}
          </p>
          <p className='font-normal text-safe-light mt-5 text-xl p-2'>
            This Privacy Policy applies to systems, operations and processes of
            SafeSave that involve the collection, use, storage, and disclosure
            etc. of personal information. This Privacy Policy applies to use of
            our websites, applications, other online services and/or any related
            services, sales, marketing, promotional or events, and social media
            activities (collectively, our "Services"). For our Users, this
            Privacy Policy is part of our Terms of Use.
          </p>
          <p className='font-normal text-safe-light mt-5 text-xl p-2'>
            This Privacy Policy applies to your use of (regardless of means of
            access) our Services. You may access or use our Services through a
            desktop, laptop, mobile phone, tablet, or other consumer electronic
            device (each, a "Device"). This Privacy Policy also applies to
            offline interactions with SafeSave. By accessing or using our
            Services, you agree to this Privacy Policy.
          </p>
        </div>
        <div className=' mt-5 border bg-gray-900 '></div>
      </section>

      <section className='mx-auto max-w-7xl px-4 lg:px-8 mt-10'>
        <div className='m-5'>
          <h1 className='font-bold text-4xl'>
            Information Collected Through Cookies and Similar Technologies
          </h1>
          <p className='font-normal text-safe-light mt-5 text-xl p-2'>
            We use cookies to personalize our Services for you and to collect
            aggregate information about the usage of our Services. A cookie is a
            text file or other local storage identifier provided by your browser
            or associated applications. We use cookies for record-keeping
            purposes and to enhance the quality of your use of our Services. The
            cookies assign random, unique numbers to your Devices to enable our
            systems to recognize your Devices and to allow us to see how you use
            our Services. Additional general information about cookies and how
            they work is available at www.allaboutcookies.org.
          </p>
          <p className='font-normal text-safe-light mt-5 text-xl p-2'>
            The cookies we use in connection with our Services include:
          </p>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl p-2'>Session cookies:</h1>
            <span className='font-normal text-safe-light text-xl p-2'>
              This Privacy Policy applies to your use of (regardless of means of
              access) our Services. You may access or use our Services through a
              desktop, laptop, mobile phone, tablet, or other consumer
              electronic device (each, a "Device"). This Privacy Policy also
              applies to offline interactions with SafeSave. By accessing or
              using our Services, you agree to this Privacy Policy.
            </span>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl p-2'>Persistent cookies:</h1>
            <span className='font-normal text-safe-light text-xl p-2'>
              Persistent cookies usually have an expiration date in the distant
              future and remain in your browser until they expire or you
              manually delete them. We use persistent cookies to better
              understand usage patterns so we can improve our Services. For
              example, we may use a persistent cookie to associate you with your
              SafeSave account or to remember your choices for our Services.
            </span>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl p-2'>Third-party cookies:</h1>
            <span className='font-normal text-safe-light text-xl p-2'>
              We permit certain third parties to place cookies through our
              Services to provide us with better insights into the use of our
              Services and user demographics and to advertise our Services to
              you. These third parties may collect information about your online
              activities over time and across different websites when you access
              or use our Services. For example, we utilize Google Analytics to
              analyze usage patterns for our Services. Google Analytics
              generates a cookie to capture information about your use of our
              Services, which Google uses to compile reports on website activity
              for us and to provide other related services. Google may use a
              portion of your IP address to identify its cookie, but this will
              not be associated with any other data held by Google. We may also
              permit third-party service providers to place cookies for our
              Services, as indicated above, to perform analytic or marketing
              functions where you are notified of them and you have consented to
              the usage. We do not control the use of such third-party cookies
              or the resulting information, and we are not responsible for any
              actions or policies of such third parties. By accessing or using
              our Services, you consent to the placement of cookies on your
              Devices as described in this Privacy Policy. If you prefer not to
              receive cookies through our Services, you may control how your
              browser responds to cookies by adjusting the privacy and security
              settings of your web browser. Unless you set your browser settings
              to refuse all cookies, our system may issue cookies when you
              access or use our Services. If you set your browser settings to
              refuse all cookies, the performance of certain features of our
              Services may be limited or not work at all.
            </span>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl p-2'>Do-Not-Track Signals</h1>
            <span className='font-normal text-safe-light text-xl p-2'>
              Do Not Track ("DNT") is an optional browser setting that allows
              you to express your preferences regarding tracking by advertisers
              and other third parties. We do not use technology that recognizes
              DNT signals from your web browser.
            </span>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl p-2'>How We Use Information</h1>
            <span className='font-normal text-safe-light text-xl p-2'>
              We may use Analytics as described elsewhere in this Privacy Policy
              and for research and commercial purposes, such as to improve our
              Services.
              <span className='font-normal text-safe-light text-xl p-2 mt-3'>
                We may use Personal Information for the purposes described
                elsewhere in this Privacy Policy and internally for our general
                commercial purposes, including, among other things, to offer our
                products and services and products and services of third parties
                that we think you might find of interest. Only PiggyVest and our
                third-party service providers involved in distributing the
                offers or providing the products or services will have access to
                your Personal Information. Our third-party service providers
                will only be permitted to use Personal Information for that
                intended purpose.
              </span>
              <span className='font-normal text-safe-light text-xl p-2 mt-3'>
                We may use your email address to respond to your inquiries and
                to provide information about our Services. You may elect not to
                receive promotional emails from us either by "unsubscribing" to
                an email you receive from us or by contacting us as indicated
                below. As a User, if you unsubscribe from receiving emails from
                us, we may still send you non-promotional emails, such as emails
                about your PiggyVest account or our ongoing business relations,
                unless you withdraw your consent to receive electronic
                communications as provided in our Terms of Use.
              </span>
            </span>
          </div>
        </div>
        <div className=' mt-5 border bg-gray-900 '></div>
      </section>
      <Footer />
    </div>
  )
}
