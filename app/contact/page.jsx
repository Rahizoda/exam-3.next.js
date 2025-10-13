"use client"
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import ContactFormDarkMode from '../component/carta';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const page = () => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    toggleVideoPlayback();
  };

  return (
    <div className="pt-[100px] bg-accent dark:bg-[#050524] transition-colors duration-500">

      {/* Header */}
      <div className="flex flex-col bg-[#caebfd] dark:bg-[#070727] justify-center p-[50px_0px] items-center gap-10 shadow-inner">
        <h1 className="text-blue-700 text-[70px] font-extrabold drop-shadow-md">Contact</h1>
        <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
          <span onClick={() => router.push("/")} className="cursor-pointer hover:underline hover:text-blue-600 transition-all duration-300">Home</span>
          <EastIcon />
          <span className="cursor-pointer underline text-blue-600">Contact</span>
        </p>
      </div>

      {/* Intro Section */}
      <div className="p-10 text-center lg:text-left">
        <p className="text-blue-800 dark:text-blue-400 uppercase font-semibold tracking-widest">our contacts</p>
        <h1 className="text-[50px] font-bold mt-4 text-gray-900 dark:text-white leading-tight">
          Start Your Language <br />
          Journey with Us
        </h1>
        <button
          onClick={() => router.push("/courses")}
          className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-[250px] hover:rounded-xl active:translate-x-1 active:translate-y-1 mt-6 mx-auto lg:mx-0"
        >
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <EastIcon sx={{ color: "white" }} />
          </div>
          <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Check Your Level
          </div>
        </button>
      </div>

      {/* Contact + Video Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-20 gap-14 bg-gradient-to-b from-[#f0f8ff] via-[#eaf3ff] to-[#f8fbff] dark:from-[#0a0a1a] dark:via-[#0d0d24] dark:to-[#050524] transition-colors duration-500">

        {/* Contact Info */}
        <section className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-800 text-gray-800 dark:text-gray-100 py-10 px-8 w-full lg:w-[40%] transition-all duration-500 hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg leading-relaxed">
              Get in touch to discuss your employee wellbeing needs today. <br />
              Please give us a call, drop us an email.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-blue-600 font-semibold mb-2">ADDRESS:</h3>
                <p>Маҳаллаҳои 82, 92, 93, 101, 102 <br /> Душанбе, Тоҷикистон</p>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold mb-2">PHONE:</h3>
                <p>+992 551 16 16 16</p>
                <p>+992 555 66 16 66</p>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold mb-2">MAIL US:</h3>
                <p>intellect.tj@mail.com</p>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold mb-2">IN SOCIALS:</h3>
                <Stack direction="row" spacing={2}>
                  <IconButton color="primary" aria-label="Facebook" className="hover:scale-110 transition-all">
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary" aria-label="LinkedIn" className="hover:scale-110 transition-all">
                    <LinkedIn />
                  </IconButton>
                  <IconButton color="primary" aria-label="Instagram" className="hover:scale-110 transition-all">
                    <Instagram />
                  </IconButton>
                </Stack>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <div className="w-full lg:w-[55%] relative group flex justify-center items-center">
          <video
            ref={videoRef}
            src="/video_2025-10-01_09-57-15()3.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            onClick={handleVideoClick}
            className="w-[700px] max-w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-blue-200 dark:border-blue-800 cursor-pointer transition-transform duration-500 group-hover:scale-[1.03] group-hover:shadow-blue-300/30 dark:group-hover:shadow-blue-900/30"
            poster="/video-poster.jpg"
          />

          {/* Overlay Controls */}
          <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={toggleVideoPlayback}
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label={isVideoPlaying ? "Пауза" : "Воспроизвести"}
            >
              {isVideoPlaying ? <Pause className="w-5 h-5 text-gray-900 dark:text-gray-100" /> : <Play className="w-5 h-5 text-gray-900 dark:text-gray-100" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label={isMuted ? "Включить звук" : "Выключить звук"}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-gray-900 dark:text-gray-100" /> : <Volume2 className="w-5 h-5 text-gray-900 dark:text-gray-100" />}
            </button>
          </div>

          {/* Video Overlay Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Mobile Status */}
          <div className="lg:hidden absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {isVideoPlaying ? '▶️ Воспроизводится' : '⏸️ На паузе'}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 lg:px-16 pb-20">
        <ContactFormDarkMode />
      </div>
    </div>
  );
};

export default page;
