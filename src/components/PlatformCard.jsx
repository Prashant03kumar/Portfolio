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
          ? "rgba(99, 102, 241, 0.05)"
          : "rgba(6, 182, 212, 0.05)",
      }}
      className={`
        flex items-center gap-4 p-4 backdrop-blur-md rounded-xl border transition-all duration-500 group
        ${
          isDarkMode
            ? "bg-gray-900/40 border-white/5 hover:border-indigo-500/50"
            : "bg-white/70 border-cyan-200 shadow-lg shadow-cyan-100/50 hover:border-cyan-400"
        }
      `}
    >
      {/* Icon Container with fixed dimensions */}
      <div
        className={`
        w-12 h-12 flex items-center justify-center rounded-lg p-2 transition-colors duration-500
        ${isDarkMode ? "bg-gray-800/50 group-hover:bg-gray-800" : "bg-cyan-50 group-hover:bg-cyan-100"}
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
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </h4>
        <span
          className={`text-xs font-medium transition-all group-hover:translate-x-1 ${
            isDarkMode ? "text-indigo-400" : "text-cyan-600"
          }`}
        >
          View Profile →
        </span>
      </div>
    </motion.a>
  );
}
