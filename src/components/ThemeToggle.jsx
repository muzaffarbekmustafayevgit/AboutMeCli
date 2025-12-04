import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return saved === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

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
      className="fixed top-24 right-4 sm:right-6 md:right-8 z-50 p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:scale-110 active:scale-95"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} className="sm:w-5 sm:h-5" /> : <Moon size={20} className="sm:w-5 sm:h-5" />}
    </button>
  );
};

export default ThemeToggle;
