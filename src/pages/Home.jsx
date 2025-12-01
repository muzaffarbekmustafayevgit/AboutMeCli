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
      <div className=" dark:bg-gray-900   rounded-2xl p-6 md:p-12 w-full max-w-2xl mb-8 lg:mb-0 lg:mr-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Muzaffar Mustafayev
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 text-center mb-6">
          Frontend Developer
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
          Passionate frontend developer specializing in React, TypeScript, and modern web technologies. 
          I create responsive, accessible, and performant web applications with great user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <Download size={20} />
            Download CV
          </button>
          
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Github className="text-gray-800 dark:text-gray-200" size={22} />
            </a>
            <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <Linkedin className="text-blue-700 dark:text-blue-400" size={22} />
            </a>
            <a href="#" className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
              <Youtube className="text-red-600 dark:text-red-400" size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 2: Profile Image with Loader */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Outer rotating loader */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from ${rotation}deg, transparent, #4f46e5, #3b82f6, #8b5cf6, transparent)`,
            animation: 'spin 30s linear infinite',
          }}
        >
          <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full"></div>
        </div>
        
        {/* Inner loader ring */}
        <div className="absolute inset-8 rounded-full border-4 border-transparent border-t-blue-500 border-r-indigo-500 animate-spin-slow"></div>
        
        {/* Profile Image */}
        <div className="absolute inset-10 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 ">
          <img
            src="https://onedrive.live.com/personal/829ef70904f87cee/_api/v2.1/drives/829EF70904F87CEE/items/829EF70904F87CEE!s3768b9d991a744c0a0c6d66650fa1f71/thumbnails/0/c955x955/content?prefer=noredirect%2Cclosestavailablesize&cb=%22c%3A%7B3768B9D9-91A7-44C0-A0C6-D66650FA1F71%7D%2C3%22&photossw=1&skipAuth=1&eh=application%3Aonedrive+web+consumer%2Cscenario%3ABrowsePhoto_OneUp&it=originalScale%3Ac512x512%2CdownloadScale%3Ac955x955%2Cmigrated%3Atrue%2CscenarioName%3ArenderPhoto"
            alt="Muzaffar Mustafayev"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        {/* Floating dots */}
        
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;