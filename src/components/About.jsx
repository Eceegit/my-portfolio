import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black text-'>
        <div className='max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <h4 className='text-4xl md:text-5xl font-bold inline border-b-4 border-gray-500'>About</h4>
            </div>

            <p className='text-xl mt-20'>
            Esther Raphael is a Frontend Developer and a tech enthusiast. She is currently a student at AltSchoolAfrica School of Engineering. She volunteered as an Operations Lead at Empower Her Community for a year. She started volunteering in the year 2017 for programs such as IWD outreaches and medical outreaches in different states in Nigeria. 
            </p>
            <br/>
            <p className='text-xl'>
            Her journey in tech started fully in the year 2021 at Midtown Tech Hub. She volunteered in the EHC bootcamp 1.0 in the year 2021, where 30 girls where successfully trained in different fields in tech. She aspires to be a world class software engineer.
            </p>
        </div>

    </div>
  )
}

export default About