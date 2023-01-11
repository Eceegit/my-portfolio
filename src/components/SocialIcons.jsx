import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialIcons = () => {
    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin size={30} />
                </>
              ),
            href: 'https://www.linkedin.com/in/esther-raphael-6491441a7/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FaGithub size={30} />
                </>
              ),
            href: 'https://github.com/Eceegit',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                    Twitter
                    <FaTwitter size={30} />
                </>
              ),
            href: 'https://twitter.com/EstherRaphael_',
            
        },
        {
            id: 4,
            child: (
                <>
                    Mail
                    <HiOutlineMail size={30} />
                </>
              ),
            href: 'mailto:estherraphael126@gmail.com',
            
        },
        {
            id: 5,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={30} />
                </>
              ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul> 
            {socialLinks.map(({id, child, href, style, download})=>( 
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500" + " " + style}>
                   <a href={href} className='flex justify-between items-center w-full text-white'
                   download={download}
                   target="_blank"
                   rel="noreferrer" 
                   >
                     {child}                     
                   </a>
               </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialIcons