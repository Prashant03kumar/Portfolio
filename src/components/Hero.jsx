import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
    >


      <div className="relative z-10 mx-auto max-w-5xl px-6">
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
              isDarkMode ? "text-indigo-500" : "text-cyan-500"
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
                ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/30"
                : "bg-cyan-500 text-white hover:bg-cyan-600 shadow-cyan-500/30"
            }`}
          >
            <img
              src="/icons/connect.svg"
              alt="connect"
              className={`w-5 h-5 transition-all ${isDarkMode ? "invert-0 brightness-200" : "invert-0 brightness-200"}`}
            />
            Connect
          </NavLink>

          {/* Secondary Button: Download CV */}
          <a
            href="/Prashant_resume.pdf"
            download="Prashant_resume.pdf"
            className={`flex items-center gap-2 px-8 py-3.5 border-2 font-bold rounded-full transition-all active:scale-95 hover:-translate-y-1 ${
              isDarkMode
                ? "border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 hover:text-indigo-300"
                : "border-cyan-400 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-700"
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
