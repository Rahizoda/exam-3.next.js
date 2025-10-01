"use client"

import React, { useState, useEffect } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { useRouter, usePathname } from 'next/navigation';
import SelectSmall from './select';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', path: '/', section: 'home' },
    { label: 'Courses', path: '/courses', section: 'courses' },
    { label: 'About Us', path: '/about', section: 'about' },
    { label: 'Contact', path: '/contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Определяем активную секцию на основе скролла
      const sections = ['home', 'courses', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Устанавливаем активную секцию на основе текущего пути
    const currentSection = navItems.find(item => item.path === pathname)?.section || 'home';
    setActiveSection(currentSection);
  }, [pathname]);

  const handleNavClick = (path, section) => {
    router.push(path);
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`
        flex z-50 fixed top-0 w-full transition-all duration-500
        ${isScrolled
          ? 'dark:bg-[#06062b]/95 bg-white/95 backdrop-blur-md shadow-2xl py-3'
          : 'dark:bg-[#06062b] bg-white shadow-lg py-5'
        }
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo Section */}
            <div
              className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => handleNavClick('/', 'home')}
            >
              <div className="relative">
                <img
                  alt="logo"
                  className="rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-500 group-hover:rotate-6 group-hover:shadow-lg"
                  src="https://yt3.googleusercontent.com/LpHa_hOEw1anos7wppFAF_WCAh4BUOIinCB5QKSgWgtghjbJdZcjQHzAx2lnx2o77PIz9R9MtQ=s160-c-k-c0x00ffffff-no-rj"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
              <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105'>
                Intelect
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-8 xl:gap-12'>
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path, item.section)}
                  className={`
                    relative text-lg font-semibold transition-all duration-300 group py-2
                    ${activeSection === item.section
                      ? 'text-blue-600 dark:text-blue-400 scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className={`
                    absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out
                    ${activeSection === item.section ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}></span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>

                  {/* Active Indicator Dot */}
                  {activeSection === item.section && (
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-3 sm:gap-4 lg:gap-6'>

              {/* Search Bar - Desktop */}
              <div className="hidden md:block relative">
                <div className="relative transition-all duration-500 w-64">
                  <input
                    className="w-full px-4 pl-12 py-3 bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-2xl
                           focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
                           transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder='Search courses...'
                    type="text"
                  />
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                </div>
              </div>

              {/* Theme Toggler */}
              <div className="hidden sm:block">
                <AnimatedThemeToggler />
              </div>

              {/* Language Select */}
              <div className="hidden sm:block">
                <SelectSmall />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-20">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute top-0 right-0 w-80 h-full bg-white dark:bg-[#06062b] shadow-2xl transform transition-transform duration-500 ease-out">
            <div className="p-6">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Menu
                </h2>
                <button
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path, item.section)}
                    className={`
                      w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 group
                      ${activeSection === item.section
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500/50'
                        : 'bg-gray-50 dark:bg-gray-800 border-transparent hover:border-blue-500/50'
                      }
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className={`
                      text-lg font-semibold transition-colors duration-300 flex items-center gap-3
                      ${activeSection === item.section
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }
                    `}>
                      {item.label}
                      {activeSection === item.section && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Search */}
              <div className="mt-6">
                <div className="relative">
                  <input
                    className="w-full px-4 pl-12 py-3 bg-gray-100 dark:bg-gray-800 border-2 border-blue-500 rounded-2xl
                           focus:outline-none focus:ring-4 focus:ring-blue-500/20
                           transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder='Search courses...'
                    type="text"
                  />
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="absolute bottom-6 left-6 right-6 space-y-4">
                <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <AnimatedThemeToggler />
                  <SelectSmall />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Section Indicator for Mobile */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl px-4 py-2">
        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Active: {navItems.find(item => item.section === activeSection)?.label || 'Home'}
        </div>
      </div>
    </>
  )
}

export default Navbar
