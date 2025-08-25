"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DFALogo from "../assets/DFA logo final 12x (1) 1.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Desktop Navigation - Full Header */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={DFALogo}
                alt="Delight auto Forge Logo"
                width={300}
                height={100}
              />
            </div>

            <div className="flex space-x-4 lg:space-x-6">
              <a
                href="/"
                className="text-sm lg:text-base text-foreground hover:text-industrial-orange transition-colors"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-sm lg:text-base text-foreground hover:text-industrial-orange transition-colors"
              >
                Services
              </a>
              <a
                href="/products"
                className="text-sm lg:text-base text-foreground hover:text-industrial-orange transition-colors"
              >
                Products
              </a>
              <a
                href="/about"
                className="text-sm lg:text-base text-foreground hover:text-industrial-orange transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-sm lg:text-base text-foreground hover:text-industrial-orange transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Floating Round Button */}
      <div className="md:hidden">
        {/* Floating Menu Button */}
        <button
          className="fixed top-4 right-4 z-50 w-12 h-12 bg-industrial-orange hover:bg-industrial-orange/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Overlay with Animations */}
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
                className="absolute inset-0 bg-black backdrop-blur-sm"
                onClick={closeMenu}
              />

              {/* Menu Content */}
              <motion.div
                key="menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="absolute top-0 right-0 h-full w-64 bg-industrial-darker/95 backdrop-blur-sm"
              >
                {/* Logo Section */}
                <div className="p-6">
                  <img
                    src={DFALogo}
                    alt="Delight auto Forge Logo"
                    width={150}
                    height={40}
                  />
                </div>

                {/* Navigation Links with stagger animation */}
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
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {["Home", "Services", "Products", "About", "Contact"].map(
                    (item, idx) => (
                      <motion.a
                        key={idx}
                        href={`/${
                          item.toLowerCase() === "home"
                            ? ""
                            : item.toLowerCase()
                        }`}
                        className="block px-6 py-3 text-foreground hover:text-industrial-orange hover:bg-gray-800/50 transition-colors"
                        onClick={closeMenu}
                        variants={{
                          hidden: { opacity: 0, x: 30 },
                          show: { opacity: 1, x: 0 },
                        }}
                      >
                        {item}
                      </motion.a>
                    )
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
