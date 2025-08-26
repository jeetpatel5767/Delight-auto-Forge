"use client";

import { Button } from "@/components/ui/button";
import closedDieForgingImage from "@/assets/OMV_9255-1.png";
import cncVmcImage from "@/assets/OMV_9211-1.png";
import shotBlastingImage from "@/assets/OMV_9201-1.png";
import heatTreatmentImage from "@/assets/OMV_9278-1.png";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const services = [
    {
      title: "Closed Die Forging",
      image: closedDieForgingImage,
      alt: "Closed die forging process with hot metal being shaped",
    },
    {
      title: "CNS & VMC Machining",
      image: cncVmcImage,
      alt: "CNC and VMC machining center with precision cutting tools",
    },
    {
      title: "Shot Blasting",
      image: shotBlastingImage,
      alt: "Shot blasting equipment cleaning metal parts",
    },
    {
      title: "Heat Treatment",
      image: heatTreatmentImage,
      alt: "Heat treatment process with glowing metal components",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 bg-industrial-darker overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 sm:mb-12 lg:mb-16 space-y-6 lg:space-y-0"
        >
          <div className="flex items-center space-x-5 sm:space-x-7">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-3.5 bg-black rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-SFProDisplay">
              Our Services
            </h2>
          </div>
          <div className="max-w-lg text-sm sm:text-base lg:text-xl text-industrial-muted font-SFProDisplay leading-relaxed">
            At Delight auto Forge Industry, we provide end-to-end forging
            solutions tailored to the exact needs of our clients across various
            sectors.
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className={`group cursor-pointer ${
                index % 2 === 0 ? "lg:mt-8 xl:mt-16" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[2/1.5] mb-3 sm:mb-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <motion.h3
                whileHover={{ color: "#FF6A00", scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl font-syne !text-foreground text-center group-hover:!text-industrial-orange transition-colors duration-300"
              >
                {service.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-center"
        >
          <Button
            variant="hero"
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-[25px] py-3 sm:py-[10px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal w-full sm:w-auto max-w-xs sm:max-w-none"
            onClick={() => navigate("/services")}
          >
            Learn more →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
