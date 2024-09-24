import { NavLink, Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <div className='h-12 w-full flex justify-around items-center bg-slate-300 '>

       <img src="../logo.png" alt="" className='w-28 md:w-36'/>

       <IoMdMenu className='md:hidden'/>

       <ul className='hidden md:flex gap-10'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/skills'>Skills</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
       </ul>

       <button className='hidden md:block'> <Link to='/contact'> Contact Me </Link> </button>
    </div>
  )
}

export default Navbar
