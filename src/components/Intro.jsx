import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Intro() {
  const { isDarkMode } = useTheme();

  // --- Typewriter Logic ---
  const roles = [
    "Software Engineer",
    "Competitive Programmer",
    "Full-Stack Developer",
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
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

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
          transition-all duration-500
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
                <strong className={isDarkMode ? "text-white" : "text-cyan-700"}>
                  CSE (AI-ML)
                </strong>{" "}
                student driven by a passion for creating{" "}
                <strong
                  className={isDarkMode ? "text-indigo-400" : "text-cyan-600"}
                >
                  impactful digital solutions
                </strong>
                . While I enjoy the thrill of logic, my true focus is on
                bridging the gap between complex algorithms and user-centric
                applications.
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
                , I’ve built a solid foundation in problem-solving. However, I
                believe technical skill is only half the story. I thrive in{" "}
                <strong className={isDarkMode ? "text-white" : "text-cyan-700"}>
                  collaborative environments
                </strong>
                , valuing <strong className="italic">teamwork</strong> and{" "}
                <strong className="italic">adaptability</strong> as the core
                drivers for successful project delivery.
              </p>

              <p>
                Whether it's architecting a <strong>Full-Stack platform</strong>{" "}
                or training a <strong>Machine Learning model</strong>, I
                approach every challenge as an opportunity to learn and
                contribute to a larger goal. I don't just write code; I build
                tools that solve{" "}
                <strong
                  className={isDarkMode ? "text-indigo-400" : "text-cyan-600"}
                >
                  real-world problems
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="shrink-0 mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-96">
              <div
                className={`
                absolute bottom-0 w-full h-px 
                transition-all duration-500
                ${
                  isDarkMode
                    ? "bg-linear-to-r from-transparent via-indigo-500 to-transparent shadow-[0_4px_20px_rgba(99,102,241,0.8)]"
                    : "bg-linear-to-r from-transparent via-cyan-500 to-transparent shadow-[0_4px_20px_rgba(6,182,212,0.6)]"
                }`}
              ></div>

              <img
                src="/images/Me.png"
                alt="Profile"
                className="h-full object-cover rounded-2xl
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-[125%] 
                drop-shadow-[0_-10px_15px_rgba(0,0,0,0.5)]"
              />

              <div
                className={`absolute bottom-0 w-full h-3/4 rounded-t-full -z-10 blur-2xl ${
                  isDarkMode ? "bg-indigo-500/5" : "bg-cyan-500/10"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
