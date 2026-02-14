import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function SkillCard({ name, iconPath }) {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: isDarkMode
          ? "0 20px 25px -5px rgba(99, 102, 241, 0.2)" // Indigo glow
          : "0 20px 25px -5px rgba(6, 182, 212, 0.2)", // Aqua glow
      }}
      className={`
        flex flex-col items-center justify-center p-6 
        backdrop-blur-md rounded-2xl border transition-all duration-500
        ${
          isDarkMode
            ? "bg-gray-900/40 border-white/5 hover:border-indigo-500/50"
            : "bg-white/80 border-cyan-200 shadow-sm hover:border-cyan-400"
        }
      `}
    >
      <div
        className={`
        w-16 h-16 mb-4 flex items-center justify-center rounded-xl transition-all duration-500
        ${
          isDarkMode
            ? "bg-white/5 group-hover:bg-white/10"
            : "bg-cyan-50 shadow-inner shadow-cyan-100/50"
        }
      `}
      >
        <img
          src={iconPath}
          alt={name}
          className={`w-10 h-10 object-contain transition-all duration-500 ${
            !isDarkMode ? "contrast-[1.1] brightness-[0.9]" : ""
          }`}
        />
      </div>

      <span
        className={`
        font-semibold text-sm text-center tracking-wide transition-colors duration-500
        ${isDarkMode ? "text-gray-300" : "text-cyan-900"}
      `}
      >
        {name}
      </span>
    </motion.div>
  );
}
