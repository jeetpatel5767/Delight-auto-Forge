"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import DFALogo from "../assets/DFA logo final 12x (1) 1.png"; // Make sure this path is correct

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const normalizedPath = location.pathname.replace(/\/$/, "") || "/";

  // Handles showing and hiding the nav bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
        setIsNavVisible(true); // Show
      } else {
        setIsNavVisible(false); // Hide
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Desktop hover effects
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) setIsNavVisible(true);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768 && window.scrollY > 50) setIsNavVisible(false);
  };

  return (
    <>
      {/* --- DESKTOP NAVIGATION --- */}
      <div
        className="hidden md:block fixed top-0 left-0 right-0 z-50 h-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav
          className={`transition-all duration-300 ease-in-out ${
            isNavVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } ${
            isScrolled
              ? "backdrop-blur-md bg-white/50 shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <Link to="/" aria-label="Home">
                <img
                  src={DFALogo}
                  alt="Delight Auto Forge Logo"
                  width={300}
                  height={100}
                  className="cursor-pointer"
                />
              </Link>
              <div className="flex space-x-4 lg:space-x-6">
                {["Home", "Services", "Products", "About", "Contact"].map(
                  (item) => {
                    const href =
                      item.toLowerCase() === "home"
                        ? "/"
                        : `/${item.toLowerCase()}`;
                    const isActive = normalizedPath === href;
                    return (
                      <Link
                        key={item}
                        to={href}
                        className={`text-sm lg:text-lg transition-colors ${
                          isActive
                            ? "text-[#B54745]"
                            : "text-foreground hover:text-[#B54745]"
                        }`}
                      >
                        {item}
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* --- MOBILE NAVIGATION BAR --- */}
      {/* This DIV only contains the top bar, which can hide and show */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isNavVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${
          isScrolled && !isMenuOpen ? "bg-white/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" aria-label="Home" onClick={closeMenu}>
            <img
              src={DFALogo}
              alt="Delight Auto Forge Logo"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </Link>
          <button
            className="w-12 h-12 bg-[#B54745] hover:bg-[#a13c3a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      {/* This is now a SEPARATE element, so it is not affected by the bar sliding away */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={closeMenu}
            />
            {/* Menu Content */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="absolute top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-sm shadow-xl"
            >
              <div className="py-6 space-y-1 mt-16">
                {["Home", "Services", "Products", "About", "Contact"].map(
                  (item) => {
                    const href =
                      item.toLowerCase() === "home"
                        ? "/"
                        : `/${item.toLowerCase()}`;
                    const isActive = normalizedPath === href;
                    return (
                      <Link
                        key={item}
                        to={href}
                        onClick={closeMenu}
                        className={`block px-6 py-3 rounded-md transition-colors ${
                          isActive
                            ? "bg-white text-[#B54745] font-semibold"
                            : "text-white hover:text-[#B54745] hover:bg-white/10"
                        }`}
                      >
                        {item}
                      </Link>
                    );
                  }
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;