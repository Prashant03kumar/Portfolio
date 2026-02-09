import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading: Coming from Right */}
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl sm:text-7xl font-bold text-white leading-tight"
        >
          Hi, I’m{" "}
          <span className="text-5xl sm:text-8xl text-indigo-500 ">JATIN</span>
        </motion.h1>

        {/* Underline */}
        <div className="mt-4 h-1 w-24 bg-gray-600"></div>

        {/* Subheading: Coming from Left */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-400 italic"
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
          {/* Primary Button: Connect */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 active:scale-95"
          >
            <img
              src="/icons/connect.svg"
              alt="connect"
              className="w-5 h-5 invert"
            />
            Connect
          </a>

          {/* Secondary Button: Download CV */}
          <a
            href="/resume.pdf"
            download="Jatin_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-200 font-semibold rounded-lg hover:bg-white/5 hover:border-white transition-all active:scale-95"
          >
            <img
              src="/icons/download.svg"
              alt="download"
              className="w-5 h-5 invert-[.8]"
            />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
