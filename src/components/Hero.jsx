import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Import NavLink
import { useTheme } from "../context/ThemeContext";

const blinkingStars = [...Array(40)].map((_, i) => {
  const isLarge = i < 5;
  const size = isLarge ? Math.random() * 3 + 3 : Math.random() * 2 + 1;
  return {
    id: i,
    size,
    isLarge,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 4,
  };
});

const shootingStars = [...Array(4)].map((_, i) => ({
  id: i,
  top: Math.random() * 40,
  left: Math.random() * 60,
  delay: Math.random() * 4,
  duration: Math.random() * 1.5 + 1.5,
}));

export default function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
    >
      {/* Night Sky Elements for Dark Mode */}
      {isDarkMode && (
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        >
          {/* Main starry background using radial gradients for different sized stars */}
          <div 
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                radial-gradient(1.5px 1.5px at 15% 20%, white, rgba(0,0,0,0)),
                radial-gradient(2.5px 2.5px at 30% 10%, rgba(255,255,255,0.8), rgba(0,0,0,0)),
                radial-gradient(1px 1px at 50% 50%, white, rgba(0,0,0,0)),
                radial-gradient(2.5px 2.5px at 70% 30%, rgba(255,255,255,0.9), rgba(0,0,0,0)),
                radial-gradient(1px 1px at 90% 15%, #d1d5db, rgba(0,0,0,0)),
                radial-gradient(3px 3px at 85% 65%, white, rgba(0,0,0,0)),
                radial-gradient(1.5px 1.5px at 20% 80%, rgba(255,255,255,0.7), rgba(0,0,0,0)),
                radial-gradient(2px 2px at 45% 75%, white, rgba(0,0,0,0))
              `,
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat'
            }}
          />
          {/* Realistic Full Moon with Subtle Craters */}
          <div 
            className="absolute top-[10%] right-[10%] sm:right-[20%] w-20 h-20 md:w-24 md:h-24 rounded-full opacity-95 shadow-[0_0_40px_rgba(255,255,255,0.4),0_0_10px_rgba(255,255,255,0.5),inset_-8px_-8px_16px_rgba(0,0,0,0.5)]"
            style={{
              backgroundColor: '#e5e7eb', // gray-200
              backgroundImage: `
                radial-gradient(circle at 30% 30%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.08) 12%, transparent 18%),
                radial-gradient(circle at 65% 55%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.12) 15%, transparent 22%),
                radial-gradient(circle at 45% 75%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.06) 10%, transparent 15%)
              `
            }}
          />
          
          {/* Planets */}
          <div className="absolute top-[35%] left-[10%] w-6 h-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#1e3a8a)] shadow-[0_0_15px_#3b82f6] opacity-80" />
          <div className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fca5a5,#7f1d1d)] shadow-[0_0_10px_#ef4444] opacity-70" />

          {/* Shooting/Broken stars matching exactly their rotated path */}
          {shootingStars.map((star) => (
            <div
              key={`shoot-${star.id}`}
              className="absolute pointer-events-none transform rotate-45"
              style={{ top: `${star.top}%`, left: `${star.left}%` }}
            >
              <motion.div 
                className="w-32 md:w-48 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-white rounded-full"
                animate={{ 
                  x: ["-10vw", "120vw"], 
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: star.duration, 
                  repeat: Infinity, 
                  ease: "linear", 
                  repeatDelay: 2,
                  delay: star.delay
                }}
              />
            </div>
          ))}

          {/* 40 Random Blinking Stars */}
          {blinkingStars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white z-0"
              style={{
                width: star.size,
                height: star.size,
                top: `${star.top}%`,
                left: `${star.left}%`,
                boxShadow: star.isLarge ? "0 0 12px 2px rgba(255, 255, 255, 0.8)" : "0 0 8px 1px rgba(255, 255, 255, 0.4)",
              }}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 1, 0.1] }}
              transition={{ 
                duration: star.duration, 
                repeat: Infinity, 
                delay: star.delay, 
                ease: "easeInOut" 
              }}
            />
          ))}
        </div>
      )}

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
