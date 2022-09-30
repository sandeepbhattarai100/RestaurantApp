import React from 'react'
import Logo from '../images/logo.png'
import Avatar from '../images/avatar.png'
import {BsMinecartLoaded} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
        {/* for desktop and tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'}className='flex items-center gap-2'>
            <img src={Logo} className='w-6 object-cover' alter='logo'/>
            <p className='text-headingcolor text-xl font-bold '>Cook</p>
        </Link>
       <div className='flex items-center'>
       <ul className='flex items-center gap-5 cursor-pointer '>
            <li classname='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Home</li>
            <li classname='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Menu</li>
            <li classname='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>About Us</li>
            <li classname='text-base text-textColor hover:text-headingColor duration-100 transistion-all ease-in-out cursor-pointer'>Service</li>
        </ul>
        <div classname='relative flex items-center justify-center'>
            <BsMinecartLoaded className='text-textcolor text-2xl ml-8 cursor-pointer'/>
            <div className=' absolute w-5 h-5 top-5 ml-8 bg-red-600 rounded-full flex items-center justify-center'>
                <p className=' text-sm  text-white font-semibold'>2</p>
            </div>
            
        </div>
        <motion.img whileTap={{scale:0.6}}
         src={Avatar} className='w-10 ml-5 drop-shadow-xl' alt='profileimage'/>
       </div>
       
      </div>
   
      {/* for mobile devices
      <div className='flex md-hidden h-full'>
        
      </div> */}
    </header>
  )
}

export default Header;