import tickIcon from "@/assets/Tick.png";
import edgeImage from "@/assets/OMV_9297.png";
import { motion, Variants, easeInOut } from "framer-motion";

// Fade-up variant for text/items
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut },
  },
};

// Zoom-in variant for image
const zoomInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easeInOut },
  },
};

const EdgeSection = () => {
  const advantages = [
    "ISO 9001:2015 Certified",
    "1000+ Tons Annual Capacity",
    "In-House Tool Room",
    "Skilled Workforce & Experienced Management",
    "Customized Forging Solutions",
    "Timely Delivery Across India",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#060010] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="flex items-center space-x-6 sm:space-x-8 mb-8 sm:mb-10 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
           <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-3.5 bg-black rounded-full"></div>
            </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground font-SFProDisplay">
            Our Edge in the Industry
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="relative w-full sm:w-11/12 mx-auto order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={zoomInVariants}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ">
              <img
                src={edgeImage}
                alt="OMV 9297 heat-treated component"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 sm:-inset-4 border-2 border-industrial-orange/20 rounded-3xl -z-10"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p className="text-lg sm:text-xl lg:text-2xl text-industrial-muted leading-relaxed font-SFProDisplay" variants={fadeUpVariants}>
              At Delight auto Forge Industry, we don't just forge metal — we
              forge long-term partnerships through consistent quality, technical
              expertise, and unmatched reliability.
            </motion.p>

            <div className="space-y-3 sm:space-y-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-6 sm:space-x-8 lg:space-x-12"
                  variants={fadeUpVariants}
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden">
                    <img src={tickIcon} alt="Tick" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-foreground font-medium">
                    {advantage}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;
