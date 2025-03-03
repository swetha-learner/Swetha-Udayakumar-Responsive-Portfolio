"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const GetResume = () => {
  const form = useRef()
  const getResume = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_4v0ewgl', 'template_xba739l', form.current, {
        publicKey: 'gfPqrRwF-aLurhRev',
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
    <section className='flex justify-center items-center'>
        <div className="relative flex flex-col bg-[#181818] shadow-sm border border-slate-200 w-70 md:w-96  rounded-lg my-6">
        <div className="relative m-2.5 items-center flex justify-center text-balck h-24 rounded-md bg-gradient-to-br from-pink-500 to-orange-400 bg-opacity-20">
            <h3 className="text-xl md:text-2xl font-semibold">
            See What I bring to the table!
            </h3>
        </div>
        <div className="flex flex-col gap-4 p-6">
            <form onSubmit={getResume} ref={form} className="w-full max-w-sm min-w-[200px] space-y-4">
                <label className="block mb-2 text-sm text-slate-200">
                Email
                </label>
                <input 
                    type="email" 
                    name='emailid' 
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
                    placeholder="Enter your best email to land my resume"
                    required
                 />
                <button 
                    type="submit"
                    className="text-white w-full bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-[#ee0979] rounded-lg md:text-lg text-md px-5 py-2.5 text-center me-2 mb-2" 
                >
                    Get Resume
                </button>
            </form> 
        </div>
        
    </div>
    </section>
  )
}

export default GetResume