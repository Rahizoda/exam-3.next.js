

import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { Button } from '@mui/material';
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
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useRouter } from 'next/navigation';



const Section3 = () => {
  const router = useRouter()
  return (
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
  )
}

export default Section3

