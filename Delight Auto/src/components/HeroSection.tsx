import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-brass-components.jpg";
import { motion } from "framer-motion";

// ✅ Shared animation helper (avoids typing errors)
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay,
    },
  },
});

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-[#060010] bg-grid-pattern bg-grid overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.1)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight font-syne"
        >
          Forging Strength,
          <br />
          <span className="text-industrial-orange">Shaping Excellence</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.3)}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-industrial-muted mb-6 sm:mb-8 lg:mb-10 mx-auto leading-relaxed max-w-4xl px-2"
        >
          Precision Forged Components for Automotive, Railways, Agriculture, and
          Engineering Sectors.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.5)}
        >
          <Button
            variant="hero"
            size="lg"
            className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-[50.8px] py-3 sm:py-4 lg:py-[30.3px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            Get started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
