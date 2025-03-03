import Link from 'next/link'
import React from 'react'


const Navlink = ({href, title}) => {
  return (
    
      <Link
        href={href}
        className='block py-2 pl-3 pr-4  text-slate-200 sm:text-xl rounded md:p-0 hover:text-[#ee0979]'
      >
        {title}
      </Link>
   
  )
}

export default Navlink
