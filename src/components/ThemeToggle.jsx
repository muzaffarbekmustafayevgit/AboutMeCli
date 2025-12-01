import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`${theme === 'light' ? 'Dark' : 'Light'} modega o'tish`}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {theme === 'light' ? (
          <span className="text-gray-800 text-xl transition-transform duration-300">🌙</span>
        ) : (
          <span className="text-yellow-300 text-xl transition-transform duration-300">☀️</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;