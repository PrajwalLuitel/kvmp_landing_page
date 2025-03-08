import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { servicesData } from "@/utils/images";
import IconComponent from "./IconComponent";

const Services = () => {
  // For triggering animations when the section comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i:any) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1 + 0.3,
      },
    }),
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-blue-50/60"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-white/90"></div>

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <div className="h-1 w-24 bg-blue-600 rounded mb-8 mx-auto"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer comprehensive IT solutions and project management
              services tailored specifically for the banking sector, helping
              financial institutions thrive in today's digital landscape.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="mb-6 flex items-center">
                <div
                  className={`p-4 rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300`}
                >
                  <IconComponent
                    name={service.iconName}
                    size={28}
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl ml-4 font-semibold group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-600 font-medium cursor-pointer"
              >
                Learn more
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-20 p-8 md:p-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">
                Ready to transform your banking technology?
              </h3>
              <p className="text-blue-100">
                Get in touch with our experts today for a personalized
                consultation.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Curved divider to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
