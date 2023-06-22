import { SideBar } from '@/components/layouts'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'

export default function Post(props: any) {
  return (
    <div>index</div>
  )
}


Post.getLayout = function getLayout(page: any, pageProps: any) {
    return <SideBar {...pageProps}>{page}</SideBar>
  }
  
  export const getServerSideProps = withPageAuthRequired();
