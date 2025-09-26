"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Section2 = () => {
  return (
    <div>


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        pagination={{ clickable: true }}
        speed={1500}
        loop={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <div className=' rounded-2xl p-[20px] '>
            <h1 className='text-[40px] text-blue-600 font-bold'>Personal Lessons</h1> <br />
            <div className='flex justify-around items-center' >
              <div>

                <p>
                  Personal English lessons offer tailored, one-on-one <br />
                  instruction designed to meet your unique language <br />
                  learning goals.
                </p> <br />
                <p className='text-gray-600'>
                  With customized lesson plans, flexible scheduling, and <br />
                  focused attention from an expert tutor, you can improve <br />
                  your English skills faster and more effectively.
                </p>
              </div>
              <img className='!w-[400px] !h-[250px] rounded-2xl img3' loading="lazy" decoding="async" width="940" height="500" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-1.webp" class="attachment-full size-full wp-image-860" alt="" srcset="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-1.webp 940w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-1-300x160.webp 300w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-1-768x409.webp 768w" sizes="(max-width: 940px) 100vw, 940px"></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' rounded-2xl p-[20px] '>
            <h1 className='text-[40px] font-bold text-blue-600'>Group Courses</h1> <br />
            <div className='flex justify-around items-center' >
              <div>
                <p>
                  Personal English lessons offer tailored, one-on-one <br />
                  instruction designed to meet your unique language <br />
                  learning goals.
                </p> <br />
                <p className='text-gray-600'>
                  With customized lesson plans, flexible scheduling, and <br />
                  focused attention from an expert tutor, you can improve <br />
                  your English skills faster and more effectively.
                </p>
              </div>
              <img className='!w-[400px] !h-[250px] rounded-2xl img3' loading="lazy" decoding="async" width="940" height="500" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-2.webp" class="attachment-full size-full wp-image-861" alt="" srcset="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-2.webp 940w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-2-300x160.webp 300w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-2-768x409.webp 768w" sizes="(max-width: 940px) 100vw, 940px"></img>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' rounded-2xl p-[20px] '>

            <h1 className='text-[40px] font-bold text-blue-600'>Corporate Program</h1> <br />
            <div className='flex justify-around items-center' >
              <div>

                <p>
                  Personal English lessons offer tailored, one-on-one <br />
                  instruction designed to meet your unique language <br />
                  learning goals.
                </p> <br />
                <p className='text-gray-600'>
                  With customized lesson plans, flexible scheduling, and <br />
                  focused attention from an expert tutor, you can improve <br />
                  your English skills faster and more effectively.
                </p>
              </div>
              <img className='!w-[400px] !h-[250px] rounded-2xl img3' loading="lazy" decoding="async" width="940" height="500" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-3.webp" class="attachment-full size-full wp-image-862" alt="" srcset="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-3.webp 940w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-3-300x160.webp 300w, https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/accordion1-3-768x409.webp 768w" sizes="(max-width: 940px) 100vw, 940px"></img>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Section2;
