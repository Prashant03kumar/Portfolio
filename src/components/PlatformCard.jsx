import { motion } from "framer-motion";

export default function PlatformCard({ name, icon, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -5,
        scale: 1.02,
        backgroundColor: "rgba(99, 102, 241, 0.05)",
      }}
      className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-md rounded-xl border border-white/5 hover:border-indigo-500/50 transition-all group"
    >
      {/* Icon Container with fixed dimensions */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-lg p-2 group-hover:bg-gray-800 transition-colors">
        <img
          src={icon}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          /* object-contain ensures the logo isn't stretched */
        />
      </div>

      <div className="flex flex-col">
        <h4 className="text-white font-semibold text-base sm:text-lg">
          {name}
        </h4>
        <span className="text-xs text-indigo-400 font-medium group-hover:translate-x-1 transition-transform">
          View Profile →
        </span>
      </div>
    </motion.a>
  );
}
