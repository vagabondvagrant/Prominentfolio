import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const NavBar = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-[black] text-gray-300 ${navBar ? 'bg-red-500' : ''}`}>
      <div>
      </div>
      <ul className='hidden md:flex'>
        <li className="hover:bg-gray-700 hover:rounded-md"><Link to="home"  duration={500}>Home</Link></li>
        <li className="hover:bg-gray-700 hover:rounded-md"><Link to="skills" duration={500}>TechStack</Link></li>
        <li className="hover:bg-gray-700 hover:rounded-md"><Link to="contact" duration={500}>Contact</Link></li>
        <li className="hover:bg-gray-700 hover:rounded-md"><Link to="Work"  duration={500}>Work</Link></li>
        <li className="hover:bg-gray-700 hover:rounded-md"><Link to="about"  duration={500}>About</Link></li>
      </ul>

      <div onClick={toggleNavBar} className='md:hidden z-10'>
        {!navBar ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={
        !navBar
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl' ><Link onClick={toggleNavBar} to="home" >Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={toggleNavBar} to="skills"  >TechStack</Link></li>
        <li className='py-6 text-4xl'><Link onClick={toggleNavBar} to="contact"  >Contact</Link></li>
        <li className='py-6 text-4xl'><Link onClick={toggleNavBar} to="Work"  >Work</Link></li>
        <li className='py-6 text-4xl'><Link onClick={toggleNavBar} to="about"  >About</Link></li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-600'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vagabondvagrant?tab=repositories'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Contact <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
