// components/SkillCard.jsx
import { motion } from "framer-motion";

export default function SkillCard({ name, iconPath }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-6 
                 bg-gray-900/40 backdrop-blur-md rounded-2xl 
                 border border-white/5 shadow-xl 
                 hover:border-indigo-500/50 transition-colors duration-300"
    >
      <img
        src={iconPath}
        alt={name}
        className="w-12 h-12 mb-4 object-contain"
      />
      <span className="text-gray-300 font-medium text-sm text-center">
        {name}
      </span>
    </motion.div>
  );
}
