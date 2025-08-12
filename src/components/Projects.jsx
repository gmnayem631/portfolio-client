import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaStripe,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpress } from "react-icons/si";
import { AiOutlineFileUnknown } from "react-icons/ai"; // generic icon for DOM

const projects = [
  {
    name: "CampWell",
    image: "https://i.ibb.co/CKm357YJ/camp.png",
    techStack: [
      "HTML5",
      "CSS3",
      "JS",
      "React",
      "Tailwindcss",
      "Express JS",
      "Firebase",
      "MongoDB",
      "Stripe",
    ],
    description:
      "CampWell: A web platform connecting medical camp organizers and participants with role-based dashboards, secure payments, and real-time notifications.",
    liveLink: "https://camp-well.web.app/",
    githubLink: "https://github.com/gmnayem631/camp-well-client",
    challenges:
      "Integrating stripe payment method for the first time was a challenge itself",
    improvements: "There some places where the UI security could be improved",
  },
  {
    name: "TrackBack",
    image: "https://i.ibb.co/CpdV4pXW/trackback.png",
    techStack: [
      "HTML5",
      "CSS3",
      "JS",
      "React",
      "Tailwindcss",
      "Express JS",
      "Firebase",
      "MongoDB",
    ],
    description:
      "Tracks and finds your lost items. Connects the owner with their lost items",
    liveLink: "https://track-back-bdfda.web.app/",
    githubLink: "https://github.com/gmnayem631/track-back-client",
    challenges:
      "Doing a large and interactive project is always challenging - whether to maintain the work flow, or managing all the bugs",
    improvements:
      "UI design can be improved further with better user experience as well",
  },
  {
    name: "English Janala",
    image: "https://i.ibb.co/NnGzQx4q/Screenshot-2.png",
    techStack: ["HTML5", "CSS3", "Tailwindcss", "JS", "DOM"],
    description:
      "Interactive platform to improve English skills through lessons, and vocabulary building, on JavaScript concepts.",
    liveLink: "https://a06-english-janala.surge.sh/",
    githubLink: "https://github.com/gmnayem631/english-janala",
    challenges: "Working with APIs for the first time was tough",
    improvements: "The missing data could be an improvement",
  },
];

// Map tech names to icons
const techIconMap = {
  HTML5: <FaHtml5 title="HTML5" className="text-orange-600" />,
  CSS3: <FaCss3Alt title="CSS3" className="text-blue-600" />,
  JS: <FaJs title="JavaScript" className="text-yellow-500" />,
  React: <FaReact title="React" className="text-sky-400" />,
  Tailwindcss: <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />,
  "Express JS": <SiExpress title="Express JS" className="text-gray-800" />,
  Firebase: <SiFirebase title="Firebase" className="text-yellow-400" />,
  MongoDB: <FaDatabase title="MongoDB" className="text-green-700" />,
  Stripe: <FaStripe title="Stripe" className="text-purple-600" />,
  DOM: <AiOutlineFileUnknown title="DOM" className="text-gray-600" />,
};

const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContentVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  exit: { y: "100vh", opacity: 0, transition: { ease: "easeInOut" } },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
      aria-label="Projects section"
    >
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-base-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {project.name}
              </h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-base-100 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-2xl font-bold text-primary hover:text-primary/80 transition"
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold text-primary mb-4">
                {selectedProject.name}
              </h2>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full max-h-64 object-cover rounded mb-6"
                loading="lazy"
              />

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-3xl"
                    title={tech}
                    aria-label={tech}
                  >
                    {techIconMap[tech] || <AiOutlineFileUnknown />}
                  </span>
                ))}
              </div>

              <p className="mb-4">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
                >
                  <FaExternalLinkAlt />
                  Live Project
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neutral text-white px-4 py-2 rounded hover:bg-neutral/90 transition"
                >
                  <FaGithub />
                  GitHub Repo
                </a>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-2">
                Challenges Faced
              </h3>
              <p className="mb-6">{selectedProject.challenges}</p>

              <h3 className="text-xl font-semibold text-primary mb-2">
                Potential Improvements
              </h3>
              <p>{selectedProject.improvements}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
