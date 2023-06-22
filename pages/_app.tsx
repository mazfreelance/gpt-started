import Footer from '@/components/layouts/Footer'
import Navigation from '@/components/layouts/Navigation'
import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
// import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page)
  return (
    <>
      <UserProvider>
        <div className="min-h-screen">
          <Navigation/>
          {/* <Component {...pageProps} /> */}
          {getLayout(<Component {...pageProps}/>, pageProps)}
          <Footer/>
        </div>
      </UserProvider>
    </>
  )
}
