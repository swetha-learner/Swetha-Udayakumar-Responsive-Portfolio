"use client"
import React from 'react'
import Marquee from 'react-fast-marquee'
import{ FaReact } from "react-icons/fa"
import{ FaNodeJs } from "react-icons/fa"
import{ FaGitAlt } from "react-icons/fa"
import{ FaPython } from "react-icons/fa"

import{ TbBrandMysql } from "react-icons/tb"
import{ TbBrandMongodb } from "react-icons/tb"
import{ TbBrandDjango } from "react-icons/tb"
import{ TbBrandNextjs } from "react-icons/tb"

import{ IoLogoHtml5 } from "react-icons/io"
import{ IoLogoCss3 } from "react-icons/io"

import{ SiTailwindcss } from "react-icons/si"



const techStackItems = [
  {id: 1, name: 'React', icon: FaReact, color: '#60c7e0'},
  {id: 2, name: 'MongoDB', icon: TbBrandMongodb, color: '#47A248'},
  {id: 3, name: 'Node.js', icon: FaNodeJs, color: '#339933'},
  {id: 4, name: 'Next.js', icon: TbBrandNextjs, color: '#000000'},
  {id: 5, name: 'Python', icon: FaPython, color: '#f7f428'},
  {id: 6, name: 'Django', icon: TbBrandDjango, color: '#fafcf7'},
  {id: 7, name: 'MySQL', icon: TbBrandMysql, color: '#3691bf'},
  {id: 8, name: 'TailwindCSS', icon: SiTailwindcss, color: '#60c7e0'},
  {id: 9, name: 'Git', icon: FaGitAlt, color: '#fc5f38'},
  {id: 10, name: 'HTML5', icon: IoLogoHtml5, color: '#ff7345'},
  {id: 11, name: 'CSS3', icon: IoLogoCss3, color: '#68c3ed'},
]
const TechStack = () => {
  return (
    <section className='pt-16 glass'>
      <div className='max-w-[1200px] mx-auto px-4 pb-8 text-center'>
        <h2 id='about' className='text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-4 pb-2'>
          My Digital DNA
        </h2> 
        <Marquee pauseOnHover>
        <div className='grid grid-cols-12 gap-2 pt-2'>
          {techStackItems.map((item)=>( 
            <div 
              key={item.id}
              className='flex items-center justify-center flex-col rounded-xl'
            >
              <div className='mb-4 bg-white/10 p-6 rounded-xl'>
                {React.createElement(item.icon, {
                  className: "size-24",
                  style: {color: item.color}
                })}
              </div>
              <p className='text-gray-400 font-semibold'>{item.name}</p>

            </div>
          ))
          }
        </div>
        </Marquee>
      </div>
    </section>
  )
}

export default TechStack

