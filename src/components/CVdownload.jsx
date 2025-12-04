import React from "react";
import { Download } from "lucide-react";

function CVDownload() {
  return (
    <button
      className="flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3
                 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl
                 shadow-md hover:shadow-xl focus:shadow-xl
                 transform transition-all duration-300  active:scale-95
                 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Download size={20} className="sm:w-5 sm:h-5" />
      <span>Download CV</span>
    </button>
  );
}

export default CVDownload;
