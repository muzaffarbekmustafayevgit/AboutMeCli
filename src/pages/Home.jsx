import React, { useState, useEffect } from "react";
import { Download, Github, Linkedin, Youtube } from "lucide-react";
import MyImage from "../assets/USER.jpg"
function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center p-6 md:p-8 pt-32 min-h-screen dark:bg-gray-900">
  {/* Card 1: Content */}
  <div
    className="rounded-2xl p-6 md:p-12 w-full max-w-md lg:max-w-2xl
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-gray-700
     shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500"
  >
    <h3 className="typing-once md:text-3xl text-xl text-gray-900 dark:text-white mb-4 w-fit pb-2">
      Hi, I'm Muzaffarbek Mustafayev
    </h3>

    <style jsx>{`
      .typing-once {
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        animation: typing 7s steps(40, end) forwards;
      }
      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }
      .typing-once::after {
        content: '';
        display: inline-block;
        width: 2px;
        height: 1em;
        animation: none;
        opacity: 0;
      }
    `}</style>

    <p className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
      MERN Stack Developer
    </p>

    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-justify">
      Passionate frontend developer specializing in MongoDB, ExpressJS,
      React, NodeJS, TypeScript, and modern web technologies. I create
      responsive, accessible, and performant web applications with
      delightful user experiences.
    </p>

    <div className="flex flex-wrap items-center gap-4 mb-4">
      <button className="flex items-center justify-center gap-2 px-6 md:px-7 py-3
        bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl
        shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
        <Download size={20} /> Download CV
      </button>

      <div className="flex gap-4">
        <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:shadow-lg hover:-translate-y-1 transition-all">
          <Github className="text-gray-800 dark:text-gray-200" size={22} />
        </a>
        <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:shadow-lg hover:-translate-y-1 transition-all">
          <Linkedin className="text-blue-700 dark:text-blue-400" size={22} />
        </a>
        <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow hover:shadow-lg hover:-translate-y-1 transition-all">
          <Youtube className="text-red-600 dark:text-red-400" size={22} />
        </a>
      </div>
    </div>
  </div>

  {/* Card 2: Profile Image */}
  <div className="relative w-64 md:w-96 h-64 md:h-96">
    <div className="absolute inset-0 rounded-full animate-[spin_18s_linear_infinite]"
      style={{
        background: `conic-gradient(#4f46e5, #3b82f6, #8b5cf6, #4f46e5)`,
      }}
    >
      <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full shadow-inner"></div>
    </div>

    <div className="absolute inset-6 rounded-full overflow-hidden border border-white dark:border-gray-800 shadow-xl">
      <img
        src={MyImage}
        alt="Muzaffarbek Mustafayev"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  <style jsx>{`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}</style>
</div>

  );
}

export default Home;
