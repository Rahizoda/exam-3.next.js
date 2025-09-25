// components/LanguageLanding.js

import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';

const languages = [
  {
    flag: "/images/image copy.png",
    title: "British English",
    description: "The global standard form of English.",
    primary: true
  },
  {
    flag: "/images/image copy 2.png",
    title: "American English",
    description: "Pronunciation and slang used in the U.S."
  },
  {
    flag: "/images/image copy 3.png",
    title: "German",
    description: "One of the most widely spoken European languages."
  },
  {
    flag: "/images/image copy 4.png",
    title: "Spanish",
    description: "Spoken across Spain and Latin America."
  },
  {
    flag: "/images/image copy 5.png",
    title: "French",
    description: "Language of love, culture, and diplomacy."
  },
  {
    flag: "/images/image copy 6.png",
    title: "Indian",
    description: "Widely spoken across India in various dialects."
  },
  {
    flag: "/images/image copy 7.png",
    title: "Chinese",
    description: "Mandarin and regional variations included."
  },
  {
    flag: "/images/image copy 8.png",
    title: "Poland",
    description: "Popular Eastern European language."
  }
];

const LanguageLanding = () => {
  return (
    <div className="bg-accent dark:bg-black">

      {/* Header / Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-[85px] text-blue-400 font-bold">
          Let’s Start the Lesson. <br />
          <span className="text-blue-600">Choose Your Tutor!</span>
        </h1>


        <div className="flex justify-around items-center">
          <div>
            <h3 className='text-2xl text-start'>
              Choose from a variety of <br />
              languages, including English, <br />
              Spanish, French, German, <br />
              and many more.
            </h3>
            <button></button>
          </div>
          <img className='w-[450px] h-[600px]' decoding="async" src="https://wgl-dsites.net/lingplus/wp-content/uploads/2025/07/hp4-layer-1.webp" alt="hp4-layer-1"></img>
          <section className=" p-10">
            <div className="max-w-5xl mx-auto flex flex-col  justify-around items-center text-center gap-6">
              <div className='flex border rounded-2xl items-center gap-4'>
                <h2 className="text-[75px] font-bold text-blue-600">80+</h2>
                <p className="text-gray-600 text-3xl">Language <br /> Courses</p>
              </div>
              <div className='flex border rounded-2xl items-center gap-4'>
                <h2 className="text-[75px] font-bold text-blue-600">95%</h2>
                <p className="text-gray-600 text-3xl">Satisfaction <br /> Rate</p>
              </div>
              <div className='flex border rounded-2xl items-center gap-4'>
                <h2 className="text-[75px] font-bold text-blue-600">1mil</h2>
                <p className="text-gray-600 text-3xl">Lessons <br />Completed</p>
              </div>
            </div>
          </section>
        </div>
        <h2 className="text-xl text-blue-500 mt-[40px] font-bold">What we offer</h2>

      </section>



      {/* Language Cards */}
      <section className="  px-4">
        <div className="text-center mb-10">
          <p className=" font-bold mt-2 text-4xl text-center">
            Our courses are designed to empower learners at all <br />
            levels, from beginners to advanced speakers. Trusted <br />
            by 500+ students & business owners
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`
            group p-6 border border-gray-400  rounded-2xl w-[300px] h-[400px] transition-all hover:scale-105 duration-700 shadow-md hover:shadow-lg
            hover:bg-blue-600 hover:text-white
           `}
            >
              {/* Flag */}
              <div className="w-12 h-12 rounded-[50%] mb-4">
                <Image
                  src={lang.flag}
                  alt={lang.title}
                  width={100}
                  height={100}
                  className="object-cover h-[50px] w-[55px] rounded-[50%] "
                />
              </div>
                <br /><br /><br />
              {/* Title */}
              <h3 className="text-3xl font-semibold mb-1 ">
                {lang.title}
              </h3>
                <br />
              {/* Description */}
              <p className="text-[20px] w-[280px] text-gray-600 group-hover:text-white ">
                {lang.description}
              </p>
                <br />
              {/* Button */}
              <button className="group flex items-center justify-start w-11 h-11 bg-white  rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg group-hover:w-[65%] group-hover:rounded-lg active:translate-x-1 active:translate-y-1">
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <EastIcon sx={{color:"blue", }} />
                </div>
                <div className="absolute  right-5 transform translate-x-full opacity-0 text-blue-600 text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Read More
                </div>
              </button>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LanguageLanding;
