import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiElementor,
  SiStripe,
  SiPython,
} from "react-icons/si";

const skillsData = {
  frontend: [
    { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
  ],
  backend: [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express JS", icon: SiExpress, color: "#000000" },
    { name: "Node JS", icon: FaNodeJs, color: "#339933" },
    { name: "Stripe", icon: SiStripe, color: "#008CDD" },
  ],
  more: [
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { name: "Elementor", icon: SiElementor, color: "#15B5EA" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
};

const circleRadius = 50;
const circleCircumference = 2 * Math.PI * circleRadius;

const tabLabels = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "more", label: "More Tools & Technologies" },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative bg-[#F5DDDD] py-20 px-6 rounded-3xl"
      aria-label="Skills Section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#00BDAA]/20 via-[#6B4E71]/20 to-[#F5DDDD]/0 rounded-3xl"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-8 border-b border-gray-300 dark:border-gray-600">
          {tabLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative px-4 py-2 font-semibold text-lg focus:outline-none
                ${
                  activeTab === key
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-primary rounded-md"
                    : "text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-300"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab} // key to remount for animation
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, when: "beforeChildren" },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 justify-center"
        >
          {skillsData[activeTab].map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={skillVariants}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="flex flex-col items-center space-y-3 cursor-pointer"
            >
              <div
                className="rounded-full bg-white p-5 shadow-lg transition-shadow duration-300"
                style={{ color }}
              >
                <Icon className="w-12 h-12" />
              </div>
              <span className="text-neutral font-semibold">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
