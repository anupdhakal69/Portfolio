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
    <div className='h-16 w-full flex justify-between sm:justify-evenly items-center '>

       <Link to={'/'}>
         <img src="../logo.png" alt="" className=' w-32 '/>
       </Link>

       <TbMenuDeep className='sm:hidden text-3xl cursor-pointer mr-6' onClick={toggleMenu}/>

       <ul className='hidden sm:flex gap-12 text-lg font-medium tracking-wide'>
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

       <button className='hidden sm:block bg-teal-700 hover:bg-teal-900 duration-200 text-white py-2 px-5 rounded-full'> <Link to='/contact'> Contact Me </Link> </button>

       {/* sidebar menu for mobile screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-200 transition-all ${showMenu ? 'w-1/3':'w-0'}`}>
            <div className='flex flex-col  font-medium'>
                <IoClose className='text-3xl cursor-pointer my-4 ml-4' onClick={toggleMenu}/>
                <NavLink onClick={toggleMenu} className="py-2 pl-6 " to="/" >Home</NavLink>
                <NavLink onClick={toggleMenu} className="py-2 pl-6 " to="/about" >About</NavLink>
                <NavLink onClick={toggleMenu} className="py-2 pl-6 " to="/skills" >Skills</NavLink>
                <NavLink onClick={toggleMenu} className="py-2 pl-6 " to="/services" >Services</NavLink>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar
