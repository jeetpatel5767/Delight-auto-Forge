import React from "react";
import { motion } from "framer-motion";

import certificateImage from "@/assets/certi.png";
import manufacturingImage from "@/assets/OMV_9246 (1).png";
import capacityImage from "@/assets/OMV_9273.png";
import customizedForgingImage from "@/assets/OMV_9211-1.png";
import timelyDeliveryImage from "@/assets/facility-building.jpg";
import partnershipsImage from "@/assets/automotive-shafts.jpg";

// Variants for animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const WhyChooseUsSection = () => {
  const cards = [
    {
      title: "ISO 9001:2015\nCertified Processes",
      image: certificateImage,
      alt: "ISO 9001:2015 Certificate",
    },
    {
      title: "End-to-End\nIn-House Manufacturing",
      image: manufacturingImage,
      alt: "In-House Manufacturing",
    },
    {
      title: "1000+ Tons\nAnnual Capacity",
      image: capacityImage,
      alt: "Annual Capacity",
    },
    {
      title: "Customized\nForging Solutions",
      image: customizedForgingImage,
      alt: "Customized Forging Solutions",
    },
    {
      title: "Focus on\nTimely Delivery",
      image: timelyDeliveryImage,
      alt: "Timely Delivery",
    },
    { 
      title: "Commitment\nto Long-Term Partnerships",
      image: partnershipsImage,
      alt: "Long-Term Partnerships",
    },
  ];

  return (
    <section id = "Why-us" className="py-12 sm:py-16 lg:py-20 bg-industrial-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-syne text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Delight Forge?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group aspect-[4/3]"
              variants={cardVariants}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-3 sm:p-4 text-center rounded-xl">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-syne whitespace-pre-line">
                  {card.title}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-industrial-orange/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
