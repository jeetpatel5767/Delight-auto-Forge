import { Button } from "@/components/ui/button";
import automotiveImage from "@/assets/automotive_shats.jpg";
import railwayImage from "@/assets/railway_components.jpg";
import industrialImage from "@/assets/Industrial_gears.jpg";
import customizedImage from "@/assets/customized_forgings.jpg";
import { motion } from "framer-motion";
import { fadeUp, fadeUpTween, staggerContainer } from "@/lib/animations";
import { useNavigate } from "react-router-dom";

const ForgedExcellenceSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      title: "Automotive Shafts",
      image: automotiveImage,
      alt: "Precision forged automotive shafts and components",
    },
    {
      title: "Railway Components",
      image: railwayImage,
      alt: "Railway forged components and parts",
    },
    {
      title: "Industrial Gears",
      image: industrialImage,
      alt: "Industrial forged gears and mechanical components",
    },
    {
      title: "Customized Forgings",
      image: customizedImage,
      alt: "Customized forged metal components",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-industrial-darker">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          className="flex items-center space-x-5 sm:space-x-7 mb-8 sm:mb-10 lg:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-3.5 bg-black rounded-full"></div>
            </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-SFProDisplay">
            Explore Our Forged Excellence
          </h2>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={fadeUpTween}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 aspect-square">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center font-syne group-hover:text-industrial-orange transition-colors duration-300">
                {product.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Button
            variant="hero"
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-[25px] py-3 sm:py-[10px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal w-full sm:w-auto"
            onClick={() => navigate("/products")}
          >
            Learn more →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ForgedExcellenceSection;
