import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-black text-slate-200 p-3.5 text-center lg:text-left">
      <div className="text-center p-4">
        <div className="flex items-center justify-center">
          ©{(new Date().getFullYear())} Copyright&nbsp;&nbsp;
          <div className="flex-shrink-0 h-7 w-7">
            <Image
                className="h-7 w-7 rounded-full"
                src='/favicon-ma.ico'
                alt="Mohd Azmin's site"
                width={ 10 }
                height={ 10 }
            />
          </div>
          <div className="ml-2">
            <Link href="https://mohdazmin.com" target='_blank'>Mohd Azmin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer