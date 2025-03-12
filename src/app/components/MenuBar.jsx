import React from 'react'
import Navlink from './Navlink'

const MenuBar = ({ links }) => {
  return (
    <nav>
      <ul className='flex flex-cols py-4 items-center'>
        {links.map((link, index) => (
            <li key={index} >
                <Navlink href={link.path} title={link.title}/>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuBar