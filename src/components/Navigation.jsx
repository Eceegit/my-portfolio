import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {Link} from 'react-scroll'

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
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
          <h1 className='text-5xl font-signature md:px-20 hover:scale-105 duration-200'><a href='https://github.com/Eceegit'>Esther<span className='text-[#172740] text-7xl'>.</span></a></h1>
        </div>
       
        <ul className='hidden md:flex'>
            {links.map(({id,link}) => ( 
                <li key={id} className='px-4 cursor-pointer capitalize font-bold text-gray-500 hover:scale-105 duration-200 '>
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>      
            ))}
        </ul>
        
        <div onClick={()=> setNav(!nav)} className='cursor-pointer z-10 py-4 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} />: <FaBars size={30} /> }
        </div>

        {
          nav ? (<ul className='flex flex-col justify-center items-center absolute top-0 
          left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800 '>
            {links.map(({id,link}) => ( 
                <li key={id}  className='text-4xl capitalize cursor-pointer py-6 px-4'>
                  <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}>
                    {link}
                  </Link>
                </li>      
            ))}
          </ul>) : " "
        }
    </div>
  )
}

export default Navigation