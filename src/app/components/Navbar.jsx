"use client"
import Link from 'next/link'
import React  from 'react'
import { useState } from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuBar from './MenuBar'
const navLinks = [
  {
    title: "About",
    path: "#about",
   
  },
  {
    title: "Works",
    path: "#works",
   
  },
  {
    title: "Skills",
    path: "#skill",
    
  },
  {
    title: "Contact",
    path: "#contact",
    
  },
]


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)


  return (
    <nav className='fixed top-0 left-0 right-0 z-10  bg-zinc-900 bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"}>
            <img 
                src="/images/mylogo.png"
                alt='logo'
                className="size-8 md:size-10 lg:size-14"
               />
            </Link>
            <div className='mobile-menu block md:hidden'>
              {
                !navOpen ? (
                  <button onClick={() => setNavOpen(true)}
                   className='flex items-center px-3 py-2 border rounded border-slate-200 text-zinc-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='size-5'/>
                  </button>
                ) : (
                  <button onClick={() => setNavOpen(false)}
                   className='flex items-center px-3 py-2 border rounded border-slate-200 text-zinc-200 hover:text-white hover:border-white'>
                    <XMarkIcon className='size-5'/>
                  </button>
                )
              }

            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
              <nav>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                  {
                    navLinks.map((link, index) => (
                      <li key={index}> 
                        <Navlink href={link.path} title={link.title} />
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
        </div>
        {navOpen ? <MenuBar links={navLinks}/>: null }
    </nav>
  )
}

export default Navbar