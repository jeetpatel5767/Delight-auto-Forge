import React from "react";
import { Button } from "@/components/ui/button";
import placeholderImage from "@/assets/automotive-shafts.jpg";
import { motion, Variants } from "framer-motion";

const ProductGridSection = () => {
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: placeholderImage,
    title: "Special Bearing",
  }));

  // Parent container animation for staggered effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Each product animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as any }, // ✅ type-safe fix
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-industrial-darker">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-syne text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as any }}
          viewport={{ once: true }}
        >
          Forging Not Just Metal, But Trust
        </motion.h2>

        {/* Grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative group rounded-xl overflow-hidden border border-gray-700 p-3 sm:p-4 hover:border-gray-600 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="aspect-square flex items-center justify-center mb-3 sm:mb-4">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center font-syne">
                {product.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Button with subtle animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as any }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="hero"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-[25px] py-3 sm:py-[10px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Explore more
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGridSection;
