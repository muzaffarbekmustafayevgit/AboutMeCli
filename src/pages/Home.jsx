import React,{useState,useEffect} from "react";
import { Download, Github, Linkedin, Youtube, Moon, Sun } from "lucide-react";
import MyImage from "../assets/USER.jpg";
import ThemeToggle from "../components/ThemeToggle";
function Home() {
   const [rotation, setRotation] = useState(0);

  // Continuous rotation effect for profile gradient
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
 <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-center items-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 pt-24 md:pt-32 min-h-screen
                bg-gray-50 dark:bg-gray-900 transition-colors duration-500">

  {/* Theme Toggle */}
  <ThemeToggle />

  {/* Card 1: Content */}
  <div
    className="rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl
               bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700
               shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:shadow-[0_0_40px_rgba(59,130,246,0.4)]
               transition-all duration-500">
    <h3 className="typing-once text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-3 sm:mb-4 w-fit pb-2">
      Hi, I'm Muzaffarbek Mustafayev
    </h3>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
      MERN Stack Developer
    </p>

    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-justify">
      Passionate frontend developer specializing in MongoDB, ExpressJS,
      React, NodeJS, TypeScript, and modern web technologies. I create
      responsive, accessible, and performant web applications with
      delightful user experiences.
    </p>

    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
      <button className="flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3
        bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl
        shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm sm:text-base">
        <Download size={18} className="sm:w-5 sm:h-5" /> 
        <span>Download CV</span>
      </button>

      <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 pt-2 sm:pt-0">
        <a href="#" className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <Github className="text-gray-800 dark:text-gray-200 w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="#" className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <Linkedin className="text-blue-700 dark:text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a href="#" className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <Youtube className="text-red-600 dark:text-red-400 w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  </div>

  {/* Card 2: Profile Image */}
  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
    <div 
      className="absolute inset-0 rounded-full animate-spin-slow"
      style={{
        background: `conic-gradient(#4f46e5, #3b82f6, #8b5cf6, #4f46e5)`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full shadow-inner"></div>
    </div>

    <div className="absolute inset-3 sm:inset-4 md:inset-5 lg:inset-6 rounded-full overflow-hidden border border-white dark:border-gray-800 shadow-xl">
      <img
        src={MyImage}
        alt="Muzaffarbek Mustafayev"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Responsive adjustments */}
  <style>{`
    @media (max-width: 640px) {
      .typing-once {
        animation: typing 2s steps(30, end) forwards;
        white-space: normal;
      }
    }
    @media (max-width: 768px) {
      .pt-24 {
        padding-top: 6rem;
      }
    }
  `}</style>
</div>

  );
}

export default Home;