import { Button } from "@/components/ui/button";
import facilityImage from "@/assets/facility-building.jpg";
import { motion, Variants, easeInOut } from "framer-motion";

const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easeInOut,
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
    },
  },
};

const ReadySection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-industrial-darker overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight font-syne">
              Ready to
              <br />
              work with us?
            </h2>

            <p className="text-base sm:text-lg text-industrial-muted leading-relaxed max-w-lg font-SFProDisplay">
              Get in touch with Delight auto Forge Industry for
              high-quality forged components tailored to your industry.
            </p>

            <Button
              variant="hero"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-[25px] py-3 sm:py-[10px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal w-full sm:w-auto"
            >
              Contact us
            </Button>
          </motion.div>

          {/* Image with Circular Design */}
          <div className="relative flex items-center justify-center">
            {/* Animated Circles */}
            <motion.div
              className="absolute w-[300px] sm:w-[450px] md:w-[650px] lg:w-[850px] h-[300px] sm:h-[450px] md:h-[650px] lg:h-[850px] border border-gray-700/50 rounded-full"
              variants={circleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute w-[220px] sm:w-[350px] md:w-[500px] lg:w-[650px] h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px] border border-gray-700/40 rounded-full"
              variants={circleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: easeInOut }}
            />
            <motion.div
              className="absolute w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px] h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] border border-gray-700/30 rounded-full"
              variants={circleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.2, ease: easeInOut }}
            />
            <motion.div
              className="absolute w-[100px] sm:w-[160px] md:w-[220px] lg:w-[300px] h-[100px] sm:h-[160px] md:h-[220px] lg:h-[300px] border border-gray-700/30 rounded-full"
              variants={circleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1.2, ease: easeInOut }}
            />

            {/* Central Image */}
            <motion.div
              className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden z-10 shadow-lg"
              variants={circleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.2, ease: easeInOut }}
            >
              <img
                src={facilityImage}
                alt="Modern industrial manufacturing facility"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
