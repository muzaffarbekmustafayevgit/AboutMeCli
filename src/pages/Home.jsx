import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Youtube } from "lucide-react";

function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-12 flex-col h-screen lg:flex-row justify-center items-center   p-8 md:p-8   dark:bg-gray-900 ">
      {/* Card 1: Content */}
      <div
        className="rounded-3xl p-8 md:p-12 max-w-2xl mb-10 lg:mb-0 lg:mr-12
                bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-gray-700
                hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500"
      >
        <h3
          className="md:text-5xl text-4xl font-extrabold text-gray-900 dark:text-white mb-4
                border-b-4 border-gradient-to-r from-red-600 to-orange-500 pb-2 w-fit"
        >
          Hi, I'm Muzaffarbek Mustafayev
        </h3>

        <p className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          Frontend Developer
        </p>

        <p className="text-gray-700 text-justify dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
          Passionate frontend developer specializing in React, NodeJS, MongoDB,
          TypeScript, and modern web technologies. I create responsive,
          accessible, and performant web applications with delightful user
          experiences.
        </p>

        {/* BUTTON + ICONS */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <button
            className="flex items-center justify-center gap-2 px-7 py-3  
      bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl
      shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95
      transition-all duration-300"
          >
            <Download size={20} />
            Download CV
          </button>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full 
             shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Github className="text-gray-800 dark:text-gray-200" size={22} />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full
              shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Linkedin
                className="text-blue-700 dark:text-blue-400"
                size={22}
              />
            </a>

            <a
              href="#"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full
              shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Youtube className="text-red-600 dark:text-red-400" size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 2: Profile Image with Loader */}
    <div className="relative w-80 h-80 md:w-96 md:h-96">

  {/* Single Rotating Ring */}
  <div
    className="absolute inset-0 rounded-full animate-[spin_18s_linear_infinite]"
    style={{
      background: `conic-gradient(
        from ${rotation}deg,
        #4f46e5,
        #3b82f6,
        #8b5cf6,
        #4f46e5
      )`,
    }}
  >
    {/* White inner circle */}
    <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full shadow-inner"></div>
  </div>

  {/* Profile Image */}
  <div className="absolute inset-6 rounded-full overflow-hidden border-1 border-white dark:border-gray-800 shadow-xl">
    <img
      src="https://1drv.ms/i/c/829ef70904f87cee/IQDZuWg3p5HARKDG1mZQ-h9xAcvbz2MoIMDlXRQOvbz-jL4?e=hw6zzf"
      alt="Muzaffarbek Mustafayev"
      className="w-full h-full object-cover"
    />
  </div>

</div>

<style jsx>{`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`}</style>

    </div>
  );
}

export default Home;
