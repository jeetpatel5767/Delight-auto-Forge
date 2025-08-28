import React from "react";
import { motion } from "framer-motion";
import certiImage from "@/assets/certi.png";

const CertificateSection = () => {
  const verticalText = "QUALITY & CERTIFICATE".split("");

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#060010]">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-center lg:items-center mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Rings */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <div className="absolute inset-0 bg-white rounded-full"></div>
            <div className="absolute inset-3.5 bg-black rounded-full"></div>
          </div>

          {/* Mobile: Normal horizontal heading */}
          <h2 className="mt-6 text-white text-2xl sm:text-3xl font-extrabold font-SFProDisplay tracking-wide lg:hidden">
            QUALITY & CERTIFICATE
          </h2>

          {/* Desktop: Vertical text */}
          <div className="hidden lg:flex flex-col items-center space-y-2 mt-6">
            {verticalText.map((char, i) => (
              <span
                key={i}
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold font-SFProDisplay tracking-widest"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Certificate Image */}
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
            className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-[1200px] rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
