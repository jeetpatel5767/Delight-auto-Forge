import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

// ✅ TS-safe variants (no duration on spring)
const fadeUpSpring: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const ContactPage = () => {
  return (
    <div className="bg-industrial-darker text-foreground">
      <Navigation />

      {/* Hero uses tween (no variants to avoid TS issues) */}
      <motion.section
        id="contact-page-hero"
        className="h-[120px] sm:h-[150px] md:h-[200px] relative flex items-center justify-center bg-grid-pattern bg-grid overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-syne">
            Contact Us
          </h1>
        </div>
      </motion.section>

      <section className="py-12 sm:py-16 lg:py-20 bg-industrial-darker">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Contact cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: <Phone size={40} className="sm:size-12 text-white" />,
                title: "Call us:",
                text: "(+91) 9712377858",
              },
              {
                icon: <Mail size={40} className="sm:size-12 text-white" />,
                title: "Email:",
                text: "delightautoforge@gmail.com",
              },
              {
                icon: <MapPin size={40} className="sm:size-12 text-white" />,
                title: "Address:",
                text:
                  "Plot No. 1/41, 1/42, Survey No.253, Bhumi Industrial Area, National Highway 8B, Near Jigar Foundry, Shapar Veraval, Rajkot-360024, Gujarat, (India)",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative gradient-border p-[1px] rounded-xl flex flex-col items-center text-center space-y-4"
                variants={fadeUpSpring}
              >
                <div className="bg-industrial-darker p-5 sm:p-7 rounded-xl flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full h-full">
                  {item.icon}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-syne">
                    {item.title}
                  </h3>
                  <p className="text-industrial-muted text-base sm:text-lg font-SFProDisplay">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map */}
            <motion.div
              variants={fadeUpSpring}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-syne mb-8 sm:mb-10 lg:mb-12">
                Get in touch
              </h2>
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center text-industrial-muted">
                Map Placeholder
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-syne mb-8 sm:mb-10 lg:mb-12"
                variants={fadeUpSpring}
              >
                Write us a letter
              </motion.h2>

              <motion.form className="space-y-4 sm:space-y-6" variants={stagger}>
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone", type: "text" },
                ].map((field) => (
                  <motion.div key={field.id} variants={fadeUpSpring}>
                    <label
                      htmlFor={field.id}
                      className="block text-industrial-muted text-base sm:text-lg font-SFProDisplay mb-2"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      type={field.type}
                      className="w-full bg-transparent border-b border-gray-700 focus:border-industrial-orange focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground rounded-none relative custom-input-border"
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeUpSpring}>
                  <label
                    htmlFor="message"
                    className="block text-industrial-muted text-base sm:text-lg font-SFProDisplay mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="w-full bg-transparent border-b border-gray-700 focus:border-industrial-orange focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground rounded-none relative custom-input-border"
                  />
                </motion.div>

                <motion.div variants={fadeUpSpring}>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="text-base sm:text-lg px-6 sm:px-[25px] py-3 sm:py-[10px] hover:shadow-elegant transition-all duration-300 rounded-full font-normal"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
