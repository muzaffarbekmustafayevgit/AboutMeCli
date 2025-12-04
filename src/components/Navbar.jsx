// src/components/Navbar.jsx - Yangilangan versiya
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { menuItems } from "../data/menuItems";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => location.pathname === item.path);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

 return (
<nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${ // **absolute -> fixed** navbar yuqorida qotib turishi uchun
scrolled 
 ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl py-2' 
 : 'bg-white/0 dark:bg-gray-900/0 py-4' // Scroll bo'lmaganda rangni shaffofroq qildim
}`}>
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
{/* Logo (chap tomonda) */}
<Link to="/" className="flex items-center space-x-3 group">
<div className="relative">
 <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl animate-pulse"> {/* w-12/h-12 -> w-10/h-10, mb-2 olib tashlandi */}
 <span className="text-white text-xl font-bold">M</span>
 </div>
</div>
 <div className="flex flex-col">
 <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"> {/* text-2xl -> text-xl */}
 Muzaffarbek
 </span>
 <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">
 MERN STACK DEVELOPER
 </span>
 </div> </Link>

 {/* DesktopMenu (markazda) */}
 <DesktopMenu isActive={isActive} activeIndex={activeIndex} />

 {/* ThemeToggle va Button (o'ng tomonda) */}
 <div className="flex items-center space-x-4">
 <ThemeToggle />
 <Button 
 variant="primary" 
 size="sm"
 className="hidden md:flex"
 as={Link}
 to="/contact"
 >
 Bog'lanish
 </Button>
<MobileMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
</div>
 </div>

{/* Mobil menyu */}
<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isActive={isActive} />
      
      {/* Scroll pastda qolishi uchun stil qo'shamiz */}
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
</nav>
);
};

// Desktop menu komponenti
const DesktopMenu = ({ isActive, activeIndex }) => (
  <div className="hidden lg:flex items-center space-x-1">
    {menuItems.map((item, index) => (
      <Link
        key={item.key}
        to={item.path}
        className="relative px-4 py-2 group"
      >
        <span className={`relative z-10 transition-colors font-medium ${
          isActive(item.path)
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
        }`}>
          {item.label}
        </span>
        
        {isActive(item.path) && (
          <>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="absolute -inset-2 bg-blue-500/5 dark:bg-blue-500/10 rounded-lg blur-xl"></div>
          </>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 dark:from-blue-400/0 dark:via-blue-400/5 dark:to-purple-400/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
        
        {/* Animated indicator */}
        {index === activeIndex && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        )}
      </Link>
    ))}
  </div>
);

// Mobile menu button
const MobileMenuButton = ({ menuOpen, setMenuOpen }) => (
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center group"
    aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
  >
    <span className={`absolute w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
      menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
    }`}></span>
    <span className={`absolute w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
      menuOpen ? 'opacity-0' : 'opacity-100'
    }`}></span>
    <span className={`absolute w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
      menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
    }`}></span>
    
    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </button>
);

// Mobile menu
const MobileMenu = ({ menuOpen, setMenuOpen, isActive }) => {
  if (!menuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-20 bg-gradient-to-b from-white/95 to-gray-100/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl z-40 overflow-y-auto animate-slideDown">
      <div className="p-8 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`group relative flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
              isActive(item.path)
                ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30"
                : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              }`}>
                <span className="text-lg">
                  {item.key === 'home' && '🏠'}
                  {item.key === 'about' && '👤'}
                  {item.key === 'portfolio' && '💼'}
                  {item.key === 'skills' && '⚡'}
                  {item.key === 'resume' && '📄'}
                  {item.key === 'blog' && '📝'}
                  {item.key === 'contact' && '📞'}
                </span>
              </div>
              <span className={`text-lg font-medium ${
                isActive(item.path)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}>
                {item.label}
              </span>
            </div>
            
            <div className={`transform transition-transform group-hover:translate-x-2 ${
              isActive(item.path) ? 'text-blue-500' : 'text-gray-400'
            }`}>
              →
            </div>
            
            {isActive(item.path) && (
              <div className="absolute inset-0 border-2 border-blue-500/30 dark:border-blue-400/30 rounded-2xl"></div>
            )}
          </Link>
        ))}
        
        <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="primary"
            fullWidth
            size="lg"
            as={Link}
            to="/contact"
            onClick={() => setMenuOpen(false)}
            icon="📧"
            iconPosition="left"
          >
            Bog'lanish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;