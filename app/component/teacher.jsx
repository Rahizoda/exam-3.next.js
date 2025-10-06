"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Share } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
];

export default function TeachersSlider() {
  return (
    <div className="w-[95%] mx-auto py-8 sm:py-12 relative">
      {/* Заголовок (по желанию) */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Meet Our Professional Teachers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
          Highly qualified experts ready to guide your language journey.
        </p>
      </div>

      {/* Swiper container */}
      <div className="relative w-full max-w-[1300px] mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            480: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          className="pb-14"
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide
              key={index}
              className="pb-10 !bg-transparent flex justify-center"
            >
              {/* Teacher Card (unchanged) */}
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden w-full h-full sm:h-[350px] lg:h-full relative transition-all duration-300 hover:scale-105">
                {/* Share Icon */}
                <div className="absolute top-3 left-3 bg-blue-600 rounded-full p-2 text-white cursor-pointer opacity-90 group-hover:opacity-100 transition z-10 hover:bg-blue-700">
                  <Share fontSize="small" />
                </div>

                {/* Image */}
                <div className="relative w-full h-full">
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {teacher.name}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    {teacher.role}
                  </p>
                </div>

                {/* Overlay */}
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev/Next buttons */}
        <div className="relative top-10  sm:hidden bottom-0 left-0 right-0 flex justify-center items-center gap-6 mt-4">
          <button className="swiper-prev flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md active:scale-95">
            <ArrowBackIosNewIcon sx={{ fontSize: "1.1rem" }} />
          </button>
          <button className="swiper-next flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md active:scale-95">
            <ArrowForwardIosIcon sx={{ fontSize: "1.1rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
