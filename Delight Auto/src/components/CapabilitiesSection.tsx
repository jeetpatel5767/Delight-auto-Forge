import React from "react";
import { motion } from "framer-motion";
import factoryImage from "@/assets/automotive-shafts.jpg";
import { fadeUp, staggerContainer } from "@/lib/animations";

const CapabilitiesSection = () => {
  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20 bg-industrial-darker relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="flex items-center space-x-2 sm:space-x-3 mb-8 sm:mb-12 lg:mb-16"
          variants={fadeUp}
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-full"></div>
            <div className="absolute inset-2 bg-[#060010] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-syne">
            Our Capabilities
          </h2>
        </motion.div>

        <div className="relative">
          {/* Main Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[400px] sm:min-h-[500px]">
            {/* Left Side: Image with Triangular Border */}
            <motion.div
              className="relative h-[300px] sm:h-[350px] lg:h-[450px] order-2 lg:order-1"
              initial={{ opacity: 0, x: -120, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Triangular Border */}
              <div className="absolute inset-0 z-0">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <path
                    d="M0,0 L70,0 L100,100 L0,100 Z"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Image */}
              <div
                className="relative z-10 h-full"
                style={{ transform: "scale(0.95)" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center shadow-2xl"
                  style={{
                    backgroundImage: `url(${factoryImage})`,
                    clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
                  }}
                />

                {/* Overlay for depth */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"
                  style={{
                    clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Right Side: Capabilities List */}
            <motion.div
              className="space-y-6 sm:space-y-8 pl-0 lg:pl-8 order-1 lg:order-2"
              variants={staggerContainer}
            >
              {[
                {
                  label: "Maximum Height:",
                  value: "90 mm",
                },
                {
                  label: "Weight Capacity:",
                  value: "0.500 kg to 15.000 kg",
                },
                {
                  label: "Outer Diameter Range:",
                  value: "100 mm to 300 mm",
                },
                {
                  label: "Monthly Production Capacity:",
                  value: "350 Metric Tons (MT)",
                },
                {
                  label: "Manufacturing Type:",
                  value: "Fully In-House Production Setup",
                },
                {
                  label: "Industries Served:",
                  value: "Automotive, Agriculture, Railways, and General Engineering",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-3 sm:space-x-4"
                  variants={fadeUp}
                >
                  <div className="w-2 h-2 bg-white rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                    <span className="font-semibold">{item.label}</span>{" "}
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CapabilitiesSection;
