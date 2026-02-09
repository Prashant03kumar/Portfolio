import { motion } from "framer-motion";
// Import your project images
import movieImg from "../assets/movie-system.png";
import trieImg from "../assets/auto-complete.png";
import algoImg from "../assets/visualizer.jpg";
// Import github icon if you have it in assets
import githubIcon from "../assets/git.svg";

export default function Projects() {
  const projectList = [
    {
      title: "Movie Recommendation System",
      description:
        "Personalized ML system using TF-IDF and Cosine Similarity for high-accuracy suggestions via Streamlit.",
      image: movieImg,
      link: "https://github.com/Jatinkumar2519/Movie-Recommender-System-", // Add specific link if different
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
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden flex flex-col shadow-xl"
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
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={githubIcon}
                      className="w-5 h-5 invert opacity-70 hover:opacity-100 transition-opacity"
                      alt="github"
                    />
                  </a>
                </div>

                <p className="text-gray-400 italic text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md"
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
