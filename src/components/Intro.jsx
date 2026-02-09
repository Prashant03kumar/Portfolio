import { useState, useEffect } from "react";

export default function Intro() {
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
          className="
          min-h-[65vh]
          flex flex-col-reverse md:flex-row
          justify-between items-center gap-12
          bg-gray-900/40 backdrop-blur-md
          p-10 md:p-14
          rounded-3xl
          border border-white/5
          shadow-2xl shadow-black/60
        "
        >
          <div className="flex-1">
            <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              Hi, I am Jatin, a
            </h2>

            <h2 className="text-3xl sm:text-5xl font-bold text-indigo-500 mt-2 min-h-15">
              {text}
              <span className="animate-pulse text-gray-400">|</span>
            </h2>

            <div className="space-y-6 mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
              <p>
                I am a <strong className="text-white">CSE (AI-ML)</strong>{" "}
                student who doesn't just code for contests, but to solve{" "}
                <strong className="text-indigo-400">real-world problems</strong>
                . I believe that strong algorithmic thinking is the foundation
                for building scalable, high-performance applications.
              </p>

              <p>
                As a{" "}
                <strong className="text-white font-medium">
                  Knight 🛡️ @ LeetCode
                </strong>{" "}
                and{" "}
                <strong className="text-white font-medium">
                  Specialist @ CodingNinjas
                </strong>
                , I have mastered data structures and logic through{" "}
                <strong className="text-indigo-400">
                  2000+ solved problems
                </strong>{" "}
                across global platforms.
              </p>

              <p>
                Beyond the terminal, I focus on{" "}
                <strong className="text-white">Full-Stack Development</strong>{" "}
                and <strong className="text-white">Machine Learning</strong>,
                turning complex data into functional, user-centric solutions
                that make an impact.
              </p>
            </div>
          </div>

          <div className="shrink-0 mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-96">
              {/* 1. The Bottom Border/Platform with Glow */}
              <div
                className="
                absolute bottom-0 w-full h-px 
                bg-linear-to-r from-transparent via-indigo-500 to-transparent
                shadow-[0_4px_20px_rgba(99,102,241,0.8)]"
              ></div>

              {/* 2. The Image (Increased size and positioned to 'pop' out) */}
              <img
                src="/images/Me.png"
                alt="Jatin Profile"
                className="h-full object-cover rounded-2xl
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-[125%] max-w
                drop-shadow-[0_-10px_15px_rgba(0,0,0,0.5)]
              "
              />

              {/* 3. Subtle background shape to give depth behind the person (Optional) */}
              <div className="absolute bottom-0 w-full h-3/4 bg-indigo-500/5 rounded-t-full -z-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
