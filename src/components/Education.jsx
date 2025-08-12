import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUniversity, FaPython, FaLaptopCode } from "react-icons/fa";
import React from "react";

const educationData = [
  {
    institute: "University of Dhaka",
    icon: FaUniversity,
    time: "Jan 2022 - Present",
    title: "Disaster Science and Climate Resilience — 7th semester",
    description:
      "Studying Disaster Science and Climate Resilience at the University of Dhaka since January 2022.",
  },
  {
    institute: "Harvard University",
    icon: FaUniversity, // fallback generic university icon
    time: "Aug 2024 - Nov 2024",
    title: "Aspire Leaders Program",
    description:
      "Completed the Aspire Leaders Program, learning leadership, business, health, and career development.",
  },
  {
    institute: "Stanford University",
    icon: FaLaptopCode, // coding laptop icon
    time: "Feb 2023 - Jun 2023",
    title: "Code in Place",
    description:
      "Completed Stanford’s Code in Place program, where I learned Python for the first time.",
  },
];

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 px-6 max-w-6xl mx-auto"
      aria-label="Educational Qualifications"
    >
      <h2 className="text-4xl font-bold text-primary mb-16 text-center">
        Educational Qualifications
      </h2>

      <div ref={ref} className="flex flex-col space-y-16">
        {educationData.map(
          ({ institute, icon: Icon, time, title, description }, i) => (
            <motion.div
              key={institute}
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
            >
              {/* Left side: icon + time + vertical line */}
              <div className="flex flex-col items-center md:items-start md:w-28 relative">
                <div className="text-primary text-5xl">
                  <Icon />
                </div>
                <p className="text-sm text-neutral mt-2">{time}</p>
              </div>

              {/* Right side: text */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">{institute}</h3>
                <p className="font-semibold text-neutral mb-2">{title}</p>
                <p className="text-neutral">{description}</p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Education;
