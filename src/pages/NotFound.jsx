import ThemeToggle from "../components/ThemeToggle";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen 
      bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-6 text-center">
<div className="w-full hidden flex justify-end pr-4">
  <ThemeToggle />
</div>
      {/* Katta 404 raqami */}
      <h1 className="text-7xl font-extrabold mb-4
        text-red-600 dark:text-red-500 animate-pulse">
        404
      </h1>

      {/* Sarlavha */}
      <h2 className="text-3xl font-semibold mb-3 
        text-gray-800 dark:text-gray-200">
        Sahifa topilmadi
      </h2>

      {/* Izoh */}
      <p className="max-w-md text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        Siz izlagan manzil shamolga aytilgan so‘zdek g‘oyib bo‘lgan ko‘rinadi.
        Balki orqaga qaytib, yo‘lni boshqatdan tanlarmiz?
      </p>

      {/* Asosiy sahifaga qaytish */}
      <a
        href="/"
        className="px-6 py-3 rounded-xl font-medium
          bg-blue-600 hover:bg-blue-700
          dark:bg-blue-500 dark:hover:bg-blue-600
          text-white shadow-lg transition-all duration-300
          hover:scale-105 active:scale-95"
      >
        Asosiy sahifaga qaytish
      </a>
    </div>
  );
}
