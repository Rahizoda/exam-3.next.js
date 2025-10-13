"use client"
import Image from 'next/image';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Section3 from '../component/section3';
import { Button } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useRouter } from 'next/navigation';

const courses = [
  {
    language: "English",
    title: "Master English: From Basics to Fluency",
    instructor: "Jeremy Gray",
    price: "$40.00",
    booked: "0%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course9-740x600.webp"
  },
  {
    language: "French",
    title: "Avanced English Writind and Speaking",
    instructor: "Marie Dubois",
    price: "$35.00",
    booked: "70%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course10-740x600.webp"
  },
  {
    language: "German",
    title: "German From All Levels ,Path to Proficiency  ",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course7-740x600.webp"
  },
  {
    language: "Italian",
    title: "Fluent Spanish Your Global Gateway ",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course5-740x600.webp"
  },
  {
    language: "German",
    title: "German Courses For Busines Compony ",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course3-740x600.webp"
  },
  {
    language: "Chinese",
    title: "Unlook the Power of English Communicatiom",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course2-740x600.webp"
  },
  {
    language: "Spanish",
    title: "Spanish for Everyday and Beyond for Kids",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course1-740x600.webp"
  },
  {
    language: "English",
    title: "Master English for Success",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/tutor-course-1-740x600.webp"
  },
  {
    language: "Italian",
    title: "English for Exams Ace IELTS, TOELF",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course8-740x600.webp"
  },
  {
    language: "Spanish",
    title: "English Pronunciation Perfection ",
    instructor: "Carlos Ruiz",
    price: "$30.00",
    booked: "25%",
    image: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/course6-740x600.webp"
  },

];


const page = () => {
  const router = useRouter()
  return (
    <div className='pt-[100px] bg-accent dark:bg-[#050524]'>

      <div>

        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-8 sm:py-12 lg:py-16">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/50"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl translate-y-36 -translate-x-36"></div>

          {/* Header Section */}
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end px-4 sm:px-6 lg:px-8 xl:px-12 mb-8 sm:mb-12 lg:mb-16 relative z-10'>
            <div className='mb-6 lg:mb-0'>
              <p className='text-blue-600 font-semibold text-sm sm:text-base mb-2 sm:mb-3 tracking-wider'>BENEFITS OF OUR COURSES</p>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent'>
                Learn, Practice, Perfect with <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professionals</span>
              </h1>
            </div>

            {/* Animated Button */}
            <button
              onClick={() => router.push("/courses")}
              className="group flex items-center justify-start w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 hover:w-48 sm:hover:w-56 lg:hover:w-60"
            >
              <div className="flex items-center justify-center w-full transition-all duration-500 group-hover:justify-start group-hover:pl-4">
                <EastIcon sx={{
                  color: "white",
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.75rem"
                  }
                }} />
              </div>
              <div className="absolute right-4 transform translate-x-full opacity-0 text-white text-sm sm:text-base font-semibold transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap">
                View all Courses
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Courses Carousel */}
          <div
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className='w-[95%] mx-auto overflow-x-auto scrollbar-hide flex gap-4 sm:gap-6 lg:gap-8 pb-4 sm:pb-6 relative z-10 snap-x snap-mandatory'
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] snap-start group'
              >
                {/* Image Container */}
                <div className='relative overflow-hidden rounded-2xl sm:rounded-3xl mb-4'>
                  <img
                    src={course.image}
                    alt={course.title}
                    className='w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  {/* Gradient Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>

                {/* Course Card */}
                <div className='group-hover:scale-105 transition-all duration-500 bg-white/80 dark:bg-[#0e0e33]/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl relative -mt-16 sm:-mt-20'>

                  {/* Language Badge */}
                  <span className='inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white cursor-pointer mb-3 sm:mb-4'>
                    {course.language}
                  </span>

                  {/* Course Title */}
                  <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 cursor-pointer'>
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4'>
                    By <span className='font-semibold text-gray-700 dark:text-gray-300'>{course.instructor}</span>
                  </p>

                  {/* Price & Booked Info */}
                  <div className='flex justify-between items-center mb-3 sm:mb-4'>
                    <p className='text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                      {course.price}
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      {course.booked} Booked
                    </p>
                  </div>

                  {/* Divider */}
                  <hr className='border-gray-200 dark:border-gray-600 mb-3 sm:mb-4' />

                  {/* Add to Cart Button */}
                  <Button
                    variant='contained'
                    fullWidth
                    className='!bg-gradient-to-r !from-blue-600 !to-purple-600 !text-white !py-2.5 sm:!py-3 !rounded-xl !font-semibold !shadow-lg hover:!shadow-xl !transition-all !duration-300 hover:!scale-105 hover:!from-blue-700 hover:!to-purple-700 active:!scale-95'
                    startIcon={<LocalGroceryStoreOutlinedIcon />}
                  >
                    Add to Cart
                  </Button>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>


        </div>


      </div>

      <div style={{
        scrollbarColor: "transparent transparent",
        scrollbarWidth: "none",
        msOverflowStyle: "none"  // для IE и Edge
      }} className='flex p-[50px_0px] w-[95%]  overflow-x-auto   m-auto flex-row md:flex-row justify-around text-center items-center gap-8'>

        {/* Card 1 - Online & Offline Options */}
        <div className='group relative border border-gray-300 rounded-3xl p-8 min-w-[320px]  h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 hover:bg-gradient-to-br from-blue-50 to-white cursor-pointer overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10'>
            <div className='w-20 h-20 m-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-600 group-hover:to-blue-700 shadow-lg'>
              <svg className='w-10 h-10 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path fill="currentColor" d="M62,58.1843V48.8157A2.9926,2.9926,0,0,0,61,43H55.8157A2.9635,2.9635,0,0,0,56,42a2.995,2.995,0,0,0-2-2.8157V37h3.1807L55.4316,26.5084A3.4776,3.4776,0,0,0,54,20.6632V16.3105l-2.6039-.9919L59.6924,12,32,.9229,4.3076,12,16,16.6771V29H12A7.9913,7.9913,0,0,0,7.3386,43.4884,10.4993,10.4993,0,0,0,10.5,64H61a2.9926,2.9926,0,0,0,1-5.8157ZM60,51H42v2H60v5H10.3228a4.5,4.5,0,0,1,0-9H60ZM52,39H12a2,2,0,0,1,0-4H23.9755A30.1154,30.1154,0,0,0,32,36a30.1148,30.1148,0,0,0,8.0245-1h9.1283l-.3335,2H52Zm-4.551-8H49.82l-.3334,2H44.8613A12.1476,12.1476,0,0,0,47.449,31Zm7.37,4H51.1807L52.44,27.4434a2.8,2.8,0,0,0,1.12,0ZM54.5,24A1.5,1.5,0,1,1,53,22.5,1.5017,1.5017,0,0,1,54.5,24ZM52,17.69v2.9737a3.4776,3.4776,0,0,0-1.4316,5.8452L50.153,29H48V16.6771l.6548-.262ZM32,3.0771,54.3076,12l-5.67,2.2679L32.356,8.0654l-.712,1.8692,14.2527,5.43L32,20.9229,9.6924,12Zm0,20,14-5.6v12.144C45.104,30.55,41.1553,34,32,34c-9.165,0-13.1123-3.458-14-4.3779V17.4771ZM6,37a6.0066,6.0066,0,0,1,6-6h4.551a12.1476,12.1476,0,0,0,2.5877,2H12a4,4,0,0,0,0,8H53a1,1,0,0,1,0,2H12A6.0066,6.0066,0,0,1,6,37ZM61,62H10.5a8.5,8.5,0,0,1,0-17H61a1,1,0,0,1,0,2H10.3228a6.5,6.5,0,0,0,0,13H61a1,1,0,0,1,0,2Z"></path>
                <rect x="10" y="54" width="28" height="2" fill="currentColor"></rect>
              </svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-blue-700 mb-4'>Flexible Learning Modes</h2>
            <p className='text-[16px] text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed mb-6'>
              Choose between online and offline classes with native-speaking instructors who bring cultural insights and real-world context to every lesson.
            </p>
            <button className="group/btn relative flex items-center justify-start w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 shadow-lg hover:w-[140px] hover:rounded-xl active:scale-95 hover:from-blue-700 hover:to-blue-800">
              <div className="flex items-center justify-center w-12 transition-all duration-300 group-hover/btn:justify-start group-hover/btn:pl-4">
                <span className="text-white text-lg">→</span>
              </div>
              <div className="absolute right-4 transform translate-x-full opacity-0 text-white font-semibold transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Explore
              </div>
            </button>
          </div>
        </div>

        {/* Card 2 - Flexible Scheduling */}
        <div className='group relative border border-gray-300 rounded-3xl p-8 min-w-[320px]  h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-green-400 hover:bg-gradient-to-br from-green-50 to-white cursor-pointer overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10'>
            <div className='w-20 h-20 m-auto mb-6 bg-gradient-to-br from-green-100 to-green-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-green-600 group-hover:to-green-700 shadow-lg'>
              <svg className='w-10 h-10 text-white' xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512">
                <path fill="currentColor" d="m31 23h2v2h-2z"></path>
                <path fill="currentColor" d="m31 51h2v2h-2z"></path>
                <path fill="currentColor" d="m24 24.876h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -9.589 15.968)"></path>
                <path fill="currentColor" d="m38 49.124h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -19.838 26.217)"></path>
                <path fill="currentColor" d="m18.876 30h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -16.909 32.712)"></path>
                <path fill="currentColor" d="m43.124 44h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -16.91 60.711)"></path>
                <path fill="currentColor" d="m17 37h2v2h-2z"></path>
                <path fill="currentColor" d="m45 37h2v2h-2z"></path>
                <path fill="currentColor" d="m18.876 44h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -19.822 15.946)"></path>
                <path fill="currentColor" d="m43.124 30h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -9.589 26.217)"></path>
                <path fill="currentColor" d="m24 49.124h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -30.911 46.742)"></path>
                <path fill="currentColor" d="m38 24.876h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -2.898 46.735)"></path>
                <path fill="currentColor" d="m33 35.1843v-8.1843h-2v8.1843a2.9926 2.9926 0 1 0 3.8157 3.8157h6.1843v-2h-6.1843a2.9951 2.9951 0 0 0 -1.8157-1.8157zm-1 3.8157a1 1 0 1 1 1-1 1.0013 1.0013 0 0 1 -1 1z"></path>
                <path fill="currentColor" d="m32 19a19 19 0 1 0 19 19 19.0216 19.0216 0 0 0 -19-19zm0 36a17 17 0 1 1 17-17 17.019 17.019 0 0 1 -17 17z"></path>
              </svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-green-700 mb-4'>Learn on Your Schedule</h2>
            <p className='text-[16px] text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed mb-6'>
              Morning, evening, and weekend classes designed for working professionals and students. Balance your education with your lifestyle.
            </p>
            <button className="group/btn relative flex items-center justify-start w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 shadow-lg hover:w-[140px] hover:rounded-xl active:scale-95 hover:from-green-700 hover:to-green-800">
              <div className="flex items-center justify-center w-12 transition-all duration-300 group-hover/btn:justify-start group-hover/btn:pl-4">
                <span className="text-white text-lg">→</span>
              </div>
              <div className="absolute right-4 transform translate-x-full opacity-0 text-white font-semibold transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Explore
              </div>
            </button>
          </div>
        </div>

        {/* Card 3 - Skill-Based Focus */}
        <div className='group relative border border-gray-300 rounded-3xl p-8 min-w-[320px]  h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-purple-400 hover:bg-gradient-to-br from-purple-50 to-white cursor-pointer overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10'>
            <div className='w-20 h-20 m-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-purple-600 group-hover:to-purple-700 shadow-lg'>
              <svg className='w-10 h-10 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
                <path fill="currentColor" d="M57,3H10v7.05a10.129,10.129,0,0,0-3.6895.9345C4.82,11.7285,4,12.8,4,14s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,17.95v4.1a10.129,10.129,0,0,0-3.6895.9345C4.82,23.7285,4,24.8,4,26s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,29.95v4.1a10.129,10.129,0,0,0-3.6895.9345C4.82,35.7285,4,36.8,4,38s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,41.95v4.1a10.129,10.129,0,0,0-3.6895.9345C4.82,47.7285,4,48.8,4,50s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,53.95V61H57a3.0033,3.0033,0,0,0,3-3V6A3.0033,3.0033,0,0,0,57,3ZM7.2041,15.2266C6.4614,14.8555,6,14.3853,6,14s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,12.0489V15.92A7.9453,7.9453,0,0,1,7.2041,15.2266Zm0,12C6.4614,26.8555,6,26.3853,6,26s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,24.0489V27.92A7.9453,7.9453,0,0,1,7.2041,27.2266Zm0,12C6.4614,38.8555,6,38.3853,6,38s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,36.0489V39.92A7.9453,7.9453,0,0,1,7.2041,39.2266Zm0,12C6.4614,50.8555,6,50.3853,6,50s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,48.0489V51.92A7.9453,7.9453,0,0,1,7.2041,51.2266ZM50,59H12V53.95a10.129,10.129,0,0,0,3.69-.9345C17.18,52.2715,18,51.2,18,50s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,49.1445,16,49.6147,16,50s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,51.92V41.95a10.129,10.129,0,0,0,3.69-.9345C17.18,40.2715,18,39.2,18,38s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,37.1445,16,37.6147,16,38s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,39.92V29.95a10.129,10.129,0,0,0,3.69-.9345C17.18,28.2715,18,27.2,18,26s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,25.1445,16,25.6147,16,26s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,27.92V17.95a10.129,10.129,0,0,0,3.69-.9345C17.18,16.2715,18,15.2,18,14s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,13.1445,16,13.6147,16,14s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,15.92V5H50ZM57,5a1.0013,1.0013,0,0,1,1,1v5H52V5ZM52,37.6665V26.3335h6v11.333Zm6,2V51H52V39.6665Zm-6-15.333V13h6V24.3335ZM57,59H52V53h6v5A1.0013,1.0013,0,0,1,57,59Z"></path>
                <path fill="currentColor" d="M24,53H42a3.0033,3.0033,0,0,0,3-3V42a3.0033,3.0033,0,0,0-3-3H24a3.0033,3.0033,0,0,0-3,3v8A3.0033,3.0033,0,0,0,24,53ZM23,42a1.0013,1.0013,0,0,1,1-1H42a1.0013,1.0013,0,0,1,1,1v8a1.0013,1.0013,0,0,1-1,1H24a1.0013,1.0013,0,0,1-1-1Z"></path>
              </svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-purple-700 mb-4'>Targeted Skill Development</h2>
            <p className='text-[16px] text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed mb-6'>
              Master specific competencies through specialized modules in speaking, listening, reading, and writing tailored to your learning goals.
            </p>
            <button className="group/btn relative flex items-center justify-start w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 shadow-lg hover:w-[140px] hover:rounded-xl active:scale-95 hover:from-purple-700 hover:to-purple-800">
              <div className="flex items-center justify-center w-12 transition-all duration-300 group-hover/btn:justify-start group-hover/btn:pl-4">
                <span className="text-white text-lg">→</span>
              </div>
              <div className="absolute right-4 transform translate-x-full opacity-0 text-white font-semibold transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Explore
              </div>
            </button>
          </div>
        </div>

        {/* Card 4 - Active Learning */}
        <div className='group relative border border-gray-300 rounded-3xl p-8 min-w-[320px]  h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-orange-400 hover:bg-gradient-to-br from-orange-50 to-white cursor-pointer overflow-hidden'>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className='relative z-10'>
            <div className='w-20 h-20 m-auto mb-6 bg-gradient-to-br from-orange-100 to-orange-600 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-orange-600 group-hover:to-orange-700 shadow-lg'>
              <svg className='w-10 h-10 text-white' xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512">
                <path fill="currentColor" d="m55 51v-43a5.0059 5.0059 0 0 0 -5-5h-40a5.0059 5.0059 0 0 0 -5 5v5h8v3.0507a10.9915 10.9915 0 0 0 -6 19.4279v13.4355l6-6v13.0859a5.0059 5.0059 0 0 0 5 5h36a5.0059 5.0059 0 0 0 5-5v-5zm-48-40v-3a3 3 0 0 1 6 0v3zm-2 16a9 9 0 1 1 9 9 9.01 9.01 0 0 1 -9-9zm4 9.7857a10.9011 10.9011 0 0 0 10 0v7.3l-5-5-5 5zm12 19.2143a3 3 0 0 1 -6 0v-13.0859l6 6v-13.4355a10.9915 10.9915 0 0 0 -6-19.4279v-8.0507a4.9732 4.9732 0 0 0 -1.002-3h36.002a3.0033 3.0033 0 0 1 3 3v43h-32zm36 0a3.0033 3.0033 0 0 1 -3 3h-32.002a4.9732 4.9732 0 0 0 1.002-3v-3h34z"></path>
              </svg>
            </div>
            <h2 className='text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-orange-700 mb-4'>Interactive Learning Experience</h2>
            <p className='text-[16px] text-gray-600 transition-all duration-300 group-hover:text-gray-700 leading-relaxed mb-6'>
              Engage with games, group discussions, and real-life simulations that transform learning into an exciting, memorable journey.
            </p>
            <button className="group/btn relative flex items-center justify-start w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 shadow-lg hover:w-[140px] hover:rounded-xl active:scale-95 hover:from-orange-700 hover:to-orange-800">
              <div className="flex items-center justify-center w-12 transition-all duration-300 group-hover/btn:justify-start group-hover/btn:pl-4">
                <span className="text-white text-lg">→</span>
              </div>
              <div className="absolute right-4 transform translate-x-full opacity-0 text-white font-semibold transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Explore
              </div>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default page;

