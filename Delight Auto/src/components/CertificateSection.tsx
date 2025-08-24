import React from "react";
import { motion } from "framer-motion";
import certiImage from "@/assets/certi.png";

const CertificateSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-industrial-darker">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side - Animated Heading */}
        <motion.div
          className="flex flex-col lg:flex-row items-center mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-4 lg:mb-0 lg:mr-0">
            <div className="absolute inset-0 bg-white rounded-full"></div>
            <div className="absolute inset-2 bg-black rounded-full"></div>
          </div>

          <span
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-SFProDisplay uppercase leading-none text-center lg:text-left"
          >
            <span className="lg:hidden">QUALITY &<br />CERTIFICATE</span>
            <span
              className="hidden lg:inline"
              style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            >
              QUALITY & CERTIFICATE
            </span>
          </span>
        </motion.div>

        {/* Right Side - Animated Image */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={certiImage}
            alt="Quality Certificate"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
