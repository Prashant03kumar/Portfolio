import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function PlatformCard({ name, icon, link }) {
  const { isDarkMode } = useTheme();

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -5,
        scale: 1.02,
        backgroundColor: isDarkMode
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.05)",
      }}
      className={`
        flex items-center gap-4 p-4 backdrop-blur-md rounded-xl border transition-all duration-500 group
        ${
          isDarkMode
            ? "bg-gray-800/40 border-gray-600/50 hover:border-indigo-500 hover:shadow-indigo-500/20"
            : "bg-white/70 border-black/10 shadow-lg shadow-black/10 hover:border-cyan-500 hover:shadow-cyan-500/20"
        }
      `}
    >
      {/* Icon Container with fixed dimensions */}
      <div
        className={`
        w-12 h-12 flex items-center justify-center rounded-lg p-2 transition-colors duration-500
        ${isDarkMode ? "bg-white/5 group-hover:bg-white/10" : "bg-black/5 group-hover:bg-black/10"}
      `}
      >
        <img
          src={icon}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col">
        <h4
          className={`font-semibold text-base sm:text-lg transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {name}
        </h4>
        <span
          className={`text-xs font-medium transition-all group-hover:translate-x-1 ${
            isDarkMode ? "text-gray-400 group-hover:text-indigo-400" : "text-gray-600 group-hover:text-cyan-600"
          }`}
        >
          View Profile →
        </span>
      </div>
    </motion.a>
  );
}
