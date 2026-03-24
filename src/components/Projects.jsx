import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
// Import your project images
import forgeImg from "../assets/forge.webp";
import spamImg from "../assets/spam.png";
import cpuImg from "../assets/cpu.png";
// Import github icon
import githubIcon from "../assets/git.svg";

export default function Projects() {
  const { isDarkMode } = useTheme();

  const projectList = [
    {
      title: "Forge: Productivity Social Ecosystem",
      description:
        "A productivity-focused social ecosystem designed to help users build and maintain consistency through habit tracking and community accountability.",
      image: forgeImg,
      link: "https://github.com/Prashant03kumar/FORGE-",
      tags: ["React", "Vite", "JavaScript", "Node.js"],
    },
    {
      title: "PhishGuard: Phishing URL Detector",
      description:
        "Machine Learning-based phishing website detection system analyzing 42 handcrafted features to classify sites with ~97% accuracy.",
      image: spamImg,
      link: "https://github.com/Prashant03kumar/PhishGuard-ML-Based-Phishing-URL-Detector",
      tags: ["Python", "FastAPI", "Random Forest", "Tailwind CSS"],
    },
    {
      title: "Intelligent CPU Scheduler Simulator",
      description:
        "A PyQt5-based application to simulate CPU scheduling algorithms (FCFS, SJF, RR, Priority) with real-time Gantt charts and metrics.",
      image: cpuImg,
      link: "https://github.com/Prashant03kumar/Intelligent-CPU-Scheduler-Simulator",
      tags: ["Python", "PyQt5", "Algorithms", "Simulation"],
    },
  ];

  return (
    <section id="projects" className="py-25 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className={`text-3xl font-bold mb-12 text-center transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"
            }`}
        >
          Featured{" "}
          <span className={isDarkMode ? "text-indigo-400" : "text-cyan-500"}>
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-md rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 shadow-xl ${isDarkMode
                ? "bg-gray-800/40 border-gray-600/50 hover:border-indigo-500 hover:shadow-indigo-500/20 shadow-gray-900/50"
                : "bg-white/80 border-black/10 hover:border-cyan-500 hover:shadow-cyan-500/20 shadow-black/10"
                }`}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-xl font-bold leading-tight transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"
                      }`}
                  >
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={githubIcon}
                      className={`w-5 h-5 transition-all duration-500 ${isDarkMode
                        ? "invert opacity-70 hover:opacity-100"
                        : "brightness-0 opacity-60 hover:opacity-100"
                        }`}
                      alt="github"
                    />
                  </a>
                </div>

                <p
                  className={`italic text-sm mb-4 leading-relaxed transition-colors duration-500 ${isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md border transition-all duration-500 font-semibold ${isDarkMode
                        ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                        : "bg-cyan-50 text-cyan-700 border-cyan-200"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
