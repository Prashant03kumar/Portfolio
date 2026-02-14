import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
// Import your project images
import movieImg from "../assets/movie-system.png";
import trieImg from "../assets/auto-complete.png";
import algoImg from "../assets/visualizer.jpg";
// Import github icon
import githubIcon from "../assets/git.svg";

export default function Projects() {
  const { isDarkMode } = useTheme();

  const projectList = [
    {
      title: "Movie Recommendation System",
      description:
        "Personalized ML system using TF-IDF and Cosine Similarity for high-accuracy suggestions via Streamlit.",
      image: movieImg,
      link: "https://github.com/Jatinkumar2519/Movie-Recommender-System-",
      tags: ["Python", "ML", "Pandas"],
    },
    {
      title: "Search Auto-Complete System",
      description:
        "High-performance Trie-based engine reducing lookup time by 35% for optimized real-time search suggestions.",
      image: trieImg,
      link: "https://github.com/Jatinkumar2519/Search-AutoComplete-System",
      tags: ["C++", "Trie", "Data Structures"],
    },
    {
      title: "AlgoVisualizer",
      description:
        "Interactive React application using Konva to visualize complex algorithms for better conceptual learning.",
      image: algoImg,
      link: "https://github.com/Jatinkumar2519/AlgoVisualizer",
      tags: ["React", "Konva", "Algorithms"],
    },
  ];

  return (
    <section id="projects" className="py-25 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className={`text-3xl font-bold mb-12 text-center transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Featured{" "}
          <span className={isDarkMode ? "text-indigo-500" : "text-cyan-500"}>
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`backdrop-blur-md rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 shadow-xl ${
                isDarkMode
                  ? "bg-gray-900/40 border-white/5 shadow-black/40"
                  : "bg-white/80 border-cyan-100 shadow-cyan-100/50"
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
                    className={`text-xl font-bold leading-tight transition-colors duration-500 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={githubIcon}
                      className={`w-5 h-5 transition-all duration-500 ${
                        isDarkMode
                          ? "invert opacity-70 hover:opacity-100"
                          : "brightness-0 opacity-60 hover:opacity-100"
                      }`}
                      alt="github"
                    />
                  </a>
                </div>

                <p
                  className={`italic text-sm mb-4 leading-relaxed transition-colors duration-500 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border transition-all duration-500 ${
                        isDarkMode
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                          : "bg-cyan-500/10 text-cyan-700 border-cyan-500/20"
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
