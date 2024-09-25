import React from 'react'
import github from "../assets/github.svg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <div className='max-w-[90vw] sm:max-w-[70vw] md:max-w-[80vw]  mx-auto min-h-[calc(100vh-80px)] flex flex-col gap-10 justify-center items-center sm:flex-row'>

         <div className=' flex flex-col gap-3 sm:max-w-[55%] sm:order-2 order-1'>
              <h1 className='abouth1 sm:text-start text-4xl sm:text-6xl font-medium pt-4 sm:py-0'>About Me</h1>

              <p className='text-gray-700 text-lg text-justify font-medium'> Hey, I'm Anup Dhakal. My love for coding began when I discovered how much fun it is to build things from scratch. Currently studying for my Bachelor's in Computer Applications, I’ve already worked on exciting projects. I thrive on challenges, especially when it comes to learning new tech like React and Node.js. </p>

              <p className='text-gray-700 text-lg text-justify font-medium'>Outside of coding, I love exploring new languages and diving into insightful books that inspire creativity. I'm always open to new opportunities and connections, so feel free to reach out!</p>
              
              <div className="socials flex flex-col mt-2 gap-2 sm:gap-3 order-3">
                  <h2 className='text-2xl sm:text-3xl sm:my-[-6px] font-medium'>Connect with me</h2>
                  <div className='flex gap-3 items-center'>
                    <Link to={'https://github.com/anupdhakal69'} ><img src={github} alt="" className='w-6 sm:w-5' title='github'/></Link>
                    <Link to={'https://www.linkedin.com/in/anup-dhakal-808029241/'} ><img src={"linkedin.png"} alt="" className='w-6 sm:w-5' title='linkedin'/></Link>
                    <Link to={'https://www.youtube.com/@anupdhakal69'} ><img src={"youtube.png"} alt="" className='w-7 sm:w-7' title='youtube'/></Link>
                  </div>
              </div>
         </div>


         <img src="anup.jpg" alt="" className='h-80 w-screen sm:w-72 sm:max-w-[45%] object-cover rounded-lg  sm:order-1 order-2'/>

   </div>
  )
}

export default About


