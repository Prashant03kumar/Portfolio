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
          ? "0 20px 25px -5px rgba(255, 255, 255, 0.2)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
      }}
      className={`
        flex flex-col items-center justify-center p-6 
        backdrop-blur-md rounded-2xl border transition-all duration-500
        ${
          isDarkMode
            ? "bg-gray-800/40 border-gray-600/50 hover:border-white/50"
            : "bg-white/80 border-black/10 shadow-sm hover:border-black/50"
        }
      `}
    >
      <div
        className={`
        w-16 h-16 mb-4 flex items-center justify-center rounded-xl transition-all duration-500
        ${
          isDarkMode
            ? "bg-white/5 group-hover:bg-white/10"
            : "bg-black/5 shadow-inner shadow-black/10"
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
        ${isDarkMode ? "text-gray-300" : "text-black"}
      `}
      >
        {name}
      </span>
    </motion.div>
  );
}
