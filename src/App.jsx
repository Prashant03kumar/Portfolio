import { useState } from "react";
import {
  Navbar,
  Hero,
  Intro,
  Skills,
  Platforms,
  Projects,
  Footer,
} from "./components/index.js";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-950 to-gray-800 bg-fixed">
      <Navbar />
      <Hero />
      <Intro />
      <Skills />
      <Projects />
      <Platforms />
      <Footer />
    </div>
  );
}

export default App;
