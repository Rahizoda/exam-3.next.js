"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

const page = () => {
   const router = useRouter()
  return (
    <div className='pt-[100px] bg-accent dark:bg-[#050524]'>

      <div className='flex flex-col bg-[#caebfd] dark:bg-[#070727] justify-center  p-[50px_0px] items-center gap-10'>
        <h1 className='text-blue-700 text-[70px] font-extrabold' >Aboute Us</h1>
        <p ><span onClick={() => router.push("/")} className='cursor-pointer hover:underline'>Home  </span>  <EastIcon /> <span className='cursor-pointer underline'>Contact</span></p>
      </div>

      <div>
        <div>
          <p className='text-blue-800'>our contacts</p>
          <h1>
            Start Your Language <br />
            Journey with Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;
