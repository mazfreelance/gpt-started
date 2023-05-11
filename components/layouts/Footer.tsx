import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-black text-slate-200 p-3.5 text-center lg:text-left">
      <div className="text-center p-4">
        ©{(new Date().getFullYear())} Copyright&nbsp;
        <Link href="https://mohdazmin.com" target='_blank'>Mohd Azmin</Link>
      </div>
    </footer>
  )
}

export default Footer