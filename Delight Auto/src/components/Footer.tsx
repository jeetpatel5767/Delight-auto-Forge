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
      <div className="relative bg-[#2B2E3A] pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 overflow-hidden">
        {/* Background Shapes */}
        {/* Circle Shape (moved to top-right & higher) */}
        <img
          src={FooterCircle}
          alt="Footer Circle Shape"
          className="absolute right-0 top-[-5%] w-60 sm:w-80 opacity-40 pointer-events-none"
        />

        {/* Other Shape (bottom left) */}
        <img
          src={FooterShape}
          alt="Footer Shape"
          className="absolute left-0 bottom-16 sm:bottom-20 w-48 sm:w-64 opacity-40 pointer-events-none"
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-syne text-foreground leading-tight relative z-10">
                Looking for high-quality
                <br className="hidden sm:block" />
                forged components?
              </h2>

              <p className="text-sm sm:text-base text-industrial-muted font-SFProDisplay leading-relaxed relative z-10">
                Or contact us in the convenient
                <br className="hidden sm:block" />
                way for you
              </p>

              <div className="flex flex-col space-y-2 font-SFProDisplay">
                <a
                  href="mailto:delightautoforge@gmail.com"
                  className="text-sm sm:text-base text-industrial-muted hover:text-[#37B39C] transition-colors cursor-pointer"
                >
                  delightautoforge@gmail.com
                </a>
                <a
                  href="tel:+919712377858"
                  className="text-sm sm:text-base text-industrial-muted hover:text-[#37B39C] transition-colors cursor-pointer"
                >
                  +91 9712377858
                </a>
                <a
                  href="https://www.google.com/maps?q=Delight+Auto+Forge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-industrial-muted hover:text-[#37B39C] transition-colors cursor-pointer"
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
                  <div className="space-y-2">
                    <a
                      href="/"
                      className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay cursor-pointer"
                    >
                      Home
                    </a>
                    <a
                      href="/products"
                      className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay cursor-pointer"
                    >
                      Products
                    </a>
                    <a
                      href="/contact"
                      className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay cursor-pointer"
                    >
                      Contact us
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h3 className="text-[#37B39C] uppercase tracking-wider font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                    INFORMATION
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="/about"
                      className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay cursor-pointer"
                    >
                      About us
                    </a>
                    <a
                      href="/about#Why-us"
                      className="block text-sm text-gray-400 hover:text-industrial-orange transition-colors font-SFProDisplay cursor-pointer"
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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full bg-white flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 px-4 sm:px-10 py-4 border-t border-gray-200 relative z-20"
      >
        <div className="flex space-x-4 order-2 sm:order-1">
          <a
            href="#"
            className="text-gray-600 hover:text-[#37B39C] transition-colors cursor-pointer"
          >
            <Facebook size={20} className="sm:size-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-[#37B39C] transition-colors cursor-pointer"
          >
            <Instagram size={20} className="sm:size-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-[#37B39C] transition-colors cursor-pointer"
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
