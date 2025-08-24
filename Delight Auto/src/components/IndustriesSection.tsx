import React from "react";
import forgingProcessImage from "@/assets/service-forging.jpg";
import { motion } from "framer-motion";

// ✅ Shared animation helper
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay,
    },
  },
});

const IndustriesSection = () => {
  const industries = [
    "Automotive",
    "Heavy Engineering",
    "Agriculture Equipment",
    "Railway & Transportation",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-industrial-darker">
      <div className="mx-auto px-0">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.1)}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-syne text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6"
        >
          Industries We Serve
        </motion.h2>

        {/* Banner Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.3)}
          className="relative mb-8 sm:mb-12 lg:mb-16 overflow-hidden h-[180px] sm:h-[220px] lg:h-[250px]"
        >
          <img
            src={forgingProcessImage}
            alt="Forging Process"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Industries List */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:flex-wrap gap-x-6 lg:gap-x-12 gap-y-3 sm:gap-y-4 text-foreground text-base sm:text-lg font-SFProDisplay">
            {industries.map((industry, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp(0.2 + index * 0.2)}
                className="flex items-center"
              >
                <span className="font-bold mr-2">•</span> {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
