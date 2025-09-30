'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import EastIcon from '@mui/icons-material/East';


const page = () => {
  const router = useRouter()
  return (
    <div className='pt-[100px]'>
      <div className='flex flex-col bg-[#caebfd] justify-center  p-[50px_0px] items-center gap-10'>
        <h1 className='text-blue-700 text-[70px] font-extrabold' >Aboute Us</h1>
        <p ><span onClick={() => router.push("/")} className='cursor-pointer hover:underline'>Home  </span>  <EastIcon /> <span className='cursor-pointer underline'>Aboute Us</span></p>
      </div>

      <div>

        <div>

          <p>who we are</p>
          <h1>Learn & Practice <br />
            with Professionals</h1>
          <p>
            With expert instructors, interactive lessons, and a flexible online platform, our courses focus on building confidence in speaking, writing, reading, and listening. You'll gain practical language skills, expand your vocabulary, and master grammar through engaging activities and real-world practice

          </p>
        </div>
        <img decoding="async" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/about_wom.webp" alt="about_wom"></img>
        <img decoding="async" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/about_flag.webp" alt="about_flag"></img>
      </div>

    </div>
  )
}

export default page

