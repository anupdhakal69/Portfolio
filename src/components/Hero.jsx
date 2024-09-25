import React from 'react'
import {Link} from "react-router-dom"
import github from '../assets/github.svg'
import youtube from "../assets/youtube.svg"

const Hero = () => {
  return (

    <div className='px-2 max-w-[400px] flex flex-col gap-5 items-center justify-center sm:max-w-[900px]  mx-auto h-[calc(100vh-80px)]'>

        <img src="anup.jpg" alt="" className='h-48 sm:h-56 w-48 sm:w-56 object-cover rounded-full'/>

        <div className='flex flex-col gap-4'> 
          <h1 className='text-[35px] sm:text-4xl text-gray-800 md:text-6xl text-center font-semibold md:font-medium leading-tight'> <span className='herospan'>I'm Anup Dhakal,</span> full stack developer based in USA.</h1>
          <p className='text-center text-md sm:w-[600px] mx-auto font-medium text-gray-700'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        </div>

        {/* <div className="socials flex gap-4 my-[-8px]">
          <Link to={'https://github.com/anupdhakal69'} ><img src={github} alt="" className='w-6 sm:w-5' title='github'/></Link>
          <Link to={'https://www.youtube.com/@anupdhakal69'} ><img src={youtube} alt="" className='w-7 sm:w-5' title='youtube'/></Link>
        </div> */}

        <div className='flex gap-5 mb-12 sm:mb-0 transition-all'>
          <button className='py-2 px-7 tracking-wide font-medium border rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-lg text-white hover:scale-110 ease-in-out duration-200'>Hire Me</button>
          <button className='py-2 px-7 tracking-wide font-medium border-2 border-gray-500 rounded-full text-lg hover:border-teal-600'>My resume</button>
        </div> 
    </div>
  )
}

export default Hero
