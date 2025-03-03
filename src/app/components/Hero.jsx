"use client";
import React from 'react'
// import { TypeAnimation } from 'react-type-animation';
import { Typewriter } from 'react-simple-typewriter';
import { Spotlight } from './ui/Spotlight';


const Hero = () => {
  
  return (
    <section>
    <div className='grid grid-cols-1 sm:grid-cols-12 '>
    <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#8A2387'/>
    <Spotlight className='top-10 left-1/2  h-[80vh] w-[50vw]' fill='#E94057'/>
    {/* <Spotlight className='top-20 left-80  h-[80vh] w-[50vw]' fill='#F27121'/> */}
    
        <div className='col-span-7 place-self-center text-center sm:text-left'>
             
            <h1 className=' text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                Hello, I&apos;m {""} <br></br>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121]'>
                    SWETHA UDAYAKUMAR
                </span>
                    {/* <br></br> */}
            </h1>
            <h2 className='text-4xl lg:text-5xl font-bold text-white'>
                a <span>
                    <Typewriter 
                    words = {["Professional Coder.", "Fullstack Dev.","Software Developer.","UI/Ux Designer."]}
                    loop = {false}
                    cursor
                    cursorStyle='|'
                    cursorColor='#F27121'
                    typeSpeed={15}
                    deleteSpeed={10}
                    delaySpeed={2000}
                    />
                </span>
                
            </h2>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 pt-2' >
                "Where art meets algorithm" <br></br>
                Code whisperer, tech enthusiast and problem solver.
                I craft innovative software solutions that make life easier and more enjoyable
            </p>
            <br></br>
            <div>
                {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 shadow-md shadow-fuchsia-500/50 bg-gradient-to-br from-[#5603BD] via-[#9C02AD] to-[#FF0097] text-white'>
                     Let&apos;s talk
                </button> */}
                <div className="relative inline-flex  group sm:pb-4 xs:pb-4 ">
                    <div
                        className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <button
                        className="relative sm:w-fit inline-flex items-center justify-center mr-4 w-full px-6 py-3   rounded-full text-lg font-semibold text-white transition-all duration-200 bg-gray-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >Let&apos;s talk
                    </button>
                </div>
                &nbsp;
                <div className="relative inline-flex  group ">
                    <div
                        className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <button
                        className="relative sm:w-fit inline-flex items-center justify-center mr-4 w-full px-6 py-3   rounded-full text-lg font-semibold text-white transition-all duration-200 bg-gray-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >Check out my creds
                        
                    </button>
                </div>
            </div>
        </div>
        <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
            <div className='relative overflow-hidden object-cover shadow-md shadow-[#EE0979]  rounded-lg w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] ' >
               <img 
                src="/images/dummyimg.png"
                alt='hero img'
                className="absolute m-auto w-full h-full object-cover"
               />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero