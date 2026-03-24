import { useState } from "react";
import React from "react";
import { useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";

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
import {
  Navbar,
  Hero,
  Intro,
  Skills,
  Platforms,
  Projects,
  Achievements,
  Education,
  Certificates,
  Footer,
  ScrollToSection,
} from "./components/index.js";
import "./App.css";

function App() {
  const { isDarkMode } = useTheme();

  const bgStyle = isDarkMode
    ? { backgroundImage: "linear-gradient(135deg, #000000 0%, #000000 70%, #0a1128 90%, #1f2937 100%)" }
    : { backgroundImage: "linear-gradient(to bottom right, #ffffff 0%, #cffafe 50%, #22d3ee 100%)" };

  return (
    <div
      style={bgStyle}
      className={`min-h-screen bg-fixed transition-all duration-700 ease-in-out ${isDarkMode ? "selection:bg-indigo-500/50" : "selection:bg-cyan-500/50"} selection:text-white`}
    >
      {/* Global Night Sky Background for Dark Mode */}
      {isDarkMode && (
        <div className="fixed inset-0 pointer-events-none z-0">
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
              backgroundSize: "200px 200px",
              backgroundRepeat: "repeat",
            }}
          />
          {/* Planets */}
          <div className="absolute top-[35%] left-[10%] w-6 h-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,#93c5fd,#1e3a8a)] shadow-[0_0_15px_#3b82f6] opacity-80" />
          <div className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fca5a5,#7f1d1d)] shadow-[0_0_10px_#ef4444] opacity-70" />

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
                boxShadow: star.isLarge
                  ? "0 0 12px 2px rgba(255, 255, 255, 0.8)"
                  : "0 0 8px 1px rgba(255, 255, 255, 0.4)",
              }}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 1, 0.1] }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Logic to handle URL hash scrolling */}
      <ScrollToSection />

      <Navbar />

      {/* Main Content Wrappers */}
      <main className="relative">
        <Hero />
        <Intro />
        <Skills />
        <Platforms />
        <Certificates />
        <Projects />
        <Achievements />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
