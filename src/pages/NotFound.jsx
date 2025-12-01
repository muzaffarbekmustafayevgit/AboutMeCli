import React from "react";
import { useState } from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      
      <h2 className="text-3xl font-semibold mb-2">Sahifa topilmadi</h2>
      
      <p className="text-gray-700 mb-6">
        Afsuski, siz izlayotgan sahifa mavjud emas yoki noto‘g‘ri URL kiritildi.
      </p>
      
      <a
        href="#home"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Asosiy sahifaga qaytish
      </a>
    </div>
  );
}

export default NotFound;
