import React from 'react'

const Hero = () => {
  return (

    <div className='px-2 mt-10 max-w-[400px] flex flex-col gap-5 items-center sm:max-w-[920px]  mx-auto h-full'>

        <img src="anup.jpg" alt="" className='h-48 sm:h-60 w-48 sm:w-60 object-cover rounded-full'/>

        <div className='flex flex-col gap-4'>
          <h1 className='text-[35px] sm:text-4xl md:text-6xl text-center font-semibold md:font-medium leading-10'> <span className='text-teal-600 herospan'>I'm Anup Dhakal,</span> full stack developer based in USA.</h1>
          <p className='text-center text-md sm:w-[600px] mx-auto font-medium text-gray-700'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        </div>

        <div className='flex gap-5'>
          <button className='py-2 px-7 tracking-wide font-medium border rounded-full bg-gradient-to-r from-teal-500 to-sky-500 text-lg text-white'>Hire Me</button>
          <button className='py-2 px-7 tracking-wide font-medium border-2 border-gray-500 rounded-full text-lg hover:border-teal-600'>My resume</button>
        </div>
    </div>
  )
}

export default Hero
