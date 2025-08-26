import React from "react";
import Navigation from "@/components/Navigation";
import ReadySection from "@/components/ReadySection";
import Footer from "@/components/Footer";
import ProductGridSection from "@/components/ProductGridSection";
import { motion } from "framer-motion";

const ProductsPage = () => {
  return (
    <div className="bg-industrial-darker text-foreground overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        id="products-page-hero"
        className="h-[120px] sm:h-[150px] md:h-[200px] relative flex items-center justify-center overflow-hidden"
      >
        {/* Hero Text */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-center space-x-2 sm:space-x-3 mt-20"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Static Rings (no animation) */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <div className="absolute inset-0 bg-white rounded-full" />
            <div className="absolute inset-2 bg-black rounded-full" />
          </div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-syne"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Our Products
          </motion.h1>
        </motion.div>
      </section>

      {/* Product Grid with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProductGridSection />
      </motion.div>

      {/* Ready Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ReadySection />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default ProductsPage;
