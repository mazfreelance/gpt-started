import { SideBar } from '@/components/layouts';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react'

export default function TokenTopup() {
  return (
    <div>token-topup</div>
  )
}

TokenTopup.getLayout = function getLayout(page: any, pageProps: any) {
    return <SideBar {...pageProps}>{page}</SideBar>
  }
  
  export const getServerSideProps = withPageAuthRequired();