import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${karla.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
