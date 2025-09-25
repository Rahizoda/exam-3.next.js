// components/LanguageLanding.js

import Image from 'next/image';

const languages = [
  {
    flag: "/images/flags/uk.png",
    title: "British English",
    description: "The global standard form of English."
  },
  {
    flag: "/images/flags/us.png",
    title: "American English",
    description: "Pronunciation and slang used in the U.S."
  },
  {
    flag: "/images/flags/germany.png",
    title: "German",
    description: "One of the most widely spoken European languages."
  },
  {
    flag: "/images/flags/spain.png",
    title: "Spanish",
    description: "Spoken across Spain and Latin America."
  },
  {
    flag: "/images/flags/france.png",
    title: "French",
    description: "Language of love, culture, and diplomacy."
  },
  {
    flag: "/images/flags/india.png",
    title: "Indian",
    description: "Widely spoken across India in various dialects."
  },
  {
    flag: "/images/flags/china.png",
    title: "Chinese",
    description: "Mandarin and regional variations included."
  },
  {
    flag: "/images/flags/poland.png",
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
      </section>



      {/* Language Cards */}
      <section className="py-16  px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What we offer</h2>
          <p className="text-gray-500 mt-2">
            Our courses are designed to empower learners at all levels, from beginners to advanced speakers.
          </p>
          <p className="text-gray-500">
            Trusted by 500+ students & business owners.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="border shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <Image src={lang.flag} alt={lang.title} width={40} height={30} />
              </div>
              <h3 className="text-lg font-semibold">{lang.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{lang.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LanguageLanding;
