import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Achievements() {
  const { isDarkMode } = useTheme();

  const achievementsData = [
    {
      title: "800+ Coding Problems Solved",
      description:
        "Solved 800+ problems across LeetCode, GFG, and HackerRank, strengthening expertise in DSA, problem-solving, and competitive programming.",
      date: "Nov' 2025 - Present",
      icon: (
        <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "5-Star HackerRank in C++",
      description:
        "Earned a 5-star rating on HackerRank in C++, demonstrating strong command of programming fundamentals and algorithmic problem-solving across timed challenges.",
      date: "Nov' 2025",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Max Rating 1701 on LeetCode",
      description:
        "Max Rating 1701 in LeetCode Contest, reflecting advanced competency in algorithmic challenges including greedy, binary search, and mathematical optimizations.",
      date: "Recent",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <h2
          className={`text-3xl font-bold mb-12 text-center transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Key{" "}
          <span className={isDarkMode ? "text-cyan-400" : "text-cyan-600"}>
            Achievements
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`backdrop-blur-md rounded-2xl border p-6 flex flex-col transition-all duration-500 shadow-xl relative overflow-hidden ${
                isDarkMode
                  ? "bg-gray-800/40 border-gray-600/50 shadow-gray-900/50"
                  : "bg-white/80 border-black/10 shadow-black/10"
              }`}
            >
              {/* Decorative top gradient */}
              <div 
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r transition-all duration-500 ${
                  isDarkMode ? "from-cyan-500 to-blue-500" : "from-cyan-600 to-blue-600"
                }`}
              />
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl transition-colors duration-500 ${
                  isDarkMode ? "bg-gray-700/50" : "bg-gray-100"
                }`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold leading-tight transition-colors duration-500 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}>
                    {item.title}
                  </h3>
                  <span className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-500 ${
                    isDarkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}>
                    {item.date}
                  </span>
                </div>
              </div>

              <p className={`text-sm leading-relaxed transition-colors duration-500 flex-grow ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
