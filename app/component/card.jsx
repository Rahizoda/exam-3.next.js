"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function LanguagesSection({ languages }) {
  return (
    <section className="relative py-14 sm:py-20 px-5 sm:px-8 lg:px-12 bg-white dark:bg-[#0B0E14] transition-colors duration-500">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Learn Languages With Confidence
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Our courses empower learners from beginners to advanced speakers.
          <br />
          Trusted by{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            500+ students
          </span>{" "}
          & professionals.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group relative w-full max-w-[310px] rounded-2xl overflow-hidden bg-gray-50 dark:bg-[#131821] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.4)] transition-all duration-500 hover:-translate-y-3"
          >
            <div className="relative w-full h-40 bg-gradient-to-b from-blue-100 to-white dark:from-blue-900/20 dark:to-[#0B0E14] flex items-center justify-center">
              <Image
                src={lang.flag}
                alt={lang.title}
                width={90}
                height={90}
                className="rounded-[10px] ring-4 ring-white dark:ring-gray-800 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {lang.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                {lang.description}
              </p>
              <button className="relative inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-lg transition-all duration-300 active:scale-95">
                <EastIcon sx={{ fontSize: "1.2rem", mr: 1 }} />
                Read More
              </button>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-600 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="block sm:hidden relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={12}
          slidesPerView={1}
          centeredSlides
          className="pb-12" // фосила барои кнопкаҳо
        >
          {languages.map((lang, index) => (
            <SwiperSlide key={index}>
              <div className="group relative w-[90%] max-w-[280px] mx-auto rounded-2xl overflow-hidden bg-gray-50 dark:bg-[#131821] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_rgba(59,130,246,0.4)] transition-all duration-500 hover:-translate-y-3">
                {/* Flag */}
                <div className="relative w-[110px] h-[90px] m-auto mt-[10px] flex items-center justify-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-900/20 dark:to-[#0B0E14]">
                  <Image
                    src={lang.flag}
                    alt={lang.title}
                    width={110}
                    height={90}
                    className="rounded-xl ring-4 ring-white dark:ring-gray-800 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {lang.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                    {lang.description}
                  </p>
                  <button className="relative inline-flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md shadow-lg transition-all duration-300 active:scale-95">
                    <EastIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
                    Read More
                  </button>
                </div>

                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev / Next buttons */}
        <div className="relative top-0  bottom-0 left-0 right-0 flex justify-center items-center gap-6 mt-[50px]">
          <button className="swiper-prev flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
            <ArrowBackIosNewIcon sx={{ fontSize: "1.1rem" }} />
          </button>
          <button className="swiper-next flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
            <ArrowForwardIosIcon sx={{ fontSize: "1.1rem" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
