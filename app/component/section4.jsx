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
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      value: counters.graduates,
      suffix: '+',
      label: 'Graduates',
      sublabel: 'Successful students',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      value: counters.employed,
      suffix: '%',
      label: 'Working in IT',
      sublabel: 'Employed in tech',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M10 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8.4C2 7.07452 3.07452 6 4.4 6H6.5C7.32843 6 8 6.67157 8 7.5C8 8.32843 7.32843 9 6.5 9H2V8.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 17H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      value: counters.satisfaction,
      suffix: '%',
      label: 'Recommend Us',
      sublabel: 'Student satisfaction',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
          <path d="M14 9.5V5.5C14 4.4 13.1 3.5 12 3.5C10.9 3.5 10 4.4 10 5.5V9.5C10 10.6 10.9 11.5 12 11.5C13.1 11.5 14 10.6 14 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 11.5H19C20.1 11.5 21 12.4 21 13.5V19.5C21 20.6 20.1 21.5 19 21.5H5C3.9 21.5 3 20.6 3 19.5V13.5C3 12.4 3.9 11.5 5 11.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 17.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
        {/* Adaptive Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base font-medium mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            </div>
            <span className="whitespace-nowrap">Trusted by Thousands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intelect</span>
            <br className="hidden sm:block" /> Stands Out
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Transforming careers through cutting-edge education and industry-proven training methodologies
          </p>
        </div>

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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
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

        {/* Adaptive Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-gradient-to-r from-white to-blue-50/50 backdrop-blur-sm border border-blue-200/50 rounded-2xl sm:rounded-3xl px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:scale-105 mx-2 sm:mx-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full relative"></div>
              </div>
              <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent text-center sm:text-left">
                Ready to transform your career?
              </span>
            </div>
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden text-sm sm:text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                Start Learning Now
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Adaptive Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm">
            {[
              { label: 'Industry Curriculum', icon: '📚', fullLabel: 'Industry-Relevant Curriculum' },
              { label: 'Expert Instructors', icon: '👨‍🏫', fullLabel: 'Expert Instructors' },
              { label: 'Career Support', icon: '💼', fullLabel: 'Career Support' },
              { label: 'Flexible Learning', icon: '⏰', fullLabel: 'Flexible Learning' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/50 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-gray-200/50 hover:border-blue-200 transition-all duration-300 hover:scale-105">
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span className="text-gray-600 font-medium hidden sm:inline">
                  {item.fullLabel}
                </span>
                <span className="text-gray-600 font-medium sm:hidden">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelectStatistics;
