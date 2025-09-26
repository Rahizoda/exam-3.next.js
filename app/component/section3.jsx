

import React from 'react'
import EastIcon from '@mui/icons-material/East';
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



const Section3 = () => {
  return (
    <div>
      <div className='flex justify-between p-[40px] items-end font-bold '>
        <div>
          <p className='text-blue-600'> benefits of our courses</p>
          <h1 className='text-4xl'>Learn, Practice, Perfect with <br /> Professionals</h1>
        </div>
        <button className="group flex items-center justify-start w-11 h-11 bg-blue-600  rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[250px] group-hover:rounded-lg active:translate-x-1 active:translate-y-1">
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <EastIcon sx={{ color: "white" }} />
          </div>
          <div className="absolute  right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Wiev all Courses
          </div>
        </button>
      </div>



      <div style={{ scrollbarColor: "transparent transparent" }} className=' w-[95%] m-auto overflow-auto scrollbar-transparent flex '>
        {courses.map((course, index) => (
          <div key={index} className='min-w-[300px]' style={{ borderRadius: "10px", padding: "15px", fontFamily: "sans-serif" }}>
            <img src={course.image} alt={course.title} style={{ width: "100%", borderRadius: "10%", marginBottom: "10px" }} />
            <div className=' h-[250px] hover:scale-110 duration-500 bg-white border  p-[20px] rounded-2xl relative bottom-[100px]'>
            <span className='font-bold hover:bg-blue-600 hover:text-white duration-500 cursor-pointer w-[150px] mb-[10px] text-blue-600 rounded-2xl p-[5px] bg-[#dbd6d6]'>{course.language}</span>
            <h3 className='text-[18px] font-bold pb-[10px] hover:text-blue-600 cursor-pointer'>{course.title}</h3>
              <p className='pb-[10px] text-[13px] text-gray-500'> By {course.instructor}</p>
            <div className='flex justify-between'>
            <p className='text-blue-600 font-bold'>{course.price}</p>
            <p>{course.booked} Booked</p>
            </div> <hr className='mt-[10px] p-[10px]'/>
            <button style={{ backgroundColor: "#0078d4", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px" }}>
              Add to Cart
            </button>
           </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Section3

