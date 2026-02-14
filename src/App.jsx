import { useState } from "react";
import React from "react";
import { useTheme } from "./context/ThemeContext";
import {
  Navbar,
  Hero,
  Intro,
  Skills,
  Platforms,
  Projects,
  Footer,
  ScrollToSection,
} from "./components/index.js";
import "./App.css";

function App() {
  const { isDarkMode } = useTheme();

  // Note: Changed 'aqua' to 'cyan' to match standard Tailwind palettes
  // Added a soft gray-50 middle step for a cleaner Light Mode transition
  const bgClass = isDarkMode
    ? "from-black via-gray-950 to-gray-800"
    : "from-white via-cyan-50 to-cyan-400";

  return (
    <div
      className={`min-h-screen bg-linear-to-br ${bgClass} bg-fixed transition-all duration-700 ease-in-out selection:bg-cyan-500 selection:text-white`}
    >
      {/* Logic to handle URL hash scrolling */}
      <ScrollToSection />

      <Navbar />

      {/* Main Content Wrappers */}
      <main className="relative">
        <Hero />
        <Intro />
        <Skills />
        <Platforms />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
