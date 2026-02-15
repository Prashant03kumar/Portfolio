import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Intro() {
  const { isDarkMode } = useTheme();

  // --- Typewriter Logic ---
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "AI-ML Specialist",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="about" className="pt-16 min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div
          className={`
          min-h-[65vh]
          flex flex-col-reverse md:flex-row
          justify-between items-center gap-12
          backdrop-blur-md
          p-10 md:p-14
          rounded-3xl
          border
          transition-all duration-700
          shadow-2xl
          ${
            isDarkMode
              ? "bg-gray-900/40 border-white/5 shadow-black/60"
              : "bg-white/70 border-cyan-100 shadow-cyan-200/40"
          }
        `}
        >
          <div className="flex-1">
            <h2
              className={`text-3xl sm:text-5xl font-bold leading-tight transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-cyan-950"
              }`}
            >
              Hi, I am Prashant, a
            </h2>

            <h2
              className={`text-3xl sm:text-5xl font-bold mt-2 min-h-15 transition-colors duration-500 ${
                isDarkMode ? "text-indigo-500" : "text-cyan-600"
              }`}
            >
              {text}
              <span
                className={`animate-pulse ${isDarkMode ? "text-gray-400" : "text-cyan-300"}`}
              >
                |
              </span>
            </h2>

            <div
              className={`space-y-6 mt-6 text-lg leading-relaxed max-w-2xl transition-colors duration-500 ${
                isDarkMode ? "text-gray-400" : "text-cyan-900/80"
              }`}
            >
              <p>
                I am a{" "}
                <strong
                  className={
                    isDarkMode ? "text-white" : "text-cyan-700 font-bold"
                  }
                >
                  CSE (AI-ML)
                </strong>{" "}
                student who codes to solve{" "}
                <strong
                  className={
                    isDarkMode ? "text-indigo-400" : "text-cyan-600 font-bold"
                  }
                >
                  real-world problems
                </strong>
                . I believe that a strong algorithmic foundation is only
                valuable when paired with{" "}
                <strong className="italic">adaptability</strong>
                and <strong className="italic">teamwork</strong>.
              </p>

              <p>
                With a{" "}
                <strong
                  className={
                    isDarkMode
                      ? "text-white font-medium"
                      : "text-cyan-800 font-bold"
                  }
                >
                  LeetCode Rating of 1577
                </strong>
                , I have mastered logic and data structures by solving
                <strong
                  className={
                    isDarkMode ? "text-indigo-400" : "text-cyan-600 font-bold"
                  }
                >
                  {" "}
                  700+ problems
                </strong>
                . This discipline helps me tackle technical hurdles efficiently
                in a collaborative environment.
              </p>

              <p>
                Beyond individual contests, I focus on{" "}
                <strong
                  className={
                    isDarkMode
                      ? "text-white font-medium"
                      : "text-cyan-700 font-bold"
                  }
                >
                  Full-Stack Development
                </strong>{" "}
                and{" "}
                <strong
                  className={
                    isDarkMode
                      ? "text-white font-medium"
                      : "text-cyan-700 font-bold"
                  }
                >
                  AI-ML
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="shrink-0 mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-96 flex items-end justify-center">
              {/* 1. BACKGROUND GLOW (Behind the person) */}
              <div
                className={`
                  absolute bottom-1/4 left-1/2 -translate-x-1/2 w-4/5 h-4/5 rounded-full blur-[80px] transition-all duration-1000 -z-10
                  ${isDarkMode ? "bg-indigo-600/20" : "bg-cyan-400/40"}
                `}
              ></div>

              {/* 2. THE LINE UNDER IMAGE (Fades at ends) */}
              <div
                className={`
                absolute bottom-0 w-[110%] h-0.5 transition-all duration-700
                bg-linear-to-r from-transparent via-current to-transparent
                ${
                  isDarkMode
                    ? "text-indigo-500 shadow-[0_4px_15px_rgba(99,102,241,0.6)]"
                    : "text-cyan-500 shadow-[0_4px_15px_rgba(6,182,212,0.6)]"
                }`}
              ></div>

              {/* 3. PROFILE IMAGE */}
              <img
                src="/images/Me.png"
                alt="Prashant Profile"
                className="h-[105%] object-cover rounded-2xl absolute bottom-0 left-1/2 -translate-x-1/2 w-[125%] max-w-none drop-shadow-[0_-10px_15px_rgba(0,0,0,0.3)] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
