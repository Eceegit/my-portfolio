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

const Portfolio = () => {
  return (
    <div name="porfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='px-4 py-7 max-w-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h4 className='text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500 '>Portfolio</h4>
                <p className='py-6 text-xl'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                <div>
                    <img src={reactWeather} alt=""  />
                    <div>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio