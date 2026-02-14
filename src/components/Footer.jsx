import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/git.svg";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`w-full py-12 border-t backdrop-blur-md transition-all duration-500 ${
        isDarkMode
          ? "border-white/5 bg-gray-900/20"
          : "border-cyan-100 bg-white/40"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Brand & Rights */}
        <div className="text-center md:text-left">
          <p
            className={`text-sm font-medium transition-colors duration-500 ${
              isDarkMode ? "text-gray-500" : "text-cyan-800/60"
            }`}
          >
            © {new Date().getFullYear()}{" "}
            <span className={isDarkMode ? "" : "text-cyan-600"}>
              Jatin Turk.
            </span>{" "}
            All rights reserved.
          </p>
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-sm">
          <a
            href="mailto:brdjatin@gmail.com"
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-400 hover:text-indigo-400"
                : "text-cyan-700 hover:text-indigo-600 font-medium"
            }`}
          >
            brdjatin@gmail.com
          </a>
          <a
            href="tel:+919034543477"
            className={`transition-colors duration-300 ${
              isDarkMode
                ? "text-gray-400 hover:text-indigo-400"
                : "text-cyan-700 hover:text-indigo-600 font-medium"
            }`}
          >
            +91 9034543477
          </a>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Jatinkumar2519"
            target="_blank"
            rel="noreferrer"
            className={`w-11 h-11 flex items-center justify-center rounded-full transition-all border shadow-sm ${
              isDarkMode
                ? "bg-white/5 border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10"
                : "bg-white border-cyan-200 hover:border-cyan-500 hover:bg-cyan-50 shadow-cyan-100"
            }`}
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className={`w-5 h-5 transition-all ${!isDarkMode ? "brightness-0" : "invert"}`}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jatinturk/"
            target="_blank"
            rel="noreferrer"
            className={`w-11 h-11 flex items-center justify-center rounded-full transition-all border shadow-sm ${
              isDarkMode
                ? "bg-white/5 border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10"
                : "bg-white border-cyan-200 hover:border-cyan-500 hover:bg-cyan-50 shadow-cyan-100"
            }`}
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className={`w-5 h-5 transition-all ${!isDarkMode ? "brightness-110" : ""}`}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
