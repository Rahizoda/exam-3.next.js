// components/LanguageLanding.js
"use client";
import React, { useRef, useState } from 'react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode, Scrollbar } from 'swiper/modules';
import TeachersSlider from './teacher';
import LessonCard from './card';
import Section2 from './section2';
import Section3 from './section3';
const languagess = ['+ German', '+ Spanish', '+ Italian', '+ German']



const languages = [
  {
    flag: "/images/image copy.png",
    title: "British English",
    description: "The global standard form of English.",
    primary: true
  },
  {
    flag: "/images/image copy 2.png",
    title: "American English",
    description: "Pronunciation and slang used in the U.S."
  },
  {
    flag: "/images/image copy 3.png",
    title: "German",
    description: "One of the most widely spoken European languages."
  },
  {
    flag: "/images/image copy 4.png",
    title: "Spanish",
    description: "Spoken across Spain and Latin America."
  },
  {
    flag: "/images/image copy 5.png",
    title: "French",
    description: "Language of love, culture, and diplomacy."
  },
  {
    flag: "/images/image copy 6.png",
    title: "Indian",
    description: "Widely spoken across India in various dialects."
  },
  {
    flag: "/images/image copy 7.png",
    title: "Chinese",
    description: "Mandarin and regional variations included."
  },
  {
    flag: "/images/image copy 8.png",
    title: "Poland",
    description: "Popular Eastern European language."
  }
];

const LanguageLanding = () => {




  return (
    <div className="bg-accent pt-[50px] dark:bg-[#06062b]">

      {/* Header / Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-[85px] text-blue-400 font-bold">
          Let’s Start the Lesson. <br />
          <span className="text-blue-600">Choose Your Tutor!</span>
        </h1>


        <div className="flex justify-around items-center">
          <div className='flex flex-col w-[340px]'>
            <h3 className='text-2xl text-start'>
              Choose from a variety of <br />
              languages, including English, <br />
              Spanish, French, German, <br />
              and many more.
            </h3> <br />
            <button className="group flex items-center justify-start w-11 h-11 bg-blue-600  rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[65%] group-hover:rounded-lg active:translate-x-1 active:translate-y-1">
              <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                <EastIcon sx={{ color: "white" }} />
              </div>
              <div className="absolute  right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Choose The Course
              </div>
            </button>
          </div>
          <img className='w-[450px] h-[600px]' decoding="async" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-layer-1.webp" alt="hp4-layer-1"></img>
          <section className=" p-10">
            <div className="max-w-5xl mx-auto flex flex-col  justify-around items-center text-center gap-6">
              <div className='flex border-b p-[5px] rounded-2xl items-center gap-4'>
                <h2 className="text-[75px] font-bold text-blue-600">80+</h2>
                <p className="text-gray-600 text-3xl">Language <br /> Courses</p>
              </div>
              <div className='flex border-b p-[5px] rounded-2xl  items-center gap-4'>
                <h2 className="text-[75px] font-bold text-blue-600">95%</h2>
                <p className="text-gray-600 text-3xl">Satisfaction <br /> Rate</p>
              </div>
              <div className='flex border-b  p-[5px] rounded-2xl items-center gap-4'>
                <h2 className="text-[75px] font-bold text-blue-600">1mil</h2>
                <p className="text-gray-600 text-3xl">Lessons <br />Completed</p>
              </div>
            </div>
          </section>
        </div>
        <h2 className="text-xl text-blue-500 mt-[40px] font-bold">What we offer</h2>

      </section>

      <div>
        <Section2/>
      </div>

      <section>
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

        <div className='flex justify-between p-[30px] items-center '>
          <div className='font-bold flex flex-col gap-[20px] w-[500px]'>

            <div className='p-[10px] w-full '>
              <h3 className='hover:text-blue-600 duration-350'><span className='text-blue-600'>01</span> Interactive Learning</h3>
              <p className='text-xl text-gray-600'>Engage with experienced instructors in real-time.</p>
            </div>
            <hr />
            <div className='p-[10px] w-full '>
              <h3 className='hover:text-blue-600 duration-350'><span className='text-blue-600'>02</span> Personalized Approach</h3>
              <p className='text-xl text-gray-600'> Tailored to your goals, pace, and proficiency level.</p>
              <hr />
            </div>
            <div className='p-[10px] w-full '>
              <h3 className='hover:text-blue-600 duration-350'><span className='text-blue-600'>03</span>Flexibility and Accessibility</h3>
              <p className='text-xl text-gray-600'>Accessible from any device, no matter where you are.</p>
            </div>
            <hr />
            <div className='p-[10px] w-full '>
              <h3 className='hover:text-blue-600 duration-350'><span className='text-blue-600'>04</span> Certifications and Recognition</h3>
              <p className='text-xl text-gray-600'>Earn globally recognized credentials upon course.</p>
            </div>
            <hr />
          </div>

          <div className="w-[600px] bg-div rounded-3xl  bg-cover bg-center h-screen">
            {/* <img className='w-[600px] rounded-3xl' loading="lazy" decoding="async" width="1340" height="1020" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4.webp"  alt="" srcset="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4.webp 1340w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4-300x228.webp 300w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4-1024x779.webp 1024w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4-768x585.webp 768w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4-1080x822.webp 1080w" sizes="(max-width: 1340px) 100vw, 1340px"></img> */}
            <h1 className='text-[360px]  mb-[-80px] font-bold text-white'>b2</h1>
          </div>
        </div>

      </section>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000, // 5 секунд на каждый слайд (можешь увеличить)
          disableOnInteraction: false,
          waitForTransition: true, // ждём пока завершится анимация перед переключением
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1500} // скорость перехода между слайдами (1.5 секунды)
        loop={true}
        className="mySwiper"
        style={{ maxWidth: '900px', padding: "50px 100px" }}
      >
        <SwiperSlide>
          <img decoding="async" className="main_image" alt="3" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/3.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img decoding="async" className="main_image" alt="2" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/2.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img decoding="async" className="main_image" alt="1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/1.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img decoding="async" className="main_image" alt="6" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/6.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img decoding="async" className="main_image" alt="5" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/5.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img decoding="async" className="main_image" alt="4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/4.webp"></img>
        </SwiperSlide>
      </Swiper>
      <hr />


      {/*  Language Cards */}
      <section className="  px-4">
        <div className="text-center mb-10">
          <p className=" font-bold mt-2 text-4xl text-center">
            Our courses are designed to empower learners at all <br />
            levels, from beginners to advanced speakers. Trusted <br />
            by 500+ students & business owners
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`
            group p-6 border border-gray-400  rounded-2xl w-[300px] h-[400px] transition-all hover:scale-105 duration-700 shadow-md hover:shadow-lg
            hover:bg-blue-600 hover:text-white
           `}
            >
              {/* Flag */}
              <div className="  mb-4">
                <Image
                  src={lang.flag}
                  alt={lang.title}
                  width={100}
                  height={100}
                  className="object-cover h-[50px] w-[55px] rounded-[50%] "
                />
              </div>
              <br /><br /><br />
              {/* Title */}
              <h3 className="text-3xl font-semibold mb-1 ">
                {lang.title}
              </h3>
              <br />
              {/* Description */}
              <p className="text-[20px] w-[280px] text-gray-600 group-hover:text-white ">
                {lang.description}
              </p>
              <br />
              {/* Button */}
              <button className="group flex items-center justify-start w-11 h-11 bg-white  rounded-[10px] cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg group-hover:w-[65%] group-hover:rounded-lg active:translate-x-1 active:translate-y-1">
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <EastIcon sx={{ color: "blue", }} />
                </div>
                <div className="absolute  right-5 transform translate-x-full opacity-0 text-blue-600 text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Read More
                </div>
              </button>

            </div>
          ))}
        </div>
      </section>


      <section className='pb-[800px] dark:bg-black m-[100px_0px] bg-gradient-to-r from-[#556886] to-[#05132b]  h-screen text-white'>
        <div className='flex justify-between p-[40px] items-end font-bold '>
          <div >
            <p className=' text-lg'> our teachers</p>
            <h1 className='text-6xl'>Master the Language <br /> with Expert Tutors</h1>
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
        <div className='pb-[300px]'>
        <TeachersSlider/>
        </div>
        <LessonCard/>
      </section>

      <div style={{ scrollbarColor:"transparent transparent"}} className='flex overflow-auto w-[95%] m-auto p-[50px_0px] gap-5'>
        <img className='min-w-[300px] min-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j4" alt="h4-gall-j4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp"></img>
        <img className='min-w-[600px] min-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j1" alt="h4-gall-j1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp"></img>
        <img className='min-w-[300px] min-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp" alt="" loading="lazy"></img>
        <img className='min-w-[600px] min-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp" alt="" loading="lazy"></img>
        <img className='min-w-[300px] min-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j4" alt="h4-gall-j4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp"></img>
        <img className='min-w-[600px] min-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j1" alt="h4-gall-j1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp"></img>
        <img className='min-w-[300px] min-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp" alt="" loading="lazy"></img>
        <img className='min-w-[600px] min-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp" alt="" loading="lazy"></img>
        <img className='min-w-[300px] min-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j4" alt="h4-gall-j4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp"></img>
        <img className='min-w-[600px] min-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j1" alt="h4-gall-j1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp"></img>
        <img className='min-w-[300px] min-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp" alt="" loading="lazy"></img>
        <img className='min-w-[600px] min-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp" alt="" loading="lazy"></img>
      </div>

      <Section3 />

      <div className="scroll-container w-[500px] m-auto pb-[50px]">
        <div className="scroll-content  text-6xl text-blue-600 font-bold">
          german + spanish + italian + chines + france + america + poland + german + spanish + italian + german + spanish + italian + german + spanish + italian + german + spanish + italian + german + spanish + italian + chines + france + america + poland +
        </div>
      </div>

    </div>
  );
};

export default LanguageLanding;
