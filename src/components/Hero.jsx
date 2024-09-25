import React from 'react'

const Hero = () => {
  return (

    <div className='  max-w-[400px] flex flex-col gap-5 items-center justify-center sm:max-w-[900px] mx-auto h-full'>

        <img src="anup.jpg" alt="" className='h-48 sm:h-60 w-48 sm:w-60 object-cover rounded-full'/>

        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold leading-10'> <span>I'm Anup Dhakal,</span> full stack developer based in USA.</h1>
          <p className='text-center text-md '>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        </div>

        <div className='flex gap-5'>
          <button className='py-2 px-6 border rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-lg text-white'>Hire Me</button>
          <button className='py-2 px-6 border rounded-full text-lg'>My resume</button>
        </div>
    </div>
  )
}

export default Hero
