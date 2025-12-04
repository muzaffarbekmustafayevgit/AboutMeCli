import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  // Default dark mode = true
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("darkMode", isDark.toString());
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleDarkMode}
      className="  sm:right-6 md:right-8  sm:p-3 rounded-full shadow-lg transition-all duration-300
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:scale-110 active:scale-95"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} className="sm:w-5 sm:h-5" /> : <Moon size={20} className="sm:w-5 sm:h-5" />}
    </button>
  );
};

export default ThemeToggle;
