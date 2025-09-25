import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-[20px]'>
      <div className='flex items-center justify-center gap-3'>
      <img alt="" className="ytCoreImageHost rounded-[50%] w-[70px] yt-spec-avatar-shape__image ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleToFill ytCoreImageLoaded" src="https://yt3.googleusercontent.com/LpHa_hOEw1anos7wppFAF_WCAh4BUOIinCB5QKSgWgtghjbJdZcjQHzAx2lnx2o77PIz9R9MtQ=s160-c-k-c0x00ffffff-no-rj"></img>
      <h1 className='text-2xl font-serif'>Intelect</h1>
      </div>
      <div className='flex justify-center items-center gap-[40px] font-bold text-2xl'>
        <a href="">Home</a>
        <a href="">Courses</a>
        <a href="">Aboute Us</a>
        <a href="">Contact</a>
      </div>
      <div className='flex gap-5 items-center justify-center'>
        <div>
        <input className="w-64 px-4  py-2 border-b border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder='Search...'  type="text" name="" id="" />
        </div>
         <AnimatedThemeToggler />
         <ShoppingBagOutlinedIcon sx={{fontSize:"40px", fontFamily:"inherit"}}/>
      </div>
    </nav>
  )
}

export default Navbar
