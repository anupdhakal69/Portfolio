import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {


  return (
    <>
      <header className="flex justify-between max-w-[900px]  mx-auto items-center sticky top-0 py-5  mt-6 tracking-[1.1px]">

          <div className="sm:hidden">
          <RxHamburgerMenu className="cursor-pointer"/>
          </div>

          <div>
            <Link to={"/"}><p className="text-3xl tracking-wider font-semibold"><span className="text-orange-400">A</span>nup </p></Link>
          </div>


          <nav className="sm:flex hidden gap-8 text-xl ">
               <NavLink to={"/"} className={({isActive}) => `${isActive ? 'text-orange-400': ""} hover:text-gray-400 duration-200` }>Home</NavLink>

               <NavLink to={"/services"} className={({isActive}) => `${isActive ? 'text-orange-400': ""} hover:text-gray-400 duration-200` }>Services</NavLink>

               <NavLink to={"/about"} className={({isActive}) => `${isActive ? 'text-orange-400': ""} hover:text-gray-400 duration-200` }>About</NavLink>

               <NavLink to={"/contact"} className={({isActive}) => `${isActive ? 'text-orange-400': ""} hover:text-gray-400 duration-200` } >Contact</NavLink>
          </nav>

      </header>
    </>
  )
};

export default Navbar;  
