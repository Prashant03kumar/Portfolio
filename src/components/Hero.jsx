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
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className={`text-4xl sm:text-7xl font-bold leading-tight transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Hi, I’m{" "}
          <span
            className={`text-5xl sm:text-8xl transition-colors duration-500 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            PRASHANT
          </span>
        </motion.h1>

        {/* Underline */}
        <div
          className={`mt-4 h-1.5 w-24 rounded-full transition-colors duration-500 ${
            isDarkMode ? "bg-white/50" : "bg-black/20"
          }`}
        ></div>

        {/* Subheading */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`mt-6 max-w-2xl text-lg sm:text-xl italic transition-colors duration-500 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Aspiring Software Developer building scalable Full-Stack applications
          and AI-ML solutions. A team-oriented problem solver dedicated to
          turning complex logic into real-world impact through adaptability and
          efficient collaboration.
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
                ? "bg-white text-black hover:bg-gray-200 shadow-white/20"
                : "bg-black text-white hover:bg-gray-800 shadow-black/20"
            }`}
          >
            <img
              src="/icons/connect.svg"
              alt="connect"
              className={`w-5 h-5 ${isDarkMode ? "invert-0" : "invert"}`}
            />
            Connect
          </NavLink>

          {/* Secondary Button: Download CV */}
          <a
            href="/jatin_resume.pdf"
            download="Jatin_Resume.pdf"
            className={`flex items-center gap-2 px-8 py-3.5 border-2 font-bold rounded-full transition-all active:scale-95 hover:-translate-y-1 ${
              isDarkMode
                ? "border-gray-500 text-gray-300 hover:bg-white/10 hover:border-white hover:text-white"
                : "border-gray-400 text-gray-700 hover:bg-black/5 hover:border-black hover:text-black"
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
