import Link from 'next/link'
import React from 'react'
import AcmeLogo from './acme-logo'
import Followus from './followus'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-40 bg-slate-600 p-4 flex justify-evenly items-center">
      <div className="shrink-0 p-2">
        <AcmeLogo />
      </div>
      <div className="h-10 w-0.5 bg-slate-200"></div>
      <div className="ml-2 font-semibold text-2xl sm:text-xl md:text-lg text-slate-100 hover:text-lime-300">
        <Link href="/">www.mydashboard.com</Link>
      </div>
      <div className="ml-2 h-10 w-0.5 bg-slate-200"></div>
      <div className="p-1 text-2xl sm:text-xl md:text-lg text-slate-200">
        <Followus />
      </div>
      <div className="ml-1 h-10 w-0.5 bg-slate-200"></div>
      <div className="flex flex-row p-2 items-center justify-center text-2xl sm:text-xl md:text-lg text-slate-200">
        <div>
          <Link href={'https://mail.google.com/'}>
            <Image src="/gmail.png" width={42} height={42} alt="Instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer