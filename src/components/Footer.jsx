import React from 'react'
import { Link } from 'react-router-dom'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail from '../assets/mail.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-between   max-w-[900px] mx-auto '>

         <div className="links flex gap-10">
              <Link to={"https://www.linkedin.com/in/anup-dhakal-808029241/"} target='main'> <img src={linkedin} className='w-6 hover:opacity-80 transition-opacity'/></Link>
              <Link to={"mailto:dhakalanup96@gmail.com"} target='main'> <img src={mail} className='w-7 hover:opacity-80 transition-opacity'/></Link>
              <Link to={"https://github.com/anupdhakal69"} target='main'> <img src={github} className='w-7 hover:opacity-75 transition-opacity'/></Link>
              <Link to={"https://www.youtube.com/@anupdhakal69"} target='main'> <img src={youtube} className='w-7 hover:opacity-80 transition-opacity'/></Link>
         </div>

         <div className="copyright">
          <p>Copyright &copy; Anup Dhakal - {new Date().getFullYear()}</p>
         </div>

      </footer>
    </div>
  )
}

export default Footer
