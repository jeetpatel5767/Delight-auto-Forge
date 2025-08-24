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
import { fadeUp, staggerContainer } from "../lib/animations"; // ✅ import reusable animations

const AboutPage = () => {
  return (
    <div className="bg-industrial-darker text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        id="about-page-hero"
        className="h-[120px] sm:h-[150px] md:h-[200px] relative flex items-center justify-center bg-grid-pattern bg-grid overflow-hidden"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Grid overlay */}
        <motion.div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.6, duration: 1 }}
        ></motion.div>

        {/* Hero text */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-syne">
            About us
          </h1>
        </motion.div>
      </motion.section>

      {/* Sections with staggered reveal */}
      
        
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
