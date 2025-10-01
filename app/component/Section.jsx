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

const images = [
  {
    image: '/image copy 2.png',
    title: 'Speak Fluently, Connect Globally',
    text: 'Users create personal profiles and connect with others, forming networks based on mutual interests, relationships, or affiliations.'
  },
  {
    image: '/image copy 3.png',
    title: 'Speak Fluently, Connect Globally',
    text: 'Users create personal profiles and connect with others, forming networks based on mutual interests, relationships, or affiliations.'
  },
  {
    image: '/image copy 4.png',
    title: 'Speak Fluently, Connect Globally',
    text: 'Users create personal profiles and connect with others, forming networks based on mutual interests, relationships, or affiliations.'
  },
  {
    image: '/image copy.png',
    title: 'Speak Fluently, Connect Globally',
    text: 'Users create personal profiles and connect with others, forming networks based on mutual interests, relationships, or affiliations.'
  },
  {
    image: '/image.png',
    title: 'Speak Fluently, Connect Globally',
    text: 'Users create personal profiles and connect with others, forming networks based on mutual interests, relationships, or affiliations.'
  }
]

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
      <div className='mt-[-50px]'>

        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' !w-2 !h-2 sm:!w-3 sm:!h-3 !bg-white/50 !opacity-100 hover:!bg-white !transition-all !duration-300 !mx-1"></span>';
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          speed={1000}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: false,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 25,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
            }
          }}
          className="modern-swiper relative"
          style={{
            width: '100%',
            maxWidth: '95%',
            margin: '60px auto 0',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >

          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[450px] rounded-2xl overflow-hidden">
                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0f0f49] dark:via-[#0d0d42] dark:to-[#1a1a5e] relative">

                  {/* Background Effects - адаптивные */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 z-0"></div>
                  <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-blue-400/10 rounded-full blur-2xl sm:blur-3xl -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-400/10 rounded-full blur-2xl sm:blur-3xl translate-y-24 sm:translate-y-32 -translate-x-24 sm:-translate-x-32"></div>

                  {/* Content Section - адаптивная */}
                  <div className="flex-1 max-w-full lg:max-w-lg text-center lg:text-left z-10 mb-6 sm:mb-8 lg:mb-0 lg:pr-6 xl:pr-8">
                    <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm border border-white/20">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      Featured Course
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {item.title}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 opacity-90 max-w-2xl">
                      {item.text}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                          Read More
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>

                      <button className="group bg-white/90 dark:bg-white/10 backdrop-blur-sm text-blue-600 dark:text-white border border-blue-200 dark:border-white/20 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all duration-300 hover:bg-white dark:hover:bg-white/20">
                        <span className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                          Watch Demo
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Image Section - полностью адаптивная */}
                  <div className="flex-1 max-w-full lg:max-w-md xl:max-w-xl w-full lg:w-auto z-10 mt-6 sm:mt-8 lg:mt-0">
                    <div className="relative w-full">
                      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] xl:h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl sm:rounded-3xl p-2 shadow-xl sm:shadow-2xl transform group-hover:scale-105 transition-transform duration-700 mx-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-full">
                        <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center shadow-inner border-2 sm:border-4 border-white/50 dark:border-white/10 group-hover:border-white/80 transition-all duration-500"
                            style={{
                              maxHeight: '100%',
                              minHeight: '100%',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination Container - адаптивный */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2"></div>
        </Swiper>

        <style jsx>{`
  .modern-swiper {
    --swiper-pagination-bullet-size: 8px;
    --swiper-pagination-bullet-inactive-opacity: 0.4;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bottom: 12px;
  }

  .modern-swiper .swiper-pagination-bullet {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
    transition: all 0.3s ease;
  }

  .modern-swiper .swiper-pagination-bullet-active {
    background: #fff;
    transform: scale(1.2);
    border-color: rgba(255,255,255,0.8);
  }

  /* Адаптивные стили для разных экранов */
  @media (max-width: 480px) {
    .modern-swiper {
      margin-top: 40px;
      border-radius: 16px;
    }

    .swiper-button-prev-custom,
    .swiper-button-next-custom {
      display: none;
    }

    .modern-swiper {
      --swiper-pagination-bullet-size: 6px;
      --swiper-pagination-bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    .modern-swiper {
      margin-top: 50px;
      border-radius: 18px;
    }

    .swiper-button-prev-custom,
    .swiper-button-next-custom {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    .modern-swiper {
      --swiper-pagination-bullet-size: 10px;
      --swiper-pagination-bottom: 16px;
    }
  }

  @media (min-width: 1280px) {
    .modern-swiper {
      --swiper-pagination-bullet-size: 12px;
      --swiper-pagination-bottom: 20px;
    }
  }
`}</style>


      </div>

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

          <div className="grid grid-cols-2 grid-rows-3 w-[95%] m-auto gap-4 md:gap-5">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group w-full flex items-start space-x-6 p-8 bg-white/80 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200/60 hover:border-blue-200 hover:bg-white backdrop-blur-sm hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg">
                      {advantage.icon}
                    </div>
                    <div className="absolute -inset-1 bg-blue-200 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-xl leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {advantage.text}
                  </p>
                  <div className="h-0.5 w-0 bg-blue-500 group-hover:w-20 mt-3 transition-all duration-500 ease-out"></div>
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

      <div className="flex  items-center gap-[20px] p-[50px_0px] justify-center">
        <video
          src="./video_2025-10-01_09-37-28.mp4"
          controls
          autoPlay={false}
          loop
          muted
          className="rounded-xl shadow-lg w-[300px] h-[400px]"
        />
        <video
          src="/video_2025-10-01_09-44-46(1).mp4"
          controls
          autoPlay={false}
          loop
          muted
          className="rounded-xl shadow-lg w-[300px] h-[400px]"
        />
        <video
          src="/video_2025-10-01_09-50-17(2).mp4"
          controls
          autoPlay={false}
          loop
          muted
          className="rounded-xl shadow-lg w-[300px] h-[400px]"
        />
        <video
          src="./video_2025-10-01_09-37-28.mp4"
          controls
          autoPlay={false}
          loop
          muted
          className="rounded-xl shadow-lg w-[300px] h-[400px]"
        />
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
          <TeachersSlider />
        </div>
        <LessonCard />
      </section>

      <div style={{ scrollbarColor: "transparent transparent" }} className='flex overflow-auto w-[95%] h-[400px] m-auto p-[50px_0px] gap-5'>
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
