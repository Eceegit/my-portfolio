import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navigation = () => {
        //state to handle nav icons
        const [nav, setNav] = useState(false)

        const links = [
          {
            id: 1,
            link: 'home'
          },
          {
            id: 2,
            link: 'about'
          },
          {
            id: 3,
            link: 'portfolio'
          },
          {
            id: 4,
            link: 'experience'
          },
          {
            id: 5,
            link: 'contact'
          }
        ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-20 text-white bg-black fixed'>
        <div>
          <h1 className='text-5xl font-signature'>Esther<span>.</span></h1>
        </div>
       
        <ul className='hidden md:flex'>
            {links.map(({id,link}) => ( 
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>      
            ))}
        </ul>
        
        <div onClick={()=> setNav(!nav)} className='cursor-pointer z-10 py-4 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} />: <FaBars size={30} /> }
        </div>

        {
          nav ? (<ul className='flex flex-col justify-center items-center absolute top-0 
          left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 '>
            {links.map(({id,link}) => ( 
                <li key={id} className='text-4xl capitalize cursor-pointer py-6 px-4'>{link}</li>      
            ))}
          </ul>) : " "
        }
    </div>
  )
}

export default Navigation