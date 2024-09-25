import React from 'react'

const About = () => {
  return (
   <div className='max-w-[90vw] sm:max-w-[70vw] md:max-w-[80vw]  mx-auto min-h-[calc(100vh-80px)] flex flex-col gap-10 justify-center items-center sm:flex-row'>

         <div className=' flex flex-col gap-3 sm:max-w-[55%] sm:order-2 '>

          <h1 className='abouth1 text-center sm:text-start text-5xl sm:text-6xl font-medium py-6 sm:py-0'>About Me</h1>

          <p className='text-gray-700 text-lg text-justify font-medium'> Hey, I'm Anup Dhakal. My love for coding began when I discovered how much fun it is to build things from scratch. Currently studying for my Bachelor's in Computer Applications, I’ve already worked on exciting projects. I thrive on challenges, especially when it comes to learning new tech like React and Node.js. </p>

          <p className='text-gray-700 text-lg text-justify font-medium'>Outside of coding, I love exploring new languages and diving into insightful books that inspire creativity. I'm always open to new opportunities and connections, so feel free to reach out!</p>
         </div>

         <img src="anup.jpg" alt="" className='h-80 w-72 sm:max-w-[45%] object-cover rounded-lg  sm:order-1'/>
   </div>
  )
}

export default About
