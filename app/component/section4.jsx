'use client';

import { useState, useEffect } from 'react';

const IntelectStatistics = () => {
  const [counters, setCounters] = useState({
    years: 0,
    graduates: 0,
    employed: 0,
    satisfaction: 0
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    {
      value: counters.years,
      suffix: '+',
      label: 'Years of Experience',
      sublabel: 'Educational expertise',
      icon: (
        <img className='w-full h-full rounded-2xl object-cover ' src="/images/image copy 9.png" alt="" />
      )
    },
    {
      value: counters.graduates,
      suffix: '+',
      label: 'Graduates',
      sublabel: 'Successful students',
      icon: (
        <img className='w-full h-full rounded-2xl object-cover ' src="/images/image copy 10.png" alt="" />
      )
    },
    {
      value: counters.employed,
      suffix: '%',
      label: 'Working in IT',
      sublabel: 'Employed in tech',
      icon: (
        <img className='w-full h-full rounded-2xl object-cover ' src="/images/image copy 12.png" alt="" />
      )
    },
    {
      value: counters.satisfaction,
      suffix: '%',
      label: 'Recommend Us',
      sublabel: 'Student satisfaction',
      icon: (
        <img className='w-full h-full rounded-2xl object-cover ' src="/images/image copy 11.png" alt="" />
      )
    }
  ];

  useEffect(() => {
    const targetValues = { years: 4, graduates: 1000, employed: 68, satisfaction: 98 };
    const duration = isMobile ? 1200 : 1800; // Быстрее на мобильных
    const steps = isMobile ? 50 : 75;

    Object.keys(targetValues).forEach(key => {
      let current = 0;
      const target = targetValues[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    });
  }, [isMobile]);

  return (
    <section className="w-full bg-gradient-to-br  to-blue-50/30 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Adaptive Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-cyan-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        {/* Grid Pattern - адаптивный размер */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">

        {/* Adaptive Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 hover:border-blue-300/80 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-xl sm:hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-700 rounded-2xl sm:rounded-3xl"></div>

              {/* Animated Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-4 sm:-inset-6 md:-inset-10 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-lg sm:blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
              </div>

              <div className="relative z-10">
                {/* Adaptive Icon Container */}
                <div className="relative mb-4 sm:mb-5 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
                    {stat.icon}
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-blue-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 blur-sm"></div>
                </div>

                {/* Adaptive Number with Glow Effect */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-br from-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                    {stat.value}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{stat.suffix}</span>
                  </div>
                  {/* Number Glow */}
                  <div className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-500/20 blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100">
                    {stat.value}{stat.suffix}
                  </div>
                </div>

                {/* Adaptive Label */}
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                  {stat.label}
                </h3>

                {/* Adaptive Sublabel */}
                <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 font-light leading-tight">
                  {stat.sublabel}
                </p>

                {/* Animated Progress Bar */}
                <div className="mt-4 sm:mt-5 md:mt-6 relative">
                  <div className="h-0.5 sm:h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelectStatistics;
