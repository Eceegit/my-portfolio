import React from 'react'
// myPortfolio
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg' 
// mockup
import installNode from '../assets/portfolio/installNode.jpg'
// teaUp
import navbar from '../assets/portfolio/navbar.jpg'
// afriNat
import reactParallax from '../assets/portfolio/reactParallax.jpg'
// pocketDiction
import reactWeather from '../assets/portfolio/reactWeather.jpg'
// reactCalculator
import usestate from '../assets/portfolio/usestate.jpg'
import afrinat from '../assets/portfolio/afrinat.png'

import dictionary from '../assets/portfolio/dictionary.png'

import calculator from '../assets/portfolio/calculator.png'
import tipCalculatorJS from '../assets/portfolio/tipCalculatorJS.png'

const Portfolio = () => {
    const projects  = [
        {
            id: 1,
            image: afrinat,
            demo: 'https://second-semes-exam.web.app/',
            code: 'https://github.com/Eceegit/AltSchoolS2-Exam'
        },
        {
            id: 2,
            image: dictionary,
            demo: 'https://my-pocket-dictionary.netlify.app/',
            code: 'https://github.com/Eceegit/my-pocket-dictionary/tree/master/dictionary/dictionary'
        },
        {
            // my-portfolio
            id: 3,
            image: navbar,
            demo: 'https://github.com',
            code: 'https://github.com'
        },
        {
            id: 4,
            image: calculator,
            demo: 'https://my-react-app-calculator.netlify.app/',
            code: 'https://github.com/Eceegit/my-react-calculator-app'
        },
        {
            id: 5,
            image: tipCalculatorJS,
            demo: 'https://tip-calculator-vercel.vercel.app/',
            code: 'https://github.com/Eceegit/tip-calculator-vercel'
        },
        {
            id: 6,
            image: usestate,
            demo: 'https://github.com',
            code: 'https://github.com'
        },
    ]
  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='px-4 py-7 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h4 className='text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500 '>Portfolio</h4>
                <p className='py-6 text-xl'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
               {
                projects.map(({id,image,demo,code}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={image} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target='_blank' rel='noreferrer'>Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target='_blank' rel='noreferrer'>Code</a></button>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default Portfolio