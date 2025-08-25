"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import DFALogo from "../assets/DFA logo final 12x (1) 1.png";

const Footer = () => {
  return (
    <footer className="bg-[#2B2E3A] pt-8 sm:pt-10 lg:pt-12">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Side */}
          <motion.div variants={fadeUp} className="space-y-6 sm:space-y-8">
            {/* Company Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={DFALogo}
                alt="Delight Auto Forge"
                className="w-42 sm:w-60 object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-industrial-orange uppercase font-SFProDisplay tracking-wider">
              Let's go
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-syne text-foreground leading-tight">
              Looking for high-quality
              <br className="hidden sm:block" />
              forged components?
            </h2>

            <p className="text-sm sm:text-base text-industrial-muted font-SFProDisplay leading-relaxed">
              Or contact us in the convenient
              <br className="hidden sm:block" />
              way for you
            </p>

            <div className="space-y-1 sm:space-y-2 font-SFProDisplay">
              <a
                href="mailto:delightautoforge@gmail.com"
                className="text-sm sm:text-base text-industrial-muted hover:text-[#37B39C] transition-colors"
              >
                delightautoforge@gmail.com
              </a>
              <a
                href="tel:+919712377858"
                className="text-sm sm:text-base text-industrial-muted hover:text-[#37B39C] transition-colors"
              >
                +91 9712377858
              </a>
              <a
                href="https://www.google.com/maps?q=Delight+Auto+Forge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-industrial-muted hover:text-[#37B39C] transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-0 border-b border-gray-600 focus:border-industrial-orange focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground rounded-none"
              />
              <Input
                type="text"
                placeholder="Your phone number"
                className="bg-transparent border-0 border-b border-gray-600 focus:border-industrial-orange focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground rounded-none"
              />
            </div>
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-fit bg-[#37B39C] text-success-foreground hover:bg-success/90"
            >
              Send request
            </Button>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8"
            >
              <motion.div variants={fadeUp}>
                <h3 className="text-[#37B39C] uppercase tracking-wider font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                  PAGES
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <a
                    href="#home"
                    className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay"
                  >
                    Home
                  </a>
                  <a
                    href="#products"
                    className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay"
                  >
                    Products
                  </a>
                  <a
                    href="#contact"
                    className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay"
                  >
                    Contact us
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-[#37B39C] uppercase tracking-wider font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                  INFORMATION
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <a
                    href="#about"
                    className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay"
                  >
                    About us
                  </a>
                  <a
                    href="#why-choose"
                    className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay"
                  >
                    Why choose us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section (full width white) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full bg-white flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 px-4 sm:px-10 py-4 border-t border-gray-200"
      >
        <div className="flex space-x-4 order-2 sm:order-1">
          <a
            href="#"
            className="text-gray-600 hover:text-[#37B39C] transition-colors"
          >
            <Facebook size={20} className="sm:size-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-[#37B39C] transition-colors"
          >
            <Instagram size={20} className="sm:size-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-[#37B39C] transition-colors"
          >
            <Twitter size={20} className="sm:size-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 order-1 sm:order-2">
          <p className="text-gray-600 text-xs sm:text-sm font-SFProDisplay text-center sm:text-left">
            Design & Developed by{" "}
            <span className="text-[#37B39C]">
              Codelix IT Solutions Pvt. Ltd.
            </span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-600 hover:text-[#37B39C] transition-colors"
          >
            <ArrowUp size={18} className="sm:size-5" />
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
