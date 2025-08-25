import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import closedDieForgingImage from '@/assets/OMV_9255-1.png';
import cncMachiningImage from '@/assets/OMV_9211-1.png';
import shotBlastingImage from '@/assets/OMV_9201-1.png';
import heatTreatmentImage from '@/assets/OMV_9278-1.png';

const ServicesPage = () => {
  const services = [
    {
      title: "Closed Die Forging",
      image: closedDieForgingImage,
      description:
        "We specialize in precision closed die forging of ferrous materials up to 6 kg. High dimensional accuracy. Consistent grain flow and strength. Ideal for automotive, agriculture, and machinery parts",
    },
    {
      title: "CNC & VMC Machining",
      image: cncMachiningImage,
      description:
        "Our in-house CNC and VMC machining ensures high-tolerance machining and smooth finishes. Complex geometry handling. Batch and prototype production. Ready-to-assemble components",
    },
    {
      title: "Shot Blasting",
      image: shotBlastingImage,
      description:
        "We offer surface treatment with advanced shot blasting to remove scale, rust, and imperfections. Clean, uniform surface texture. Improved adhesion for coatings. Enhanced fatigue resistance",
    },
    {
      title: "Heat Treatment",
      image: heatTreatmentImage,
      description:
        "Tailored heat treatment processes are applied to improve the mechanical properties of components. Controlled hardening & tempering. Improved wear and strength. Enhanced service life of parts",
    },
  ];

  return (
    <div className="min-h-screen bg-industrial-darker text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        id="services-page-hero"
        className="h-[120px] sm:h-[150px] md:h-[200px] relative flex items-center justify-center bg-industrial-darker bg-grid-pattern bg-grid overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-center space-x-2 sm:space-x-3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
            <div className="absolute inset-2 bg-black rounded-full"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-syne">
            Our Services
          </h1>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="w-full space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-syne text-black">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-[#373737] font-SFProDisplay leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button Animation */}
          <motion.div
            className="text-center mt-12 sm:mt-14 lg:mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
