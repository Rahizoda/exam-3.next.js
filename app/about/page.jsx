'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import EastIcon from '@mui/icons-material/East';


const page = () => {
  const router = useRouter()
  return (
    <div className='pt-[100px] bg-accent dark:bg-[#050524]'>
      <div className='flex flex-col bg-[#caebfd] dark:bg-[#070727] justify-center  p-[50px_0px] items-center gap-10'>
        <h1 className='text-blue-700 text-[70px] font-extrabold' >Aboute Us</h1>
        <p ><span onClick={() => router.push("/")} className='cursor-pointer hover:underline'>Home  </span>  <EastIcon /> <span className='cursor-pointer underline'>Aboute Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-[20px] justify-around items-center p-[100px_0px]'>

        <div>

          <p className='text-blue-500'>who we are</p>
          <h1 className='text-[50px] font-bold '>Learn & Practice <br />
            with Professionals</h1> <br />
          <p className='text-[17px] text-gray-600'>
            With expert instructors, interactive lessons, and a <br />
            flexible online platform, our courses focus on building <br />
            confidence in speaking, writing, reading, and listening.  <br />
            You'll gain practical language skills, expand your <br />
            vocabulary, and master grammar through engaging <br />
            activities and real-world practice

          </p> <br />
          <button onClick={() => router.push("/courses")} className="group flex items-center justify-start w-11 h-11 bg-blue-600  rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[250px] group-hover:rounded-lg active:translate-x-1 active:translate-y-1">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <EastIcon sx={{ color: "white" }} />
            </div>
            <div className="absolute  right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Check Your Level
            </div>
          </button>
        </div>
        <img className='w-[700px] h-[500px] ' decoding="async" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/about_wom.webp" alt="about_wom"></img>
      </div>
      <img className='w-[450px] h-[450px] absolute top-[500px] right-[8%] ' decoding="async" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/about_flag.webp" alt="about_flag"></img>


      <div className="scroll-container w-[500px] m-auto pb-[50px]">
        <div className="scroll-content  text-6xl text-blue-600 font-bold">
          german + spanish + italian + chines + france + america + poland + german + spanish + italian + german + spanish + italian + german + spanish + italian + german + spanish + italian + german + spanish + italian + chines + france + america + poland +
        </div>
      </div>

    </div>
  )
}

export default page

