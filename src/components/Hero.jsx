import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading: Hi, I'm JATIN */}
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className={`text-4xl sm:text-7xl font-bold leading-tight transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Hi, I’m{" "}
          <span
            className={`text-5xl sm:text-8xl transition-colors duration-500 ${
              isDarkMode ? "text-indigo-500" : "text-cyan-500"
            }`}
          >
            JATIN
          </span>
        </motion.h1>

        {/* Underline */}
        <div
          className={`mt-4 h-1.5 w-24 rounded-full transition-colors duration-500 ${
            isDarkMode ? "bg-indigo-900/50" : "bg-cyan-200"
          }`}
        ></div>

        {/* Subheading */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`mt-6 max-w-2xl text-lg sm:text-xl italic transition-colors duration-500 ${
            isDarkMode ? "text-gray-400" : "text-cyan-800/70"
          }`}
        >
          Aspiring Software Developer focused on building clean, efficient, and
          scalable solutions. Specializing in AI-ML and Competitive Programming.
        </motion.p>

        {/* --- BUTTON SECTION --- */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {/* Primary Button: Using NavLink to point to #contact */}
          <NavLink
            to="/contact" // Update this to match your routing (/contact or /#contact)
            className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-full transition-all shadow-xl active:scale-95 hover:-translate-y-1 ${
              isDarkMode
                ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/20"
                : "bg-linear-to-r from-cyan-500 to-blue-500 text-white hover:shadow-cyan-500/40 shadow-cyan-200"
            }`}
          >
            <img
              src="/icons/connect.svg"
              alt="connect"
              className="w-5 h-5 invert"
            />
            Connect
          </NavLink>

          {/* Secondary Button: Download CV */}
          <a
            href="/jatin_resume.pdf"
            download="Jatin_Resume.pdf"
            className={`flex items-center gap-2 px-8 py-3.5 border-2 font-bold rounded-full transition-all active:scale-95 hover:-translate-y-1 ${
              isDarkMode
                ? "border-gray-700 text-gray-300 hover:bg-white/5 hover:border-white"
                : "border-cyan-200 text-cyan-900 hover:bg-cyan-50 hover:border-cyan-500 shadow-sm"
            }`}
          >
            <img
              src="/icons/download.svg"
              alt="download"
              className={`w-5 h-5 transition-all ${
                isDarkMode ? "invert-[.8]" : "brightness-0 opacity-60"
              }`}
            />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
