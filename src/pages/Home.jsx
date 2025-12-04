import React, { useState, useEffect } from "react";
import {
  Download,
  Github,
  Linkedin,
  Youtube,
  Moon,
  Icon,
  Sun,
} from "lucide-react";
import MyImage from "../assets/USER.jpg";
import TelegramIcon from "../components/Icons/TelegramIcon";
import { socialMedias } from "../data/socialMedias";
import CVdownload from "../components/CVdownload";
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Home page component
 * 
 * This component displays a profile image with a continuous rotation effect,
 * a brief description, and social media links.
 * 
 * @returns {JSX.Element} A JSX element representing the Home page component.

/*******  6f2f654a-6700-4066-b3bf-a3ef5920e764  *******/
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
    <div
      className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 justify-center items-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 pt-24 md:pt-32 min-h-screen
                bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Theme Toggle */}
 

      {/* Card 1: Content */}

      <div
        className="rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl
               bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700
               shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:shadow-[0_0_40px_rgba(59,130,246,0.4)]
               transition-all duration-500"
      >
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
          <CVdownload />

          <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 pt-2 sm:pt-0">
            <a
              href={socialMedias.git_hub.path}
              target="_blank"
              className="p-2 sm:p-3 rounded-full shadow-md bg-gray-200 dark:bg-gray-700
               flex items-center justify-center
               transition-all duration-300
               hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-gray-300 hover:to-gray-400
               active:scale-95"
            >
              <Github className="text-gray-900 dark:text-gray-200 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 hover:text-black dark:hover:text-white" />
            </a>

            <a
              href={socialMedias.linkedin.path}
              target="_blank"
              className="p-2 sm:p-3 rounded-full shadow-md bg-gray-200 dark:bg-gray-700
               flex items-center justify-center
               transition-all duration-500
               hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600
               active:scale-95"
            >
              <Linkedin className="text-blue-800 dark:text-blue-400 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 hover:text-white" />
            </a>

            <a
              href={socialMedias.youtube.path}
              target="_blank"
              className="p-2 sm:p-3 rounded-full shadow-md bg-gray-200 dark:bg-gray-700
               flex items-center justify-center
               transition-all duration-500
               hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-red-400 hover:to-red-600
               active:scale-95"
            >
              <Youtube className="text-red-700 dark:text-red-400 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 hover:text-white-900" />
            </a>

            <a
              href={socialMedias.telegram.path}
              target="_blank"
              className="p-2 sm:p-3 rounded-full shadow-md bg-gray-200 dark:bg-gray-700
               flex items-center justify-center
               transition-all duration-500
               hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500
               active:scale-95"
            >
              <TelegramIcon
                size={20}
                color="#207dabff"
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Card 2: Profile Image */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 hidden lg:block">
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
