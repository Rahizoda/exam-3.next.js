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
import "../component/styles.css"

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode, Scrollbar } from 'swiper/modules';
import TeachersSlider from './teacher';
import LessonCard from './card';
import Section2 from './section2';
import Section3 from './section3';
const languagess = ['+ German', '+ Spanish', '+ Italian', '+ German']
import { CheckCircle2, Globe, Briefcase, TrendingUp, Code, Users, Award } from 'lucide-react';
import IntelectStatistics from './section4';
import HeroSection from './section1swiper';


const advantages = [
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    text: "Learning available in English, Russian, or Tajik languages"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-green-500" />,
    text: "Build a strong portfolio upon course completion to help you land a job"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
    text: "Track your progress with our intensive program: 5 study days per week with weekly Saturday assessments"
  },
  {
    icon: <Code className="w-6 h-6 text-orange-500" />,
    text: "Gain hands-on experience working with modern technologies on real-world projects"
  },
  {
    icon: <Users className="w-6 h-6 text-red-500" />,
    text: "Learn from experienced industry professionals and practicing specialists"
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    text: "Master programming languages in high demand both in Tajikistan and international markets"
  }
];

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
        <br /><br /><br />
        <HeroSection/>

      <div className='flex p-[50px_0px] w-[95%] m-auto flex-col md:flex-row justify-around text-center items-center gap-8'>

        {/* Card 1 - Online & Offline Options */}
        <div className='group relative border border-gray-300 rounded-3xl p-8 w-[320px] h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-400 hover:bg-gradient-to-br from-blue-50 to-white cursor-pointer overflow-hidden'>
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
        <div className='group relative border border-gray-300 rounded-3xl p-8 w-[320px] h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-green-400 hover:bg-gradient-to-br from-green-50 to-white cursor-pointer overflow-hidden'>
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
        <div className='group relative border border-gray-300 rounded-3xl p-8 w-[320px] h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-purple-400 hover:bg-gradient-to-br from-purple-50 to-white cursor-pointer overflow-hidden'>
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
        <div className='group relative border border-gray-300 rounded-3xl p-8 w-[320px] h-[480px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-orange-400 hover:bg-gradient-to-br from-orange-50 to-white cursor-pointer overflow-hidden'>
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

      <section className=" w-[95%] m-auto bg-gradient-to-br ">
        <div className="container  px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Why Choose Our Courses
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Why Choose <span className="text-blue-600">Intelect</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive programming education with guaranteed results and career support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-auto w-[95%] max-w-7xl mx-auto gap-3 sm:gap-4 md:gap-5">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group w-full flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 md:p-8 bg-white/80 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg md:hover:shadow-xl transition-all duration-500 border border-gray-200/60 hover:border-blue-200 hover:bg-white backdrop-blur-sm hover:-translate-y-0.5 md:hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex-shrink-0 mt-0 sm:mt-1">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-300 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg">
                      {advantage.icon}
                    </div>
                    <div className="absolute -inset-1 bg-blue-200 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="flex-1 min-w-0"> {/* min-w-0 предотвращает переполнение */}
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300 break-words">
                    {advantage.text}
                  </p>
                  <div className="h-0.5 w-0 bg-blue-500 group-hover:w-12 md:group-hover:w-16 lg:group-hover:w-20 mt-2 sm:mt-3 transition-all duration-500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-5 px-12 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-3">
                Start Learning
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <br /><br /><br />
          </div>
        </div>
      </section>



      <IntelectStatistics />

      <div className='w-[90%] m-auto p-[50px_0px]'>
        <h1 className='text-[30px] text-blue-600 font-bold'>Alumni Reviews</h1> <br />
        <p>Listen to what those who have already completed our courses say and get the necessary recommendations from theme</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-6 p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">

        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/50 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl translate-y-36 -translate-x-36"></div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 w-full max-w-7xl mx-auto relative z-10">
          {[
            { src: "./video_2025-10-01_09-37-28.mp4", title: "Design Process" },
            { src: "/video_2025-10-01_09-44-46(1).mp4", title: "Development" },
            { src: "/video_2025-10-01_09-50-17(2).mp4", title: "Animation" },
            { src: "./video_2025-10-01_09-37-28.mp4", title: "Final Result" }
          ].map((video, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
            >
              {/* Video Container with Modern Styling */}
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[260px] xl:max-w-[300px]">
                {/* Outer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main Video Card */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/50 dark:border-gray-700/50 group-hover:shadow-2xl group-hover:border-blue-200/50 dark:group-hover:border-blue-400/30 transition-all duration-500 overflow-hidden">

                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  {/* Video with Fixed Size and Controls */}
                  <div className="relative w-full h-[320px] sm:h-[350px] lg:h-[320px] xl:h-[350px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <video
                      src={video.src}
                      controls
                      autoPlay={false}
                      loop={false}
                      muted={true}
                      preload="metadata"
                      className="w-full h-full object-cover"
                      onClick={(e) => e.preventDefault()}
                      onPlay={(e) => {
                        // Останавливаем все другие видео при воспроизведении одного
                        document.querySelectorAll('video').forEach(v => {
                          if (v !== e.target) v.pause();
                        });
                      }}
                    />

                    {/* Custom Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 cursor-pointer"
                      onClick={(e) => {
                        const video = e.currentTarget.previousElementSibling;
                        if (video.paused) {
                          video.play();
                          e.currentTarget.style.opacity = '0';
                        }
                      }}>
                      <div className="w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                  </div>
                </div>
              </div>

              {/* Video Title */}
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                  {video.title}
                </span>
              </div>

              {/* Hover Indicator */}
              <div className="absolute -bottom-2 w-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Section Title for Mobile */}
        <div className="lg:hidden text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Video Showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Explore our creative process
          </p>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>

        {/* Header Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end p-6 sm:p-8 lg:p-12 relative z-10'>
          <div className='mb-6 lg:mb-0'>
            <p className='text-blue-600 font-semibold text-sm sm:text-base mb-2 sm:mb-3'>Benefits of our courses</p>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight'>
              Learn, Practice, Perfect with <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professionals</span>
            </h1>
          </div>

          {/* Animated Button */}
          <button className="group flex items-center justify-start w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 hover:w-48 sm:hover:w-56 lg:hover:w-60">
            <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:pl-4">
              <EastIcon sx={{ color: "white", fontSize: { xs: "1.5rem", sm: "1.75rem", lg: "2rem" } }} />
            </div>
            <div className="absolute right-4 transform translate-x-full opacity-0 text-white text-sm sm:text-base font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap">
              View all Courses
            </div>
          </button>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start p-4 sm:p-6 lg:p-8 xl:p-12 gap-8 lg:gap-12 relative z-10'>

          {/* Benefits List */}
          <div className='w-full lg:w-1/2 xl:w-[500px] flex flex-col gap-4 sm:gap-6'>
            {[
              {
                number: "01",
                title: "Interactive Learning",
                description: "Engage with experienced instructors in real-time."
              },
              {
                number: "02",
                title: "Personalized Approach",
                description: "Tailored to your goals, pace, and proficiency level."
              },
              {
                number: "03",
                title: "Flexibility and Accessibility",
                description: "Accessible from any device, no matter where you are."
              },
              {
                number: "04",
                title: "Certifications and Recognition",
                description: "Earn globally recognized credentials upon course."
              }
            ].map((benefit, index) => (
              <div key={index} className='group relative'>
                <div className='p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-blue-200/50 dark:hover:border-blue-400/30 hover:-translate-y-1'>
                  <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'>
                    <span className='text-blue-600 dark:text-blue-400'>{benefit.number}</span> {benefit.title}
                  </h3>
                  <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {benefit.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>

                {/* Separator */}
                {index < 3 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-600/50 to-transparent my-2 sm:my-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">

              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-image-4.webp")'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-900/40 dark:to-purple-900/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Large Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className='text-6xl sm:text-8xl lg:text-9xl xl:text-[360px] font-bold text-white/10 dark:text-white/5 tracking-tighter select-none transition-all duration-500 group-hover:text-white/20 dark:group-hover:text-white/10'>
                  b2
                </h1>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Level
                </span>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  🎯 Certified
                </span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 sm:my-12" />

      {/* Language Cards Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight sm:leading-tight lg:leading-tight">
            Our courses are designed to empower learners at all{" "}
            <br className="hidden sm:block" />
            levels, from beginners to advanced speakers.{" "}
            <br className="hidden sm:block" />
            Trusted by 500+ students & business owners
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 border border-gray-300 dark:border-gray-600 rounded-xl sm:rounded-2xl w-full max-w-[300px] h-auto sm:h-[400px] transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700"
            >
              {/* Flag */}
              <div className="mb-3 sm:mb-4">
                <Image
                  src={lang.flag}
                  alt={lang.title}
                  width={80}
                  height={80}
                  className="object-cover h-10 w-10 sm:h-12 sm:w-12 rounded-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">
                {lang.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 group-hover:text-white mb-4 sm:mb-6 leading-relaxed">
                {lang.description}
              </p>

              {/* Button */}
              <button className="group flex items-center justify-start w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-gray-800 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg group-hover:w-[65%] active:scale-95">
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:pl-3">
                  <EastIcon sx={{ color: "blue", fontSize: { xs: "1.25rem", sm: "1.5rem" } }} />
                </div>
                <div className="absolute right-3 transform translate-x-full opacity-0 text-blue-600 dark:text-blue-400 text-sm sm:text-base font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap">
                  Read More
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section className='pb-40 sm:pb-60 lg:pb-80 xl:pb-[10px] dark:bg-black bg-gradient-to-r from-[#556886] to-[#05132b] text-white py-5 sm:py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16 gap-4 sm:gap-6 lg:gap-8 xl:gap-10'>
          <div className="w-full lg:flex-1">
            <p className='text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-2 sm:mb-3 lg:mb-4 text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide'>
              Our Teachers
            </p>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight xl:leading-tight'>
              Master the Language <br className="hidden sm:block" />
              with <span className="text-blue-600 dark:text-blue-400">Expert Tutors</span>
            </h1>
          </div>

          <button className="group flex items-center justify-start w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-blue-600 hover:bg-blue-700 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 hover:w-44 sm:hover:w-52 lg:hover:w-60 xl:hover:w-64 mt-4 lg:mt-0">
            <div className="flex items-center justify-center w-full transition-all duration-500 group-hover:justify-start group-hover:pl-4">
              <EastIcon sx={{
                color: "white",
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.5rem",
                  lg: "1.75rem",
                  xl: "2rem"
                }
              }} />
            </div>
            <div className="absolute right-4 transform translate-x-full opacity-0 text-white text-sm sm:text-base lg:text-lg font-semibold transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 whitespace-nowrap">
              View all Tutors
            </div>
          </button>
        </div>
        <TeachersSlider />


      </section>

      {/* Gallery Section */}
      <div
        style={{ scrollbarColor: "transparent transparent" }}
        className='flex overflow-x-auto w-[95%] h-[300px] sm:h-[350px] lg:h-[400px] mx-auto py-8 sm:py-12 lg:py-16 gap-3 sm:gap-4 lg:gap-5 snap-x snap-mandatory'
      >
        {[
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp", width: 300 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp", width: 600 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp", width: 300 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp", width: 600 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j4.webp", width: 300 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j1.webp", width: 600 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j3-740x960.webp", width: 300 },
          { src: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/08/h4-gall-j2-1340x960.webp", width: 600 }
        ].map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center transition-transform duration-300 hover:scale-105"
          >
            <img
              className="h-full object-cover rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                width: `clamp(200px, ${img.width * 0.8}px, ${img.width}px)`,
                maxWidth: '90vw'
              }}
              src={img.src}
              alt={`gallery-${index}`}
              loading="lazy"
            />
          </div>
        ))}
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
