"use client"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const images = [
  {
    image: '/image copy (2).png',
    title: 'Speak Fluently, Connect Globally',
    text: 'Users create personal profiles and connect with others, forming networks based on mutual interests, relationships, or affiliations.'
  },
  {
    image: '/image copy (3).png',
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
];

const HeroSection = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const router = useRouter();

  // Массив градиентов для каждого слайда
  const gradients = [
    "linear-gradient(135deg, #71CDCD 0%, #81ACD9 50%, #B3CDEF 100%)",
    "linear-gradient(135deg, #69B18E 0%, #73A7A4 50%, #86C1C9 100%)",
    "linear-gradient(135deg, #9FB1BC 0%, #BCD3DE 100%)",
    "linear-gradient(135deg, #71CDCD 0%, #81ACD9 50%, #B3CDEF 100%)",
    "linear-gradient(135deg, #69B18E 0%, #73A7A4 50%, #86C1C9 100%)"
  ];

  const handleImageLoad = (imageUrl) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl));
  };

  return (
    <section className="relative w-[95%] mt-[60px] md:mt-[100px] mx-auto" aria-label="Main services introduction">
      <div className="flex-1 relative xl:-mt-20 sm:-mt-0">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1500}
          modules={[Autoplay, EffectFade]}
          className="mySwiper h-[60vh] rounded-3xl sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] w-full relative overflow-hidden"
          aria-label="Services slider"
        >
          {images.map((service, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Gradient */}
              <div
                className="absolute inset-0 z-10 transition-all duration-1000"
                style={{ background: gradients[index] }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 z-15 bg-black/10"></div>

              {/* Content */}
              <div className="relative xl:max-h-[500px] sm:max-h-[450px] py-10 z-20 h-full flex items-center justify-around">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[70vh]">
                    {/* Text Content */}
                    <div className="lg:w-1/2 flex flex-col xl:mt-0 sm:mt-5 justify-center text-center lg:text-left space-y-6">
                      <div className="relative">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                          {service.title}
                        </h1>
                        <div className="w-20 h-1 bg-white/80 rounded-full mt-4 mx-auto lg:mx-0"></div>
                      </div>

                      <p className="text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl">
                        {service.text}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                          className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          Подробнее
                        </Button>
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-96 w-full">
                      <div className="relative h-full w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg h-full">
                          <div className="w-full h-full rounded-2xl backdrop-blur-sm overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover rounded-3xl"
                              onLoad={() => handleImageLoad(service.image)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Styles */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 2px;
            margin: 0 3px !important;
            opacity: 0.6;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: rgba(255, 255, 255, 0.9);
            opacity: 1;
            transform: scaleY(1.2);
          }

          .swiper-pagination-bullet:hover {
            opacity: 0.8;
            transform: scaleY(1.1);
          }

          @media (max-width: 640px) {
            .swiper-pagination-bullet {
              width: 20px !important;
              height: 2px !important;
              margin: 0 2px !important;
            }
          }

          .swiper-slide {
            transition: opacity 1500ms ease-in-out;
          }
        `}</style>
      </div>
    </section>
  )
}

export default HeroSection
