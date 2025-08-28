"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom"; // ✅ React Router
import DFALogo from "../assets/DFA logo final 12x (1) 1.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // ✅ Normalize pathname (remove trailing slash)
  const normalizedPath = location.pathname.replace(/\/$/, "") || "/";

  // Detect scroll (desktop only effect)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Clickable Logo */}
            <Link to="/" aria-label="Home">
              <img
                src={DFALogo}
                alt="Delight Auto Forge Logo"
                width={300}
                height={100}
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Links */}
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
                      className={`text-sm lg:text-base transition-colors ${
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

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        {/* Top Bar with Logo + Menu */}
        <div className="flex items-center justify-between px-4 py-3 bg-transparent">
          {/* Logo */}
          <Link to="/" aria-label="Home" onClick={closeMenu}>
            <img
              src={DFALogo}
              alt="Delight Auto Forge Logo"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </Link>

          {/* Floating Menu Button */}
          <button
            className="w-12 h-12 bg-[#B54745] hover:bg-[#a13c3a] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black"
                onClick={closeMenu}
              />

              {/* Menu Content */}
              <motion.div
                key="menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="absolute top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-sm"
              >
                {/* Navigation Links */}
                <motion.div
                  className="py-6 space-y-1"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {["Home", "Services", "Products", "About", "Contact"].map(
                    (item, idx) => {
                      const href =
                        item.toLowerCase() === "home"
                          ? "/"
                          : `/${item.toLowerCase()}`;

                      const isActive = normalizedPath === href;

                      return (
                        <motion.div
                          key={idx}
                          variants={{
                            hidden: { opacity: 0, x: 30 },
                            show: { opacity: 1, x: 0 },
                          }}
                        >
                          <Link
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
                        </motion.div>
                      );
                    }
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
