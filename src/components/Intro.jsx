import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Intro() {
  const { isDarkMode } = useTheme();

  // --- Typewriter Logic ---
  const roles = [
    "Software Engineer",
    "Competitive Programmer",
    "AI-ML Specialist",
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
          min-h-[65vh] flex flex-col-reverse md:flex-row
          justify-between items-center gap-12 backdrop-blur-md
          p-10 md:p-14 rounded-3xl border transition-all duration-500
          ${
            isDarkMode
              ? "bg-gray-900/40 border-white/5 shadow-2xl shadow-black/60"
              : "bg-white/70 border-cyan-200 shadow-xl shadow-cyan-100/50"
          }
        `}
        >
          <div className="flex-1">
            <h2
              className={`text-3xl sm:text-5xl font-bold leading-tight transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I am Jatin, a
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
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <p>
                I am a{" "}
                <strong className={isDarkMode ? "text-white" : "text-cyan-900"}>
                  CSE (AI-ML)
                </strong>{" "}
                student who doesn't just code for contests, but to solve{" "}
                <strong
                  className={isDarkMode ? "text-indigo-400" : "text-cyan-600"}
                >
                  real-world problems
                </strong>
                . I believe that strong algorithmic thinking is the foundation
                for building scalable, high-performance applications.
              </p>

              <p>
                As a{" "}
                <strong
                  className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Knight 🛡️ @ LeetCode
                </strong>{" "}
                and{" "}
                <strong
                  className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Specialist @ CodingNinjas
                </strong>
                , I have mastered data structures and logic through{" "}
                <strong
                  className={isDarkMode ? "text-indigo-400" : "text-cyan-600"}
                >
                  2000+ solved problems
                </strong>{" "}
                across global platforms.
              </p>

              <p>
                Beyond the terminal, I focus on{" "}
                <strong className={isDarkMode ? "text-white" : "text-cyan-900"}>
                  Artificial Intelligence
                </strong>{" "}
                and{" "}
                <strong className={isDarkMode ? "text-white" : "text-cyan-900"}>
                  Machine Learning
                </strong>
                , turning complex data into functional, user-centric solutions
                that make an impact.
              </p>
            </div>
          </div>

          <div className="shrink-0 mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-96">
              {/* 1. The Bottom Border/Platform with Dynamic Glow */}
              <div
                className={`
                absolute bottom-0 w-full h-px transition-all duration-500
                ${
                  isDarkMode
                    ? "bg-linear-to-r from-transparent via-indigo-500 to-transparent shadow-[0_4px_20px_rgba(99,102,241,0.8)]"
                    : "bg-linear-to-r from-transparent via-cyan-400 to-transparent shadow-[0_4px_20px_rgba(34,211,238,0.6)]"
                }
                `}
              ></div>

              {/* 2. The Image */}
              <img
                src="/images/Me.png"
                alt="Jatin Profile"
                className={`h-full object-cover rounded-2xl
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-[125%] transition-all duration-500
                ${isDarkMode ? "drop-shadow-[0_-10px_15px_rgba(0,0,0,0.5)]" : "drop-shadow-[0_-10px_15px_rgba(0,180,216,0.2)]"}
              `}
              />

              {/* 3. Subtle background shape for depth */}
              <div
                className={`absolute bottom-0 w-full h-3/4 rounded-t-full -z-10 blur-3xl transition-all duration-500 ${
                  isDarkMode ? "bg-indigo-500/5" : "bg-cyan-400/10"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
