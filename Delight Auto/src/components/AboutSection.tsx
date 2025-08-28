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
      className="py-12 sm:py-16 lg:py-20 bg-[#060010]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
<motion.img
  src={aboutImage}
  alt="Industrial machinery at Delight auto Forge"
  className="order-2 lg:order-1 w-full h-[450px] sm:h-[500px] lg:h-[650px] object-cover object-center rounded-2xl"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
/>


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
