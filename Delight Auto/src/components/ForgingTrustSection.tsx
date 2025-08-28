import React from "react";
import { motion } from "framer-motion";
import facilityImage from "@/assets/facility-building.jpg";
import automotiveImage from "@/assets/OMV_9201-1.png";
import edgeWorkerImage from "@/assets/OMV_9285.png";
import industrialGearsImage from "@/assets/OMV_9246 (1).png";
import omv9297Image from "@/assets/OMV_9297-1.png";

// ✅ Fix: helper with correct typing
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const, // <- avoids TS error
      delay,
    },
  },
});

const ForgingTrustSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#060010]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.1)}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-syne text-center mb-8 sm:mb-12 lg:mb-16"
        >
          Forging Not Just Metal, But Trust
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)}
          className="relative mb-8 sm:mb-12 lg:mb-16"
        >
          <img
            src={omv9297Image}
            alt="Manufacturing Facility"
            className="w-full h-auto  object-cover shadow-lg"
          />
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-center gap-4 w-full max-w-7xl mx-auto">
          {[
            <div className="bg-[#37B39C] text-success-foreground p-4  flex flex-col items-center justify-center text-center font-bold text-base h-[140px] w-[200px] flex-shrink-0">
              <div>
                ISO <br />
                9001:2015 <br />
                Certified
              </div>
            </div>,
            <img
              src={industrialGearsImage}
              alt="Industrial Manufacturing Process"
              className="w-full h-full object-cover"
            />,
            <img
              src={edgeWorkerImage}
              alt="Precision Manufacturing Equipment"
              className="w-full h-full object-cover"
            />,
            <img
              src={automotiveImage}
              alt="CNC Manufacturing Process"
              className="w-full h-full object-cover"
            />,
            <div className="bg-[#37B39C] text-success-foreground p-4  flex flex-col items-center justify-center text-center font-bold text-base h-[140px] w-[200px] flex-shrink-0">
              <div>
                We processes over <br />
                350 tons of steel <br />
                monthly.
              </div>
            </div>,
          ].map((content, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.3 + i * 0.15)}
              className={`relative  overflow-hidden shadow-lg ${
                i === 1 ? "h-[180px] w-[260px]" : ""
              } ${i === 2 ? "h-[220px] w-[320px]" : ""} ${
                i === 3 ? "h-[180px] w-[260px]" : ""
              } ${i === 0 || i === 4 ? "flex-shrink-0" : ""}`}
            >
              {content}
            </motion.div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
          {[
            <div className="bg-[#37B39C] text-success-foreground p-3 sm:p-4  flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm aspect-square">
              <div>
                ISO <br />
                9001:2015 <br />
                Certified
              </div>
            </div>,
            <img
              src={industrialGearsImage}
              alt="Industrial Manufacturing Process"
              className="w-full h-full object-cover"
            />,
            <img
              src={edgeWorkerImage}
              alt="Precision Manufacturing Equipment"
              className="w-full h-full object-cover"
            />,
            <img
              src={automotiveImage}
              alt="CNC Manufacturing Process"
              className="w-full h-full object-cover"
            />,
            <div className="bg-[#37B39C] text-success-foreground p-3 sm:p-4  flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm aspect-square col-span-2 sm:col-span-1">
              <div>
                We processes over <br />
                350 tons of steel <br />
                monthly.
              </div>
            </div>,
          ].map((content, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp(0.3 + i * 0.15)}
              className="relative  overflow-hidden shadow-lg"
            >
              {content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForgingTrustSection;
