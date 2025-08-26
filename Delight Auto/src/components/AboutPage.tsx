import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ForgingTrustSection from "./ForgingTrustSection";
import CapabilitiesSection from "./CapabilitiesSection";
import IndustriesSection from "./IndustriesSection";
import VisionMissionSection from "./VisionMissionSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ReadySection from "@/components/ReadySection";
import Footer from "@/components/Footer";
import { fadeUp } from "../lib/animations"; // ✅ only keeping what we use

const AboutPage = () => {
  return (
    <div className="bg-industrial-darker text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        id="about-page-hero"
        className="h-[120px] sm:h-[150px] md:h-[200px] relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Hero text */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-center space-x-2 sm:space-x-3 mt-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {/* Static rings (no animation) */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-3.5 bg-black rounded-full"></div>
            </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-syne">
            About Us
          </h1>
        </motion.div>
      </motion.section>

      {/* Sections */}
      <ForgingTrustSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <ReadySection />

      {/* Footer */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default AboutPage;
