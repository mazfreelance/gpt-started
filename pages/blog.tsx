import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <>
      <div>blog</div>
      <Link href="/api/auth/login">
        Login
      </Link>
    </>
  )
}
