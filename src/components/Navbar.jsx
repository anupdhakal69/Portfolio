import { NavLink, Link } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";


const Navbar = () => {


  return (
    <div className='h-16 w-full flex justify-between md:justify-evenly items-center '>

       <img src="../logo.png" alt="" className='w-36'/>

       <TbMenuDeep className='md:hidden text-4xl cursor-pointer mr-6'/>

       <ul className='hidden md:flex gap-12 text-lg font-medium'>
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

       <button className='hidden md:block bg-teal-700 text-white py-2 px-5 rounded-full'> <Link to='/contact'> Contact Me </Link> </button>
    </div>
  )
}

export default Navbar
