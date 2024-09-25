import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='h-20 w-full flex justify-between sm:justify-evenly items-center transition-all'>

       <Link to={'/'}>
         <img src="../logo2.png" alt="" className=' w-40 h-20 object-cover'/>
       </Link>

       <TbMenuDeep className='sm:hidden text-3xl cursor-pointer mr-6' onClick={toggleMenu}/>

       <ul className='hidden sm:flex gap-12 text-xl font-medium tracking-wide'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Me</NavLink>
          </li>
          <li>
            <NavLink to='/skills'>Skills</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio'>Portfolio</NavLink>
          </li>
       </ul>

       <button className='hidden sm:block border bg-gradient-to-r from-cyan-500 to-teal-500 text-lg text-white hover:bg-gradient-to-tl tracking-wide py-2 px-5 rounded-full hover:scale-110 ease-linear duration-200'> <Link to='/contact'> Contact Me </Link> </button>

       {/* sidebar menu for mobile screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-300 transition-all ${showMenu ? 'w-1/2':'w-0'}`}>
            <div className='flex flex-col font-medium'>
                <IoClose className='text-3xl cursor-pointer my-4 absolute right-3' onClick={toggleMenu}/>
                <NavLink onClick={toggleMenu} className="py-3 pl-6 text-xl mt-12" to="/" >Home</NavLink>
                <NavLink onClick={toggleMenu} className="py-3 pl-6 text-xl" to="/about" >About Me</NavLink>
                <NavLink onClick={toggleMenu} className="py-3 pl-6 text-xl" to="/portfolio" >Portfolio</NavLink>
                <NavLink onClick={toggleMenu} className="py-3 pl-6 text-xl" to="/skills" >Skills</NavLink>
                <NavLink onClick={toggleMenu} className="py-3 pl-6 text-xl" to="/contact" >Contact Me</NavLink>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar
