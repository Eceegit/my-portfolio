import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
const Experience = () => {
        const stacks = [
            {
                id: 1,
                src: html,
                name: "HTML",
                style: "shadow-orange-500"
            },
            {
                id: 2,
                src: css,
                name: "CSS",
                style: "shadow-blue-500"
            },
            {
                id: 3,
                src: tailwind,
                name: "TAILWIND",
                style: "shadow-sky-400"
            },
            {
                id: 4,
                src: javascript,
                name: "JAVASCRIPT",
                style: "shadow-yellow-500"
            },
            {
                id: 5,
                src: react,
                name: "REACT",
                style: "shadow-sky-400"
            },
            {
                id: 6,
                src: github,
                name: "GITHUB",
                style: "shadow-white"
            },
        ] 

  return (
    <div name="experience" className='h-screen bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 text-white '>
            <div className=''>
                <h4 className='text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Experience</h4>
                <p className='text-xl py-6'>These are the teckhnologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 gap-8 px-12 sm:px-0'>
                {
                    stacks.map(({id,src,name,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className="w-20 mx-auto "/>
                            <p className='mt-4'>{name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience