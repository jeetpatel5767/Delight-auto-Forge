import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/OMV_9273.png";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-industrial-darker"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Industrial machinery at Delight auto Forge"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <motion.div
              className="absolute -inset-2 sm:-inset-4 border-2 border-industrial-orange/20 rounded-3xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            variants={staggerContainer}
          >
            <motion.div
              className="flex items-center space-x-4 sm:space-x-6"
              variants={fadeUp}
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-3.5 bg-black rounded-full"></div>
            </div>
              <span className="font-semibold tracking-wider font-SFProDisplay text-3xl sm:text-4xl lg:text-5xl">
                About us
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight font-syne"
              variants={fadeUp}
            >
              Driven by Precision, Forged by
              <br className="hidden sm:block" />
              <span className="text-foreground"> Passion</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-industrial-muted leading-relaxed font-SFProDisplay"
              variants={fadeUp}
            >
              Delight auto Forge is a leading manufacturer of closed die forged
              components based in Gujarat, India. With over a decade of
              experience and ISO 9001:2015 certification, we cater to the
              automotive, railway, agriculture, and engineering sectors. Our
              commitment to quality, customer satisfaction, and timely delivery
              makes us a trusted name in the forging industry.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-[25px] py-3 sm:py-[10px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal"
                onClick={() => navigate("/about")}
              >
                Learn more →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
