"use client"
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import { Facebook, LinkedIn, Instagram, VolumeOff, VolumeUp } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import {
  Email,
  LocationOn,
  Phone,
  Share
} from "@mui/icons-material";
import ContactForm from '../component/message';

const page = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };



  return (
    <div className="pt-[80px] bg-gradient-to-br from-white to-blue-50 dark:from-[#050524] dark:to-[#0a0a3a] transition-all duration-500 min-h-screen">

      {/* Header Section */}
      <div className="relative bg-gradient-to-r bg-blue-50 dark:from-[#070727] dark:via-[#0a0a3a] dark:to-[#050524] py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-blue-600 mb-6 drop-shadow-2xl">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <div className="flex items-center justify-center gap-3  text-lg">
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              Home
            </span>
            <EastIcon className="" />
            <span className="text-blue-600 font-semibold underline decoration-2">Contact</span>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 dark:text-blue-400 uppercase font-bold tracking-widest text-sm mb-4">Get In Touch</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
              Start Your Language <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey Today</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl">
              Ready to unlock new opportunities? Contact us now and let's begin your language learning adventure together.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button
              onClick={() => router.push("/courses")}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-1 active:translate-y-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">Check Your Level</span>
                <EastIcon className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Contact + Video Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Reach out to us - we're here to help you succeed in your language journey
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Contact Info Card */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 lg:p-10 transition-all duration-500 hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20">


            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30">
                <div className="bg-blue-500 p-3 rounded-xl">
                  <LocationOn className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Our Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Маҳаллаҳои 82, 92, 93, 101, 102<br />
                    Душанбе, Тоҷикистон
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-900/30">
                <div className="bg-green-500 p-3 rounded-xl">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Phone Numbers</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +992 551 16 16 16<br />
                    +992 555 66 16 66
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/30">
                <div className="bg-purple-500 p-3 rounded-xl">
                  <Email className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">intellect.tj@mail.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 transition-all duration-300 hover:bg-orange-100 dark:hover:bg-orange-900/30">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Share className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, color: "bg-blue-500 hover:bg-blue-600", label: "Facebook" },
                      { icon: LinkedIn, color: "bg-blue-700 hover:bg-blue-800", label: "LinkedIn" },
                      { icon: Instagram, color: "bg-pink-500 hover:bg-pink-600", label: "Instagram" }
                    ].map((social, index) => (
                      <IconButton
                        key={index}
                        className={`${social.color} text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </IconButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-xl bg-black">
            {/* Видео */}
            <video
              ref={videoRef}
              src="/video_4.mp4"
              poster="/video-poster.jpg"
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Play / Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center transition-all duration-500"
            >
              <div
                className={`bg-black/40 backdrop-blur-md rounded-full p-3 transition-all duration-500 ${isPlaying
                    ? "opacity-0 scale-50"
                    : "opacity-100 scale-100"
                  }`}
              >
                <Play className="w-8 h-8 text-white" />
              </div>
            </button>

            {/* Mute / Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-md p-2 rounded-full transition-all duration-300"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>


          </div>
        </div>

         {/* Google Map */}
          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.123456789!2d68.7812345!3d38.5601234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b599f1a0c09c0f%3A0xabcdef123456789!2sINTELLECT!5e0!3m2!1sen!2s!4v1695814234567!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl h-[80vh] shadow-lg"
            />

          </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800">

          {/* Сарлавҳа */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
              Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Message</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <ContactForm/>

        </div>
      </div>

    </div>
  );
};

export default page;
