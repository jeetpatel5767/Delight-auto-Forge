"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import DFALogo from "../assets/DFA logo final 12x (1) 1.png";
import FooterCircle from "../assets/shape-1.png";
import FooterShape from "../assets/shape.png";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Section */}
      <div className="relative bg-[#2B2E3A] pt-10 pb-12 sm:pt-12 sm:pb-16 overflow-hidden">
        {/* Background Shapes */}
        <img
          src={FooterCircle}
          alt="Footer Circle Shape"
          className="absolute right-0 top-[-5%] w-40 sm:w-80 opacity-30 pointer-events-none"
        />
        <img
          src={FooterShape}
          alt="Footer Shape"
          className="absolute left-0 bottom-12 sm:bottom-20 w-32 sm:w-64 opacity-30 pointer-events-none"
        />

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
          >
            {/* Left Side */}
            <motion.div variants={fadeUp} className="space-y-6 text-center sm:text-left">
              {/* Logo */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src={DFALogo}
                  alt="Delight Auto Forge"
                  className="w-40 sm:w-56 object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#B54745] uppercase font-SFProDisplay tracking-wider">
                Let's go
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-syne text-white leading-tight">
                Looking for high-quality
                <br className="hidden sm:block" />
                forged components?
              </h2>

              <p className="text-sm sm:text-base text-industrial-muted font-SFProDisplay leading-relaxed">
                Or contact us in the convenient
                <br className="hidden sm:block" />
                way for you
              </p>

              {/* Contact Info */}
              <div className="flex flex-col items-center sm:items-start space-y-2 font-SFProDisplay">
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
            <motion.div
              variants={fadeUp}
              className="space-y-6 mt-6 sm:mt-12 flex flex-col items-center sm:items-start"
            >
              {/* Form */}
              <div className="w-full sm:max-w-md space-y-4">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border-0 border-b border-gray-600 focus:border-[#37B39C] focus-visible:ring-0 text-white rounded-none"
                />
                <Input
                  type="text"
                  placeholder="Your phone number"
                  className="bg-transparent border-0 border-b border-gray-600 focus:border-[#37B39C] focus-visible:ring-0 text-white rounded-none"
                />
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-fit bg-[#37B39C] text-white hover:bg-[#2e9a86]"
              >
                Send request
              </Button>

              {/* Links Section */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-6 sm:gap-8 w-full sm:w-auto text-center sm:text-left"
              >
                <motion.div variants={fadeUp}>
                  <h3 className="text-[#37B39C] uppercase tracking-wider font-semibold text-xs sm:text-sm mb-3">
                    PAGES
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="/"
                      className="block text-sm text-gray-400 hover:text-[#37B39C] font-SFProDisplay"
                    >
                      Home
                    </a>
                    <a
                      href="/products"
                      className="block text-sm text-gray-400 hover:text-[#37B39C] font-SFProDisplay"
                    >
                      Products
                    </a>
                    <a
                      href="/contact"
                      className="block text-sm text-gray-400 hover:text-[#37B39C] font-SFProDisplay"
                    >
                      Contact us
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h3 className="text-[#37B39C] uppercase tracking-wider font-semibold text-xs sm:text-sm mb-3">
                    INFORMATION
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="/about"
                      className="block text-sm text-gray-400 hover:text-[#37B39C] font-SFProDisplay"
                    >
                      About us
                    </a>
                    <a
                      href="/services"
                      className="block text-sm text-gray-400 hover:text-[#37B39C] font-SFProDisplay"
                    >
                      Why choose us
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="w-full bg-white flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-10 py-4 border-t border-gray-200">
        {/* Left side - Text */}
        <p className="text-gray-600 text-xs sm:text-sm font-SFProDisplay text-center sm:text-left">
          Design & Developed by{" "}
          <a
            href="https://www.codelix.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#37B39C] hover:underline"
          >
            Codelix IT Solutions Pvt. Ltd.
          </a>
        </p>

        {/* Right side - Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-gray-600 hover:text-[#37B39C] transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
