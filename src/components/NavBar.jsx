import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='text-white'>
      <div className='fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-5 py-2 lg:px-16 md:px-10 bg-[#2D1E6B]'>
        <div className='flex items-center gap-1'>
          <img src={logo} alt='logo' className='w-8 h-6 max-md:h-4 max-md:w-6'/>
          <p className='text-2xl font-bold max-md:text-xl'>Board</p>
        </div>
        <ul className='flex gap-10 uppercase max-lg:hidden'>
          {['products', 'apps & games', 'Features', 'Support', 'About'].map((item)=>(
              <li key={item}>
                <Link to='/' >{item}</Link>
              </li>
          ))
          }
        </ul>
        <FaShoppingBag className='cursor-pointer max-lg:hidden'/>
        <FaBarsStaggered className='cursor-pointer lg:hidden' onClick={toggleMenu}/>
      </div>
      <div className={`${isOpen ? ' bg-[#2D1E6B] translate-y-0  fixed top-0 right-0 left-0 shadow-lg   rounded-b-2xl py-5 mt-10' : ' -translate-y-full fixed top-0 right-0 left-0' } z-50  duration-700  items-center text-center gap-8 flex flex-col `} >
        <ul className='flex flex-col gap-8 uppercase'>
          {['products', 'apps & games', 'Features', 'Support', 'About'].map((item)=>(
            <li key={item}>
              <Link to='/' onClick={toggleMenu}>{item}</Link>
            </li>
          ))
          }
        </ul>
        <FaShoppingBag className='cursor-pointer '/>
      </div>
    </div>
  )
}
