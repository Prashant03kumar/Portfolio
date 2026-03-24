import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

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
    <section id="about" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 w-full flex justify-center items-center py-12">

        {/* Sphere 1: Top Right (Behind) */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-10 md:-top-20 right-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full z-0 ${isDarkMode
            ? "bg-[radial-gradient(circle_at_30%_30%,_#818cf8_0%,_#4f46e5_50%,_#1e1b4b_90%)] shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            : "bg-[radial-gradient(circle_at_30%_30%,_#cffafe_20%,_#06b6d4_60%,_#164e63_100%)] shadow-[0_15px_30px_rgba(6,182,212,0.3)]"
            }`}
        />

        {/* Sphere 2: Bottom Center (Behind) */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -bottom-4 md:-bottom-8 left-[25%] w-32 h-32 md:w-48 md:h-48 rounded-full z-0 ${isDarkMode
            ? "bg-[radial-gradient(circle_at_30%_30%,_#6366f1_0%,_#3730a3_60%,_#0f172a_90%)] shadow-[0_0_20px_rgba(99,102,241,0.25)]"
            : "bg-[radial-gradient(circle_at_30%_30%,_#a5f3fc_30%,_#0891b2_70%,_#0b3f54_100%)] shadow-[0_10px_20px_rgba(6,182,212,0.25)]"
            }`}
        />

        <div
          className={`
          relative z-10 w-full
          min-h-[65vh]
          flex flex-col-reverse md:flex-row
          justify-between items-center gap-12
          backdrop-blur-3xl
          p-10 md:p-14
          rounded-[2rem]
          border
          transition-all duration-700
          shadow-[0_0_40px_rgba(0,0,0,0.2)]
          ${isDarkMode
              ? "bg-gray-800/40 border-white/20 shadow-black/50"
              : "bg-white/40 border-white/60 shadow-gray-400/50"
            }
        `}
        >
          <div className="flex-1">
            <h2
              className={`text-3xl sm:text-5xl font-bold leading-tight transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"
                }`}
            >
              Hi, I am Prashant, a
            </h2>

            <h2
              className={`text-3xl sm:text-5xl font-bold mt-2 min-h-15 transition-colors duration-500 ${isDarkMode ? "text-indigo-400" : "text-cyan-500"
                }`}
            >
              {text}
              <span
                className={`animate-pulse ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                |
              </span>
            </h2>

            <div
              className={`space-y-6 mt-6 text-lg leading-relaxed max-w-2xl transition-colors duration-500 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              <p>
                I am a{" "}
                <strong
                  className={
                    isDarkMode ? "text-indigo-400" : "text-cyan-600 font-bold"
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

                I have mastered logic and data structures by solving
                <strong
                  className={
                    isDarkMode ? "text-indigo-400" : "text-cyan-600 font-bold"
                  }
                >

                </strong>
                . This discipline helps me tackle technical hurdles efficiently
                in a collaborative environment.
              </p>

              <p>
                Beyond individual contests, I focus on{" "}
                <strong
                  className={
                    isDarkMode
                      ? "text-indigo-400 font-medium"
                      : "text-cyan-600 font-bold"
                  }
                >
                  Full-Stack Development
                </strong>{" "}
                and{" "}
                <strong
                  className={
                    isDarkMode
                      ? "text-indigo-400 font-medium"
                      : "text-cyan-600 font-bold"
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
                  ${isDarkMode ? "bg-white/10" : "bg-black/10"}
                `}
              ></div>

              {/* 2. THE LINE UNDER IMAGE (Fades at ends) */}
              <div
                className={`
                absolute bottom-0 w-[110%] h-0.5 transition-all duration-700
                bg-linear-to-r from-transparent via-current to-transparent
                ${isDarkMode
                    ? "text-white shadow-[0_4px_15px_rgba(255,255,255,0.6)]"
                    : "text-black shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
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

        {/* Sphere 3: Left Middle (Above) */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/2 -translate-y-1/2 -left-16 md:-left-32 w-24 h-24 md:w-44 md:h-44 rounded-full z-20 pointer-events-none ${isDarkMode
            ? "bg-[radial-gradient(circle_at_30%_30%,_#a5b4fc_0%,_#4338ca_50%,_#1e1b4b_100%)] shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            : "bg-[radial-gradient(circle_at_30%_30%,_#ecfeff_20%,_#22d3ee_60%,_#083344_100%)] shadow-[0_10px_30px_rgba(6,182,212,0.3)]"
            }`}
        />

      </div>
    </section>
  );
}
