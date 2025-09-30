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
    <div className='pt-[100px]'>

      <div className='flex flex-col bg-[#caebfd] justify-center  p-[50px_0px] items-center gap-10'>
        <h1 className='text-blue-700 text-[70px] font-extrabold' >Courses</h1>
        <p ><span onClick={() => router.push("/")} className='cursor-pointer hover:underline'>Home  </span>  <EastIcon /> <span className='cursor-pointer underline'>Courses</span></p>
      </div>

      <div>
      <div className='flex justify-between p-[40px] items-end font-bold pr-[130px]'>
        <div>
          <p className='text-blue-600'> our courses</p>
          <h1 className='text-4xl'>Learn, Practice, Perfect with <br /> Professionals</h1>
        </div>
        
      </div>



      <div  className=' w-[95%] m-auto   flex flex-wrap justify-start items-start   '>
        {courses.map((course, index) => (
          <div key={index} className='w-[400px] h-[500px] ' style={{ borderRadius: "10px", padding: "15px", fontFamily: "sans-serif" }}>
            <img src={course.image} alt={course.title} style={{ width: "100%", borderRadius: "10%", marginBottom: "10px" }} />
            <div className=' h-[250px] hover:scale-110 duration-500 bg-white dark:bg-[#0e0e33] border  p-[20px] rounded-2xl relative bottom-[100px]'>
            <span className='font-bold hover:bg-blue-600 hover:text-white duration-500 cursor-pointer w-[150px] mb-[10px] text-blue-600 rounded-2xl p-[5px] bg-[#dbd6d6]'>{course.language}</span>
            <h3 className='text-[18px] font-bold pb-[10px] hover:text-blue-600 cursor-pointer'>{course.title}</h3>
              <p className='pb-[10px] text-[13px] text-gray-500'> By {course.instructor}</p>
            <div className='flex justify-between'>
            <p className='text-blue-600 font-bold'>{course.price}</p>
            <p>{course.booked} Booked</p>
            </div> <hr className='mt-[10px] p-[10px]'/>
            <Button variant='contained' fullWidth className='hover:!bg-accent hover:!text-blue-600'>
                <LocalGroceryStoreOutlinedIcon/>
                Add to Cart
            </Button >
           </div>
          </div>
        ))}
      </div>

    </div>





    </div>
  );
}

export default page;

