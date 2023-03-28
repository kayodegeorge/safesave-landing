import { useState } from "react";
import { useCookieConsentContext } from "@use-cookie-consent/react";

export default function CookiesModal() {
  const [showModal, setShowModal] = useState(true);

  // const { acceptAllCookies, declineAllCookies, acceptCookies, consent } =
  //   useCookieConsentContext();

  return (
    <>
      {showModal ? (
        <div className="fixed inset-x-0 bottom-8 z-50 flex items-end justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="flex w-4/5 flex-col items-center rounded-xl bg-safe-light px-6 py-4 lg:w-3/4 lg:flex-row">
            <p className="text-center text-white">
              We use cookies to improve your browsing experience on our website.
            </p>

            <div className="mt-2 flex flex-row items-center space-x-4 md:ml-auto lg:mt-0">
              <button
                onClick={() => setShowModal(false)}
                className="block text-white underline"
              >
                Decline
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="inline-flex justify-center border border-transparent bg-white py-[0.25rem] px-4 font-bold hover:bg-safe-orange focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:py-2 md:px-6"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
