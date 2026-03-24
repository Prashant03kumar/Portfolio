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
    ? { backgroundImage: "linear-gradient(to bottom right, black 60%, #6b7280 80%, #d1d5db 90%, white 100%)" }
    : { backgroundImage: "linear-gradient(to bottom right, white 60%, #6b7280 80%, #374151 90%, black 100%)" };

  return (
    <div
      style={bgStyle}
      className={`min-h-screen bg-fixed transition-all duration-700 ease-in-out selection:bg-cyan-500 selection:text-white`}
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
