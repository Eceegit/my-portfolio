import React from 'react'
import {FaHandshake} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='h-screen bg-gradient-to-b from-black to-gray-800 w-full p-4'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full p-4'>
            <div className='text-white pb-8'>
                <h4 className='inline border-b-4 border-gray-500 font-bold text-4xl md:text-5xl'>Contact</h4>
                <p className='py-6 text-xl'>Fill the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/0079f1aa-8b0b-42b3-9016-f9d0bd007f07" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <input type="text" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <textarea name="message" cols="30" rows="10" placeholder='Your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    
                    <button className=" flex items-center mx-auto w-fit px-6 py-3 my-8 rounded-md bg-gradient-to-r from-[#172740] to-blue-400 text-white cursor-pointer hover:scale-110 duration-300">
                        Let's talk
                        <span>
                            <FaHandshake size={25} className='ml-1'/>
                        </span>
                    </button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact