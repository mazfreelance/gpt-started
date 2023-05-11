import Footer from '@/components/layouts/Footer'
import Navigation from '@/components/layouts/Navigation'
import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <div className="min-h-screen">
          <Navigation/>
          <Component {...pageProps} />
          <Footer/>
        </div>
      </UserProvider>
    </>
  )
}
