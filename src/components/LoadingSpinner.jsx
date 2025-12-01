// src/components/LoadingSpinner.jsx

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const LoadingSpinner = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="relative">    
        <div className={`w-16 h-16 border-4 ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'} rounded-full`}></div>
        <div className={`absolute top-0 left-0 w-16 h-16 border-4 ${theme === 'light' ? 'border-blue-500' : 'border-blue-400'} rounded-full animate-spin border-t-transparent`}></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">Yuklanmoqda...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;