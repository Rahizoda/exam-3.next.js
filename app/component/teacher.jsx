"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Share } from "@mui/icons-material";

const teachers = [
  {
    name: "Peter Albruss",
    role: "Language Coach",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-740x960.webp",
  },
  {
    name: "Kelly Black",
    role: "Multilingual ",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-2-740x960.webp",
  },
  {
    name: "Ann Perry",
    role: "Language Instructor",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-3-740x960.webp",
  },
  {
    name: "Marry Olson",
    role: "Multilingual Educator",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-4-740x960.webp",
  },
  {
    name: "Matey Blackwood",
    role: "Language Specialist",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-5-740x960.webp",
  },
  {
    name: "Peter Albruss",
    role: "Language Coach",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-740x960.webp",
  },
  {
    name: "Kelly Black",
    role: "Multilingual ",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-2-740x960.webp",
  },
  {
    name: "Ann Perry",
    role: "Language Instructor",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-3-740x960.webp",
  },
  {
    name: "Marry Olson",
    role: "Multilingual Educator",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-4-740x960.webp",
  },
  {
    name: "Matey Blackwood",
    role: "Language Specialist",
    img: "https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/team-5-740x960.webp",
  },
];

export default function TeachersSlider() {
  return (
    <div className="w-[95%]  mx-auto  sm:py-12 lg:py-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="teachers-swiper w-[95%] h-auto">
          {/* ваш Swiper код */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24
            },
          }}
          className="teachers-swiper mySwiper !w-[95%] "
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index} className="pb-10 !bg-[#ffffff00]">
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden w-full h-full sm:h-[350px] lg:h-full relative transition-all duration-300 hover:scale-105">

                {/* Share Icon */}
                <div className="absolute top-3 left-3 bg-blue-600 rounded-full p-2 text-white cursor-pointer opacity-90 group-hover:opacity-100 transition z-10 hover:bg-blue-700">
                  <Share fontSize="small" />
                </div>

                {/* Image Container */}
                <div className="relative w-full h-full">
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="font-semibold text-sm sm:text-base">{teacher.name}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{teacher.role}</p>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
}
