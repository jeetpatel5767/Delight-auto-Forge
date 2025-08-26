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
      <section
        id="services-page-hero"
        className="h-[120px] sm:h-[150px] md:h-[200px] relative flex items-center justify-center bg-industrial-darker "
      >
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-center space-x-2 sm:space-x-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-3.5 bg-black rounded-full"></div>
            </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-syne">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 sm:gap-6"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-syne text-black">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-[#373737] font-SFProDisplay leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
