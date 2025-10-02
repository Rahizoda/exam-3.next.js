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
    <div className=" py-16 w-[95%] m-auto">
      <div className="max-w-[100%] mx-auto px-6 pb-[100px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="gap-[20px] mySwipe2"
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide key={index} className="mySwipe2-swiper-slide rounded-2xl m-auto ">
              <div className="  bg-white rounded-2xl shadow-md overflow-hidden w-full  ">

                {/* Share Icon */}
                <div className="absolute top-3 left-3 bg-blue-600 rounded-full p-2 text-white cursor-pointer opacity-90 group-hover:opacity-100 transition z-10">
                  <Share fontSize="small" />
                </div>

                {/* Image */}
                <div className="image">

                <img
                  fil
                  src={teacher.img}
                  alt={teacher.name}
                  className=" imga rounded-2xl absolute inset-0 h-full object-cover"
                  />
                  </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <h3 className="font-semibold text-sm">{teacher.name}</h3>
                  <p className="text-xs opacity-90">{teacher.role}</p>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </SwiperSlide>


          ))}
        </Swiper>
      </div>
    </div>
  );
}
