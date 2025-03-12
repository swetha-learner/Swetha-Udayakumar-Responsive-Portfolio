import React from 'react'
import GetResume from './GetResume'

const Credential = () => {
  return (
    <section >
        <div className='grid grid-cols-1 sm:grid-cols-12 '>    
            <div className='col-span-7 place-self-center text-center sm:text-left'>  
                <h1 id='cred' className=' text-white mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold '>
                    Ready to Level Up your team with me?
                </h1>
                <h2 className='text-2xl lg:text-3xl font-bold text-white'>
                    Check out my credentials.
                </h2>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 pt-2' >
                    "I may be your next best hire!" <br></br>
                    I'm beyond thrilled to have had the opportunity to share my portfolio.
                    I'm eager to join the team that shares my enthusiasm for creativity and innovation,
                    and I believe that together, we could achieve something remarkable.
                </p>
                <br></br>
            </div>
            <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
                <GetResume />
            </div>
        </div>
        </section>
  )
}

export default Credential