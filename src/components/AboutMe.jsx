import { motion } from "framer-motion";
import profilePic from "../assets/nayem2.jpg"; // Replace with your image path

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutMe = () => {
  const paragraphs = [
    "Hi! I'm Gulam Mustafa Nayem, currently pursuing my Bachelor's degree at the University of Dhaka.",
    "I started learning HTML back in 2018, making colorful tables and forms, and was amazed when I discovered CSS.",
    "What began as curiosity turned into a passion — by the end of 2024, I took my development journey seriously.",
    "Now, I'm a Frontend Developer, enjoying how a few lines of code can create stunning visuals.",
    "Beyond tech, I'm a competitive chess player with a FIDE rapid rating of 1623 and a book lover who enjoys both fiction and nonfiction.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="about">
      <div className="bg-[#F5DDDD] dark:bg-[#3A4454] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          {/* Accent blob behind image */}
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#00BDAA] rounded-full blur-3xl opacity-30 -z-10"></div>

          <img
            src={profilePic}
            alt="Gulam Mustafa Nayem"
            className="rounded-xl border-4 border-[#00BDAA] shadow-xl w-64 md:w-80 object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-bold mb-6 text-[#3A4454] dark:text-white"
          >
            About Me
          </motion.h2>

          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-4 text-lg leading-relaxed text-[#3A4454] dark:text-gray-200"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
