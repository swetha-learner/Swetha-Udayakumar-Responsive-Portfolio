// "use client"
import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


const ProjectCards = ({ imageUrl, title, description, gitUrl, preview  }) => {
  return (
    <div>
        <div 
        className='h-52 md:h-72 rounded-t-xl relative group '
        style={{ background: `url(${imageUrl})`, backgroundSize:"cover"}}>
            <div className='overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
              <Link href={gitUrl} 
                className=' size-10 md:size-12 mr-4 border-2 relative rounded-full border-[#cbcfd2] hover:border-white group/link'
              >
                <CodeBracketIcon 
                  className='absolute size-6 md:size-8  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#cbcfd2]  cursor-pointer group-hover/link:text-white' 
                />
              </Link>
              <Link href={preview}
                className='size-10 md:size-12 border-2 relative rounded-full border-[#cbcfd2] hover:border-white group/link'
              >
                <EyeIcon 
                  className='absolute size-6 md:size-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#cbcfd2]  cursor-pointer group-hover/link:text-white' 
                />
              </Link>
            </div>
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-[#161515] py-6 px-4'>
            <h5 className='text-xl font-mono mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCards