import React from 'react'
import { Link } from 'react-router-dom'
import anup from '../assets/anuppng.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import youtube from '../assets/youtube.svg'
import { toast } from 'react-toastify';

const Hero = () => {

  const handleHireButton = () => {
      toast.error('Sorry! I am very busy')
  }

  return (
    <div className='flex justify-between max-w-[900px] mx-auto items-center mt-8'>
       
       <div className='sm:max-w-[400px]  sm:text-justify flex flex-col gap-5 tracking-wider'>

           <h1 className='text-2xl sm:text-4xl font-semibold'>Hi, I'm <span className='text-orange-500'>Anup!</span> </h1>

           <p className='sm:text-lg'>I'm a full-stack developer focused on building efficient and user-friendly web applications. Passionate about coding, problem-solving, and always learning something new.</p>

           {/* <div className='flex  gap-4 items-center'>
            <Link to={"https://www.linkedin.com/in/anup-dhakal-808029241/"} target='main'> <img src={linkedin} className='w-6'/></Link>
            <Link to={"mailto:dhakalanup96@gmail.com"} target='main'> <img src={mail} className='w-7'/></Link>
            <Link to={"https://github.com/anupdhakal69"} target='main'> <img src={github} className='w-7 '/></Link>
            <Link to={"https://www.youtube.com/@anupdhakal69"} target='main'> <img src={youtube} className='w-7'/></Link>
           </div> */}

           <button className='transition-all duration-200 hover:bg-orange-800 hover:border-orange-800 border rounded text-xl w-[32%] py-2 px-3 active:scale-95' onClick={handleHireButton}>Hire Me</button>



       </div>

        <div className='mb-20'>
           <img src={anup} alt="profile" className=' md:w-64' /> 
        </div>
  
    </div>
  )
}

export default Hero
