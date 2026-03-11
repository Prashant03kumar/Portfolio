import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", to: "/", end: true },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-500 border-b ${
        isDarkMode
          ? "bg-gray-900/40 border-gray-600/50"
          : "bg-white/60 border-black/10 shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center">
            <span
              className={`text-xl font-bold tracking-tighter transition-colors duration-500 uppercase ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              PORT
              <span
                className={isDarkMode ? "text-gray-300" : "text-gray-600"}
              >
                FOLIO
              </span>
            </span>
          </div>

          {/* Right: Desktop Nav & Theme Toggle */}
          <div className="hidden sm:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${
                    isActive
                      ? isDarkMode
                        ? "bg-white/10 text-white"
                        : "bg-black/10 text-black"
                      : isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-black"
                  }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Professional Pill Toggle */}
            <div
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-500 p-1 flex items-center ${
                isDarkMode ? "bg-gray-800" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  isDarkMode
                    ? "translate-x-7 bg-white text-black"
                    : "translate-x-0 bg-white text-black"
                }`}
              >
                {isDarkMode ? (
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 transition-colors ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              <img
                src={open ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="Menu"
                className={`h-7 w-7 ${!isDarkMode ? "brightness-0 opacity-80" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`sm:hidden px-4 pb-6 pt-4 space-y-2 transition-all duration-300 backdrop-blur-2xl border-t ${
            isDarkMode
              ? "bg-gray-900/90 border-gray-600/50"
              : "bg-white/95 border-black/10"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                block rounded-2xl px-5 py-4 text-base font-bold transition-all
                ${
                  isActive
                    ? isDarkMode
                      ? "bg-white/20 text-white border border-white/30"
                      : "bg-black/10 text-black border border-black/20"
                    : isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-700 hover:text-black"
                }
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
