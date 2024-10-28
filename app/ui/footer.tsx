// import Link from 'next/link'
// import React from 'react'
// import AcmeLogo from './acme-logo'

// const Bottominfo = () => {
//   return (
//     <div className='w-full h-40 bg-slate-600'>
//     <div className='ml-[1.5625rem] mr-[1.5625rem] justify-start flex flex-row'>
//     <div className="shrink-0 rounded-lg bg-blue-500 p-2">
//         <AcmeLogo />
//       </div>
//       <div className='font-semibold ml-6 text-2xl text-slate-300'>
//         <Link href="/">www.mydashboard.com</Link>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Bottominfo
import Link from 'next/link'
import React from 'react'
import AcmeLogo from './acme-logo'

const Footer = () => {
  return (
    <footer className="w-full h-40 bg-slate-600 p-4 flex justify-start items-center">
      <div className="shrink-0 p-2">
        <AcmeLogo />
      </div>
      <div className="h-10 w-0.5 bg-slate-200"></div>
      <div className="ml-2 font-semibold text-2xl text-slate-100">
        <Link href="/">www.mydashboard.com</Link>
      </div>
    </footer>
  )
}

export default Footer