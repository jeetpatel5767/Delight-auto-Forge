import React from "react";
import { motion } from "framer-motion";

const VisionMissionSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-industrial-darker overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-syne text-center mb-8 sm:mb-12 lg:mb-16"
        >
          Focused on the Future
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "Our Vision",
              text: "At Delight auto Forge Industry, our vision is to be recognized as a trusted global leader in precision forging. We aspire to deliver excellence through innovation, reliability, and uncompromising quality—empowering industries worldwide with components that shape the future of engineering and manufacturing.",
            },
            {
              title: "Our Mission",
              text: "Our mission is to manufacture and deliver high-quality closed die forged components that meet the diverse needs of industries such as forging, annealing, CNC. We are committed to precision, performance, and customer satisfaction—driven by advanced technology, skilled professionals, and a dedication to continuous improvement. Through strong partnerships, ethical practices, and timely solutions, we aim to forge not just metal—but lasting trust.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: index % 2 === 0 ? 80 : -80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: index * 0.3,
              }}
              viewport={{ once: true }}
              className="border border-gray-700 p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-6 shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-syne text-center">
                {item.title}
              </h3>
              <p className="text-industrial-muted text-sm sm:text-base lg:text-lg leading-relaxed font-SFProDisplay">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
