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
                src: html
            },
            {
                id: 2,
                src: css
            },
            {
                id: 3,
                src: tailwind
            },
            {
                id: 4,
                src: javascript
            },
            {
                id: 5,
                src: react
            },
            {
                id: 6,
                src: github
            },
        ] 

  return (
    <div name="experience" className='md:h-screen bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 py-7 text-white '>
            <div className='pb-8'>
                <h4 className='text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Experience</h4>
                <p className='text-xl py-6'>These are the teckhnologies I've worked with</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                {
                    stacks.map((id,src)=>(
                        <div key={id}>
                            <img src={src} alt=''className='shadow-md shadow-gray-500 '/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience