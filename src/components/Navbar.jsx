import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Mapping display names to their corresponding section IDs
  const navItems = [
    { name: "Home", to: "/", end: true },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-800/50 backdrop-blur after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-100 uppercase tracking-wider">
              PORTFOLIO
            </span>
          </div>

          {/* Right: Desktop Nav */}
          <div className="hidden sm:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors
                ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:origin-left after:bg-white after:transition-transform after:duration-300
                ${isActive ? "after:scale-x-100" : "after:scale-x-0 sm:hover:after:scale-x-100"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
            >
              <img
                src={open ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="Menu"
                className="h-6 w-6 text-gray-400 hover:text-white transition-colors"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden px-4 pb-3 pt-2 space-y-1 bg-gray-900/90 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
