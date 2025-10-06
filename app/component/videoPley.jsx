"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";


const videos = [
  {
    url: "/video_1.mp4",
    name: "Зохира Фурмол",
    role: "Frontend Developer",
  },
  {
    url: "/video_2.mp4",
    name: "Мехриддин Саидов",
    role: "Frontend Developer",
  },
  {
    url: "/video_3.mp4",
    name: "Илхом Саидов",
    role: "Frontend Developer",
  },
  {
    url: "/video_1.mp4",
    name: "Зохира Фурмол",
    role: "Frontend Developer",
  },
  {
    url: "/video_2.mp4",
    name: "Мехриддин Саидов",
    role: "Frontend Developer",
  },
  {
    url: "/video_3.mp4",
    name: "Илхом Саидов",
    role: "DevOps Engineer",
  },
  {
    url: "/video_2.mp4",
    name: "Сафия Дадачонова",
    role: "UI Designer",
  },
];

export default function AlumniReviews() {
  const [isMounted, setIsMounted] = useState(true);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(null);
  const [progress, setProgress] = useState({});
  const [isPhotoMode, setIsPhotoMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (playingIndex !== null) {
      setProgress((prev) => ({ ...prev, [playingIndex]: 0 }));
      setIsPhotoMode(false);
    } else {

      setTimeout(() => {
        setIsPhotoMode(false);
      }, 300);
    }
  }, [playingIndex]);

  const handleCardClick = (index) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  const handleProgress = (state) => {
    if (playingIndex !== null) {
      setProgress((prev) => ({ ...prev, [playingIndex]: state.played * 100 }));
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };


  if (!isMounted) {
    return (
      <section className="w-full bg-gray-50/50 py-16 ">
        <div className="py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Alumni reviews
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Listen to what those who have already completed our courses say
              and get the necessary recommendations from them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-lg bg-gray-200 animate-pulse"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const videoRefs = useRef([]);

  const handleCardClick1 = (index) => {
    if (playingIndex === index) {
      videoRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        videoRefs.current[playingIndex].pause();
      }
      videoRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="xl:w-[86%] m-auto sm:w-full">
      <div>
        <div className="relative">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="sm:text-[28px] text-[20px] font-[700] text-[#262626] dark:text-[#FAFAFA] text-start mb-8">
                {/* {t("reviewsVideo.title")} */}
              </h2>
              <p className="text-xl text-gray-700 dark:text-[#FAFAFA]">
                {/* {t("reviewsVideo.desc")} */}
              </p>
            </div>
          </div>

          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="">
              {videos.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 max-w-[300px] basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden aspect-[9/16] shadow-xl group cursor-pointer transform transition-all duration-300 hover:shadow-2xl`}
                  onClick={() => handleCardClick1(index)}
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                  >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>

                  {/* Small corner play indicator */}
                  {playingIndex !== index && (
                    <div className="absolute top-3 left-3 z-20">
                      <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Mute/Unmute button when playing */}
                  {playingIndex === index && (
                    <div
                      className="absolute top-3 right-3 z-30"
                      onClick={toggleMute}
                    >
                      <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        {isMuted ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-white"
                          >
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-white"
                          >
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  )}


                  <div className="w-full h-full">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.url}
                      muted={isMuted}
                      width="100%"
                      height="100%"
                      playsInline
                      loop={false}
                      style={{ objectFit: "cover" }}
                      onEnded={() => setPlayingIndex(null)}
                    />

                  </div>


                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <div className="backdrop-blur-md rounded-lg p-3 text-white bg-black/20">
                        <h3 className="font-semibold text-lg">{video.name}</h3>
                        <p className="text-sm text-gray-200">{video.role}</p>
                      </div>
                    </div> */}
                </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
    </section >
  );
}
