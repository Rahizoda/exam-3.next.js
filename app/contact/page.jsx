"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import ContactFormDarkMode from '../component/carta';

const page = () => {
   const router = useRouter()
  return (
    <div className='pt-[100px] bg-accent dark:bg-[#050524]'>

      <div className='flex flex-col bg-[#caebfd] dark:bg-[#070727] justify-center  p-[50px_0px] items-center gap-10'>
        <h1 className='text-blue-700 text-[70px] font-extrabold' >Contact</h1>
        <p ><span onClick={() => router.push("/")} className='cursor-pointer hover:underline'>Home  </span>  <EastIcon /> <span className='cursor-pointer underline'>Contact</span></p>
      </div>

      <div className='flex justify-around items-center p-[100px_0px]'>
        <div>
          <p className='text-blue-800'>our contacts</p> <br />
          <h1 className='text-[50px] font-bold'>
            Start Your Language <br />
            Journey with Us
          </h1> <br />
          <button onClick={() => router.push("/courses")} className="group flex items-center justify-start w-11 h-11 bg-blue-600  rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[250px] group-hover:rounded-lg active:translate-x-1 active:translate-y-1">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <EastIcon sx={{ color: "white" }} />
            </div>
            <div className="absolute  right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Check Your Level
            </div>
          </button>
        </div>

        <div>

          <section className="bg-white rounded-2xl dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <p className="mb-8 text-lg">
                Get in touch to discuss your employee wellbeing needs <br /> today. Please give us a call, drop us an email.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Address & Phone */}
                <div>
                  <h3 className="text-blue-600 font-semibold mb-2">ADDRESS:</h3>
                  <p>27 Division St, New York, NY 10002, USA</p>
                </div>
                <div>
                  <h3 className="text-blue-600 font-semibold mb-2">PHONE:</h3>
                  <p>+1 800 123 456 789</p>
                </div>

                {/* Mail & Socials */}
                <div>
                  <h3 className="text-blue-600 font-semibold mb-2">MAIL US:</h3>
                  <p>ling@mail.com</p>
                </div>
                <div>
                  <h3 className="text-blue-600 font-semibold mb-2">IN SOCIALS:</h3>
                  <Stack direction="row" spacing={2}>
                    <IconButton color="primary" aria-label="Facebook">
                      <Facebook />
                    </IconButton>
                    <IconButton color="primary" aria-label="LinkedIn">
                      <LinkedIn />
                    </IconButton>
                    <IconButton color="primary" aria-label="Instagram">
                      <Instagram />
                    </IconButton>
                  </Stack>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>


      <ContactFormDarkMode/>
    </div>
  );
}

export default page;
