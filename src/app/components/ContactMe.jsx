"use client"
import React from 'react'
import  { useRef } from "react"
import emailjs from '@emailjs/browser'
import Link from 'next/link';

import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

import { FaUserAlt } from "react-icons/fa";
import { BiSolidMessageSquareDots } from "react-icons/bi"
import { FaPenClip } from "react-icons/fa6";


const ContactMe = () => {

  const form = useRef()
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    emailjs
      .sendForm('service_evi80ie', 'template_bs9joej', form.current, {
        publicKey: 'RLEpltgiFbc78vMed',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <section id='contact'>
        <h2 className='text-center text-4xl md:text-6xl font-bold text-white mt-4 mb-8  md:mb-12 pt-10'>
        Turn Ideas into Reality 〰️ With me! ✨
        </h2>
        <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col space-y-6 bg-gradient-to-br from-pink-500 to-orange-400 bg-opacity-20 w-full max-w-4xl md:p-8 p-4 rounded-xl shadow-lg text-white'>    
             {/* contact info */}
            <div className='flex flex-col space-y-8 justify-between'> 
                <div>
                    {/* contact intro */}
                    <h1 className='font-bold text-3xl md:text-4xl tracking-wide text-white pb-2'> Passion meets Expertise  </h1>
                    <p className='pt-2 text-[#faf8f7] text-sm'> Ready to Collaborate?
                        I'd love to hear from you. Coffee fuels my creativity. Let's grab a cup and brainstrom how we can bring your project into life.
                        If you've got a question, a comment, or just want to say hello, I'm all ears! Let's connect.  
                    </p>
                </div>
                <div className='flex flex-col space-y-6  '>
                    {/* Personal Info */}
                    <div className='inline-flex space-x-2 items-center'>
                        <IoCall className='size-6  text-[#90104e]' />
                        <span>+91 9443998570</span>
                    </div>
                    <div className='inline-flex space-x-2  items-center'>
                        <IoMail className='size-6 text-[#90104e]'/>
                        <span className='overflow-hidden text-wrap'> swethaudayakumar3990@gmail.com </span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <IoLocation className='size-6  text-[#90104e]' href='https://www.linkedin.com/in/swetha-udayakumar-17272b169' />
                        <span> Chennai, India. </span>
                    </div>     
                </div>
            </div>
            {/* contact form */}
            <div>
                <div className=' bg-[#313030] rounded-xl shadow-lg text-zinc-100 p-8 sm:p-12 '>
                    <h1
                     className=' flex flex-col justify-center items-center font-semibold text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] pb-4'
                     >
                         Let's Talk 
                    </h1>
                    <form onSubmit={handleSubmit} ref={form} className='flex flex-col space-y-4 '>
                        <div className="form-control">
                                <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUserAlt className="size-5 text-pink-600"/>
                                </div>
                                <input 
                                    type="text" 
                                    id = "name"
                                    name = "name"
                                    className= "input bg-[#313030] input-bordered w-full pl-10 ring-1 focus:ring-2 ring-gray-300 focus:ring-pink-600 rounded-md px-4 py-2 outline-none"
                                    placeholder="Drop your awesome name here"
                                    required
                                    />
                                </div>
                         </div>
                        <div className="form-control">
                                <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IoMail className="size-5 text-pink-600"/>
                                </div>
                                <input 
                                    type="email" 
                                    id="emailid"
                                    name="emailid"
                                    className= "input bg-[#313030] input-bordered w-full pl-10 ring-1 focus:ring-2 ring-gray-300 focus:ring-pink-600  rounded-md px-4 py-2 outline-none"
                                    placeholder="Where can I reach you?" 
                                    required                                                      
                                    />
                                </div>
                         </div>
                        <div className="form-control">
                                <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaPenClip className="size-5 text-pink-600"/>
                                </div>
                                <input 
                                    type="text"
                                    id="subject" 
                                    name="subject"
                                    className= "input bg-[#313030] input-bordered w-full pl-10 ring-1 focus:ring-2 ring-gray-300 focus:ring-pink-600  rounded-md px-4 py-2 outline-none"
                                    placeholder="What's the topic?"  
                                    required                              
                                    />
                                </div>
                         </div>
                        <div className="form-control">
                                <div className="relative">
                                <div className="absolute pt-2 left-0 pl-3 flex items-center pointer-events-none">
                                    <BiSolidMessageSquareDots className="size-5 text-pink-600"/>
                                </div>
                                <textarea 
                                    rows="4" 
                                    id="message"
                                    name="message"
                                    className=" input bg-[#313030] input-bordered pl-10 px-4 pt-2 w-full rounded-lg ring-1 focus:ring-2 ring-gray-300 focus:ring-pink-600 outline-none dark:border-gray-600 dark:placeholder-gray-400" 
                                    placeholder="Don&apos;t be shy—say hi!"
                                    required
                                    >
                                </textarea>
                                </div>
                         </div>
                         <button 
                            type="submit" 
                            className="text-white font-semibold bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] rounded-lg md:text-lg text-md px-5 py-2.5 text-center me-2 mb-2 "
                            > 
                            Drop a Line
                        </button>
                    </form>
                </div>
                <div className='flex max-w-screen-sm:flex-col pt-4 md:space-x-4' >
                    {/* handles */}
                    <h4 className='text-[#181818] font-semibold pt-4'>Follow me - because why not? 😜</h4>
                    <br></br>
                    <Link href={"https://www.linkedin.com/in/swetha-udayakumar-17272b169"} 
                        className="flex flex-row space-x-2 items-center btn gap-2 hover:scale-110 "
                    >
                        <BsLinkedin className="md:size-10 size-8 text-[#171717] hover:text-slate-200" />
                    </Link>

                    <Link href={"https://github.com/swetha-learner"} 
                        className="flex flex-row space-x-2 items-center btn gap-2 hover:scale-110 "
                    >
                        <IoLogoGithub className="md:size-12 size-8 text-[#171717] hover:text-slate-200" />   
                    </Link>
                    <Link href={"mailto:swethaudayakumar3990@gmail.com"} 
                        className="flex flex-row space-x-2 items-center btn gap-2 hover:scale-110 "
                    >
                        <IoMail className="md:size-12 size-8 text-[#171717] hover:text-slate-200" /> 
                    </Link>
                    {/* for foreground background contrast -- check webaim contrast checker */}
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default ContactMe
