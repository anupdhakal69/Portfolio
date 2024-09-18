import React from 'react'
import { Link } from 'react-router-dom'
import anup from '../assets/anuppng.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import youtube from '../assets/youtube.svg'

const Hero = () => {
  return (
    <div className='flex justify-center items-center gap-44 mt-7'>
       
       <div className='max-w-[400px] text-justify flex flex-col gap-4 tracking-wider'>
           <h1 className='text-4xl font-semibold'>Hi, I'm <span className='text-orange-500'>Anup!</span> </h1>
           <p className='text-lg'>I'm a full-stack developer focused on building efficient and user-friendly web applications. Passionate about coding, problem-solving, and always learning something new.</p>

           <div className='flex justify-center gap-7 items-center mt-2'>
            <Link to={"https://www.linkedin.com/in/anup-dhakal-808029241/"} target='main'> <img src={linkedin} className='w-6'/></Link>
            <Link to={"mailto:dhakalanup96@gmail.com"} target='main'> <img src={mail} className='w-7'/></Link>
            <Link to={"https://github.com/anupdhakal69"} target='main'> <img src={github} className='w-7 '/></Link>
            <Link to={"https://www.youtube.com/@anupdhakal69"} target='main'> <img src={youtube} className='w-7'/></Link>
           </div>
       </div>

        <div className='mb-20'>
           <img src={anup} alt="profile" className='w-64 ' /> 
        </div>

    </div>
  )
}

export default Hero
