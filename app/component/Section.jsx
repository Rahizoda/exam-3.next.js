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

      <div className='flex flex-col md:flex-row justify-around items-center '>

        <div className='border  border-gray-800 rounded-2xl p-[30px] w-[300px] h-[450px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-500 hover:bg-blue-50 cursor-pointer'>
          <svg className='w-[70px] h-[70px] transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><path d="M62,58.1843V48.8157A2.9926,2.9926,0,0,0,61,43H55.8157A2.9635,2.9635,0,0,0,56,42a2.995,2.995,0,0,0-2-2.8157V37h3.1807L55.4316,26.5084A3.4776,3.4776,0,0,0,54,20.6632V16.3105l-2.6039-.9919L59.6924,12,32,.9229,4.3076,12,16,16.6771V29H12A7.9913,7.9913,0,0,0,7.3386,43.4884,10.4993,10.4993,0,0,0,10.5,64H61a2.9926,2.9926,0,0,0,1-5.8157ZM60,51H42v2H60v5H10.3228a4.5,4.5,0,0,1,0-9H60ZM52,39H12a2,2,0,0,1,0-4H23.9755A30.1154,30.1154,0,0,0,32,36a30.1148,30.1148,0,0,0,8.0245-1h9.1283l-.3335,2H52Zm-4.551-8H49.82l-.3334,2H44.8613A12.1476,12.1476,0,0,0,47.449,31Zm7.37,4H51.1807L52.44,27.4434a2.8,2.8,0,0,0,1.12,0ZM54.5,24A1.5,1.5,0,1,1,53,22.5,1.5017,1.5017,0,0,1,54.5,24ZM52,17.69v2.9737a3.4776,3.4776,0,0,0-1.4316,5.8452L50.153,29H48V16.6771l.6548-.262ZM32,3.0771,54.3076,12l-5.67,2.2679L32.356,8.0654l-.712,1.8692,14.2527,5.43L32,20.9229,9.6924,12Zm0,20,14-5.6v12.144C45.104,30.55,41.1553,34,32,34c-9.165,0-13.1123-3.458-14-4.3779V17.4771ZM6,37a6.0066,6.0066,0,0,1,6-6h4.551a12.1476,12.1476,0,0,0,2.5877,2H12a4,4,0,0,0,0,8H53a1,1,0,0,1,0,2H12A6.0066,6.0066,0,0,1,6,37ZM61,62H10.5a8.5,8.5,0,0,1,0-17H61a1,1,0,0,1,0,2H10.3228a6.5,6.5,0,0,0,0,13H61a1,1,0,0,1,0,2Z"></path><rect x="10" y="54" width="28" height="2"></rect></svg>
          <br />
          <h2 className='text-3xl transition-all duration-300 group-hover:text-blue-700'>Online & Offline <br /> Options</h2>
          <br />
          <p className='text-[18px] text-gray-600 transition-all duration-300 group-hover:text-gray-800'>Instructors often  <br />
            incorporate anecdotes <br />
            and cultural nuances, <br />
            enriching learning <br />
            experience.</p>
          <br />
          <button className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[65%] hover:rounded-lg active:translate-x-1 active:translate-y-1 hover:bg-blue-700">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <span className="text-white">→</span>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Read More
            </div>
          </button>
        </div>

        <div className='border border-gray-800 rounded-2xl p-[30px] w-[300px] h-[450px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-500 hover:bg-blue-50 cursor-pointer'>
          <svg className='w-[70px] h-[70px] transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600' xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512"><path d="m31 23h2v2h-2z"></path><path d="m31 51h2v2h-2z"></path><path d="m24 24.876h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -9.589 15.968)"></path><path d="m38 49.124h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -19.838 26.217)"></path><path d="m18.876 30h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -16.909 32.712)"></path><path d="m43.124 44h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -16.91 60.711)"></path><path d="m17 37h2v2h-2z"></path><path d="m45 37h2v2h-2z"></path><path d="m18.876 44h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -19.822 15.946)"></path><path d="m43.124 30h2v2h-2z" transform="matrix(.866 -.5 .5 .866 -9.589 26.217)"></path><path d="m24 49.124h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -30.911 46.742)"></path><path d="m38 24.876h2v2h-2z" transform="matrix(.5 -.866 .866 .5 -2.898 46.735)"></path><path d="m33 35.1843v-8.1843h-2v8.1843a2.9926 2.9926 0 1 0 3.8157 3.8157h6.1843v-2h-6.1843a2.9951 2.9951 0 0 0 -1.8157-1.8157zm-1 3.8157a1 1 0 1 1 1-1 1.0013 1.0013 0 0 1 -1 1z"></path><path d="m32 19a19 19 0 1 0 19 19 19.0216 19.0216 0 0 0 -19-19zm0 36a17 17 0 1 1 17-17 17.019 17.019 0 0 1 -17 17z"></path><path d="m54.793 25.5205 1.414-1.4141a8 8 0 0 0 -5.657-13.6564 8.0878 8.0878 0 0 0 -1.1643.0933 12.618 12.618 0 0 0 -11.0014-6.5433h-12.7686a12.4539 12.4539 0 0 0 -11.0013 6.543 8.0934 8.0934 0 0 0 -1.1644-.093 8 8 0 0 0 -5.657 13.6564l1.414 1.4141 4.95-4.95 1.3854 1.3854a22.9384 22.9384 0 0 0 -1.0157 30.9745l-2.7559 3.062a3 3 0 0 0 2.2261 5.0078q.0805 0 .1611-.0044a2.9783 2.9783 0 0 0 2.0718-.9893l2.7533-3.0589a22.9347 22.9347 0 0 0 26.0344 0l2.7525 3.0587a3 3 0 1 0 4.46-4.0131l-2.756-3.0625a22.9383 22.9383 0 0 0 -1.0156-30.9745l1.3854-1.3854zm0-11.3135a6 6 0 0 1 0 8.4854l-8.4854-8.4854a6 6 0 0 1 8.4854 0zm-45.586 8.4854a6 6 0 0 1 8.4854-8.4854zm5.5357 35.977a.99.99 0 0 1 -.69.3291 1.0049 1.0049 0 0 1 -.7216-.2548 1.0005 1.0005 0 0 1 -.0743-1.4126l2.6382-2.9311c.4756.4672.9688.9169 1.4833 1.3417zm36.2558-.6167a.9917.9917 0 0 1 -.33.691 1.0216 1.0216 0 0 1 -1.4121-.0748l-2.6351-2.9276c.5146-.4248 1.0076-.8745 1.4833-1.3417l2.6382 2.9319a.9918.9918 0 0 1 .2557.7212zm-18.9985.9473a21 21 0 1 1 21-21 21.0236 21.0236 0 0 1 -21 21zm15-38.4138a22.8929 22.8929 0 0 0 -14-5.5609v-3.0253h3v-2h-8v2h3v3.0253a22.8929 22.8929 0 0 0 -14 5.5609l-1.4295-1.43 4.95-4.95-1.4141-1.414a7.9813 7.9813 0 0 0 -2.4891-1.689 10.45 10.45 0 0 1 8.9984-5.1032h12.7686a10.5932 10.5932 0 0 1 8.9974 5.1045 7.984 7.984 0 0 0 -2.4881 1.6885l-1.4136 1.414 4.95 4.95z"></path></svg>
          <br />
          <h2 className='text-3xl transition-all duration-300 group-hover:text-blue-700'>Learn on Your <br /> Time</h2>
          <br />
          <p className='text-[18px] text-gray-600 transition-all duration-300 group-hover:text-gray-800'>
            We offer morning, evening,<br />
            and weekend slots to <br />
            accommodate working <br />
            professionals & students.</p>
          <br />
          <button className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[65%] hover:rounded-lg active:translate-x-1 active:translate-y-1 hover:bg-blue-700">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <span className="text-white">→</span>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Read More
            </div>
          </button>
        </div>

        <div className='border border-gray-800 rounded-2xl p-[30px] w-[300px] h-[450px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-500 hover:bg-blue-50 cursor-pointer'>
          <svg className='w-[70px] h-[70px] transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512"><path d="M57,3H10v7.05a10.129,10.129,0,0,0-3.6895.9345C4.82,11.7285,4,12.8,4,14s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,17.95v4.1a10.129,10.129,0,0,0-3.6895.9345C4.82,23.7285,4,24.8,4,26s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,29.95v4.1a10.129,10.129,0,0,0-3.6895.9345C4.82,35.7285,4,36.8,4,38s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,41.95v4.1a10.129,10.129,0,0,0-3.6895.9345C4.82,47.7285,4,48.8,4,50s.82,2.2715,2.31,3.0156A10.1327,10.1327,0,0,0,10,53.95V61H57a3.0033,3.0033,0,0,0,3-3V6A3.0033,3.0033,0,0,0,57,3ZM7.2041,15.2266C6.4614,14.8555,6,14.3853,6,14s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,12.0489V15.92A7.9453,7.9453,0,0,1,7.2041,15.2266Zm0,12C6.4614,26.8555,6,26.3853,6,26s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,24.0489V27.92A7.9453,7.9453,0,0,1,7.2041,27.2266Zm0,12C6.4614,38.8555,6,38.3853,6,38s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,36.0489V39.92A7.9453,7.9453,0,0,1,7.2041,39.2266Zm0,12C6.4614,50.8555,6,50.3853,6,50s.4614-.8555,1.2046-1.2266A8.08,8.08,0,0,1,10,48.0489V51.92A7.9453,7.9453,0,0,1,7.2041,51.2266ZM50,59H12V53.95a10.129,10.129,0,0,0,3.69-.9345C17.18,52.2715,18,51.2,18,50s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,49.1445,16,49.6147,16,50s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,51.92V41.95a10.129,10.129,0,0,0,3.69-.9345C17.18,40.2715,18,39.2,18,38s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,37.1445,16,37.6147,16,38s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,39.92V29.95a10.129,10.129,0,0,0,3.69-.9345C17.18,28.2715,18,27.2,18,26s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,25.1445,16,25.6147,16,26s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,27.92V17.95a10.129,10.129,0,0,0,3.69-.9345C17.18,16.2715,18,15.2,18,14s-.82-2.2715-2.31-3.0156l-.8936,1.789C15.5386,13.1445,16,13.6147,16,14s-.4614.8555-1.2046,1.2266A7.9408,7.9408,0,0,1,12,15.92V5H50ZM57,5a1.0013,1.0013,0,0,1,1,1v5H52V5ZM52,37.6665V26.3335h6v11.333Zm6,2V51H52V39.6665Zm-6-15.333V13h6V24.3335ZM57,59H52V53h6v5A1.0013,1.0013,0,0,1,57,59Z"></path><path d="M24,53H42a3.0033,3.0033,0,0,0,3-3V42a3.0033,3.0033,0,0,0-3-3H24a3.0033,3.0033,0,0,0-3,3v8A3.0033,3.0033,0,0,0,24,53ZM23,42a1.0013,1.0013,0,0,1,1-1H42a1.0013,1.0013,0,0,1,1,1v8a1.0013,1.0013,0,0,1-1,1H24a1.0013,1.0013,0,0,1-1-1Z"></path><rect x="25" y="20" width="18" height="2"></rect><rect x="25" y="12" width="18" height="2"></rect></svg>
          <br />
          <h2 className='text-3xl transition-all duration-300 group-hover:text-blue-700'>Skill-Based Focus</h2>
          <br />
          <p className='text-[18px] text-gray-600 transition-all duration-300 group-hover:text-gray-800'>
            Hone specific skills such as <br />
            speaking, listening, <br />
            reading, or writing through  <br /> modules</p>
          <br />
          <button className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[65%] hover:rounded-lg active:translate-x-1 active:translate-y-1 hover:bg-blue-700">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <span className="text-white">→</span>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Read More
            </div>
          </button>
        </div>

        <div className='border border-gray-800 rounded-2xl p-[30px] w-[300px] h-[450px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-500 hover:bg-blue-50 cursor-pointer'>
          <svg className='w-[70px] h-[70px] transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600' xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512"><path d="m55 51v-43a5.0059 5.0059 0 0 0 -5-5h-40a5.0059 5.0059 0 0 0 -5 5v5h8v3.0507a10.9915 10.9915 0 0 0 -6 19.4279v13.4355l6-6v13.0859a5.0059 5.0059 0 0 0 5 5h36a5.0059 5.0059 0 0 0 5-5v-5zm-48-40v-3a3 3 0 0 1 6 0v3zm-2 16a9 9 0 1 1 9 9 9.01 9.01 0 0 1 -9-9zm4 9.7857a10.9011 10.9011 0 0 0 10 0v7.3l-5-5-5 5zm12 19.2143a3 3 0 0 1 -6 0v-13.0859l6 6v-13.4355a10.9915 10.9915 0 0 0 -6-19.4279v-8.0507a4.9732 4.9732 0 0 0 -1.002-3h36.002a3.0033 3.0033 0 0 1 3 3v43h-32zm36 0a3.0033 3.0033 0 0 1 -3 3h-32.002a4.9732 4.9732 0 0 0 1.002-3v-3h34z"></path><path d="m20 9h14v2h-14z"></path><path d="m29 18h7v2h-7z"></path><path d="m29 24h14v2h-14z"></path><path d="m29 30h14v2h-14z"></path><path d="m29 36h14v2h-14z"></path><path d="m35 45h14v2h-14z"></path><path d="m46 8a4 4 0 1 0 4 4 4.0039 4.0039 0 0 0 -4-4zm0 6a2 2 0 1 1 2-2 2.0027 2.0027 0 0 1 -2 2z"></path><path d="m14 33a6 6 0 1 0 -6-6 6.0066 6.0066 0 0 0 6 6zm0-10a4 4 0 1 1 -4 4 4.0039 4.0039 0 0 1 4-4z"></path></svg>
          <br />
          <h2 className='text-3xl transition-all duration-300 group-hover:text-blue-700'>Active Learning</h2>
          <br />
          <p className='text-[18px] text-gray-600 transition-all duration-300 group-hover:text-gray-800'>
            Our classes integrate <br />
            games, group discussions, & <br />
            real-life simulations to <br /> make learning engaging <br />
            and fun.</p>
          <br />
          <button className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-[65%] hover:rounded-lg active:translate-x-1 active:translate-y-1 hover:bg-blue-700">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
              <span className="text-white">→</span>
            </div>
            <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Read More
            </div>
          </button>
        </div>
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

      <div>

        <video src=""></video>
      </div>


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

      <div style={{ scrollbarColor:"transparent transparent"}} className='flex overflow-auto w-[95%] h-[400px] m-auto p-[50px_0px] gap-5'>
        <img className='max-w-[300px] max-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j4" alt="h4-gall-j4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp"></img>
        <img className='max-w-[600px] max-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j1" alt="h4-gall-j1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp"></img>
        <img className='max-w-[300px] max-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp" alt="" loading="lazy"></img>
        <img className='max-w-[600px] max-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp" alt="" loading="lazy"></img>
        <img className='max-w-[300px] max-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j4" alt="h4-gall-j4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp"></img>
        <img className='max-w-[600px] max-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j1" alt="h4-gall-j1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp"></img>
        <img className='max-w-[300px] max-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp" alt="" loading="lazy"></img>
        <img className='max-w-[600px] max-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp" alt="" loading="lazy"></img>
        <img className='max-w-[300px] max-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j4" alt="h4-gall-j4" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp"></img>
        <img className='max-w-[600px] max-h-[400px]' class="elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded" data-title="h4-gall-j1" alt="h4-gall-j1" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp"></img>
        <img className='max-w-[300px] max-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp" alt="" loading="lazy"></img>
        <img className='max-w-[600px] max-h-[400px]' decoding="async" class="wgl-gallery_image" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp" alt="" loading="lazy"></img>
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
