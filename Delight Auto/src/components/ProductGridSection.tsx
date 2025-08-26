import React from "react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

// Importing 9 images
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";

const ProductGridSection = () => {
  const products = [
    {
      id: 1,
      image: img1,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 2,
      image: img2,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 3,
      image: img3,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 4,
      image: img4,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 5,
      image: img5,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 6,
      image: img6,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 7,
      image: img7,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 8,
      image: img8,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
    {
      id: 9,
      image: img9,
      title: "Special Bearing",
      description:
        "Specialized bearing for precision instruments offering low noise and vibration.",
      material: "Stainless Steel",
      loadCapacity: "4300N",
      dimensions: "47mm x 18mm",
    },
  ];

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
      transition: { duration: 0.5, ease: "easeOut" as any },
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
              {/* Image Container with Flip Effect */}
              <div
                className="aspect-square flex items-center justify-center mb-3 sm:mb-4 relative"
                style={{ perspective: "1000px" }}
              >
                <div className="w-full h-full relative transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front Side - Image */}
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-md absolute inset-0 backface-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Back Side - Information */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-800 rounded-md p-4 flex flex-col justify-center space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1 font-syne">
                        Description
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1 font-syne">
                        Information
                      </h4>
                      <div className="space-y-1 text-xs text-gray-300">
                        <p>
                          <span className="text-white font-medium">Material:</span>{" "}
                          {product.material}
                        </p>
                        <p>
                          <span className="text-white font-medium">
                            Load Capacity:
                          </span>{" "}
                          {product.loadCapacity}
                        </p>
                        <p>
                          <span className="text-white font-medium">Dimensions:</span>{" "}
                          {product.dimensions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title stays outside the flip container */}
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
        ></motion.div>
      </div>

      <style>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;  
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default ProductGridSection;
