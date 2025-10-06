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
import AlumniReviews from './videoPley';
import LanguagesSection from './card';



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
      <div className='md:pt-[100px]'>

        <HeroSection />
      </div>

      <div style={{
        scrollbarColor: "transparent transparent",
        scrollbarWidth: "none",
        msOverflowStyle: "none"  // для IE и Edge
      }} className='flex p-[50px_0px] w-[95%] overflow-x-auto   m-auto flex-row md:flex-row justify-around text-center items-center gap-8'>

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

      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10">
        <div className="container px-4 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200/50 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Why Choose Us
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Intelect</span>?
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive programming education with <span className="font-semibold text-gray-700 dark:text-gray-200">guaranteed results</span> and career support
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto gap-4 sm:gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative w-full flex items-start space-x-4 sm:space-x-6 p-5 sm:p-7 md:p-8 bg-white/70 dark:bg-gray-800/70 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-300/50 dark:border-gray-600/50 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/0 to-indigo-100/0 group-hover:via-blue-50/30 group-hover:to-indigo-100/20 dark:group-hover:via-blue-900/10 dark:group-hover:to-indigo-900/10 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>

                {/* Animated Border */}
                <div className="absolute w-full inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-indigo-500/10 transition-all duration-500"></div>

                {/* Icon Container */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-indigo-300 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <div className="text-white text-lg sm:text-xl md:text-2xl">
                        {advantage.icon}
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-blue-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 group-hover:scale-110"></div>

                    {/* Pulse Animation */}
                    <div className="absolute  bg-blue-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 relative z-10">
                  <p className="text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 break-words">
                    {advantage.text}
                  </p>

                  {/* Animated Underline */}
                  <div className="flex items-center mt-3 sm:mt-4">
                    <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-full sm:group-hover:w-full transition-all duration-500 ease-out mr-2"></div>
                  </div>
                </div>


              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10 md:mt-20">
            <button className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 sm:py-5 sm:px-12 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1.5 active:translate-y-0 overflow-hidden">

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full translate-x-10 translate-y-10"></div>
              </div>

              <span className="relative flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg">
                <span className="relative">
                  Start Learning
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <div className="absolute top-0 left-0 w-4 h-4 bg-white/30 rounded-full animate-ripple"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-white/20 rounded-full animate-ripple animation-delay-200"></div>
                </div>
              </div>
            </button>

            {/* Additional Info */}
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-6">
              Join <span className="font-semibold text-blue-600 dark:text-blue-400">5,000+</span> successful students worldwide
            </p>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(20);
      opacity: 0;
    }
  }
  @keyframes shine {
    0% {
      transform: translateX(-100%) skewX(-15deg);
    }
    100% {
      transform: translateX(200%) skewX(-15deg);
    }
  }
  .animate-ripple {
    animation: ripple 1.5s linear infinite;
  }
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  .animate-shine {
    animation: shine 2s ease-in-out;
  }
`}</style>
      </section>



      <IntelectStatistics />

      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2'></div>
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>

        {/* Header Container */}
        <div className='text-center mb-16 md:mb-20 lg:mb-24 relative z-10'>
          {/* Animated Badge */}
          <div className='inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 dark:bg-gray-900/80 border border-blue-200/60 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 md:mb-8 lg:mb-10 backdrop-blur-sm shadow-xs hover:shadow-lg hover:scale-105 hover:border-blue-300/80 dark:hover:border-blue-500/60 transition-all duration-300 group cursor-pointer'>
            <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300'></div>
            <span className='group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300'>
              Testimonials
            </span>
            <div className='w-4 h-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
          </div>

          {/* Main Heading with Gradient */}
          <div className='mb-4 md:mb-6 lg:mb-8'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight tracking-tight'>
              Alumni
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-500 block sm:inline-block sm:ml-3 mt-2 sm:mt-0'>
                Reviews
              </span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <div className='relative inline-block max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16'>
            <p className='text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-loose relative z-10 font-medium px-4'>
              Listen to what those who have already completed our courses say and get the necessary recommendations from them
            </p>

            {/* Animated Decorative line */}
            <div className='absolute bottom-3 left-0 w-full h-4 bg-gradient-to-r from-blue-200/40 via-indigo-200/30 to-purple-200/40 dark:from-blue-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 rounded-full'></div>

            {/* Floating dots */}
            <div className='absolute -top-2 -left-2 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce'></div>
            <div className='absolute -bottom-2 -right-2 w-2 h-2 bg-indigo-400/40 rounded-full animate-bounce delay-300'></div>
          </div>

          {/* Interactive Stats */}
          <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-16'>
            {[
              { value: "4.9/5", label: "Average Rating", color: "blue", icon: "⭐" },
              { value: "2K+", label: "Graduates", color: "indigo", icon: "👨‍🎓" },
              { value: "98%", label: "Success Rate", color: "purple", icon: "🚀" }
            ].map((stat, index) => (
              <div
                key={index}
                className='group text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/70 dark:hover:border-blue-600/60 hover:bg-white/80 dark:hover:bg-gray-900/80 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer min-w-[140px] sm:min-w-[160px]'
              >
                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 absolute -top-2 -right-2'>
                  {stat.icon}
                </div>
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color === 'blue' ? 'from-blue-600 to-blue-700' :
                    stat.color === 'indigo' ? 'from-indigo-600 to-indigo-700' :
                      'from-purple-600 to-purple-700'
                  } bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2`}>
                  {stat.value}
                </div>
                <div className='text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300'>
                  {stat.label}
                </div>

                {/* Progress bar for success rate */}
                {stat.label === "Success Rate" && (
                  <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-3 overflow-hidden'>
                    <div className='bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out'></div>
                  </div>
                )}

                {/* Rating stars for average rating */}
                {stat.label === "Average Rating" && (
                  <div className='flex justify-center space-x-0.5 mt-2'>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className='w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300'
                        style={{ transitionDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className='mt-12 md:mt-16 lg:mt-20'>
            <button className='group px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto text-lg sm:text-xl'>
              <span>Read All Stories</span>
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Floating Particles */}
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float'></div>
        <div className='absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-float delay-1000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400/50 rounded-full animate-float delay-2000'></div>
      </div>

      <AlumniReviews/>



      <hr className="my-8 sm:my-12" />

      {/* Language Cards Section */}
      <LanguagesSection languages={languages} />



      {/* Teachers Section */}
      <section className='pb-40 sm:pb-60 lg:pb-80 xl:pb-[10px] dark:bg-black bg-gradient-to-r from-[#556886] to-[#05132b] text-white py-5 sm:py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row w-[90%] m-auto  justify-between items-start lg:items-end  sm:p-6 lg:p-8 xl:p-12 2xl:p-16 gap-4 sm:gap-6 lg:gap-8 xl:gap-10'>
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
