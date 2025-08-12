import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import heroImg from "../assets/1.jpg";

const Hero = () => {
  return (
    <section className="bg-base-100 py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative">
        {/* Social Icons - Vertical Left */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 pl-4">
          <a
            href="https://github.com/gmnayem631"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gulam-mustafa-nayem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left lg:pl-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Front-End Developer
          </h1>
          <p className="text-lg text-neutral max-w-md mb-6">
            Hi, I’m Gulam Mustafa Nayem. I specialize in building modern,
            responsive, and visually stunning websites that deliver exceptional
            user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-primary text-white btn px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Download Resume
            </button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={heroImg}
            alt="Gulam Mustafa Nayem"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-primary"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
