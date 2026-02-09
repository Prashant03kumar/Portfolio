import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/git.svg";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-gray-900/20 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Brand & Rights */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center: Contact Info */}
        <div className="flex  items-center md:items-start gap-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <a href="mailto:brdjatin@gmail.com">brdjatin@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <a href="tel:+919034543477">+91 9034543477</a>
          </div>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Jatinkumar2519"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-500/20 transition-all border border-white/10 hover:border-indigo-500/50"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 invert" />
          </a>
          <a
            href="https://www.linkedin.com/in/jatinturk/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-500/20 transition-all border border-white/10 hover:border-indigo-500/50"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
