import SkillCard from "./SkillCard";
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { isDarkMode } = useTheme();

  const skillData = [
    {
      category: "Languages",
      skills: [
        { name: "C++", icon: "/icons/cpp.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
      ],
    },
    {
      category: "Frameworks & Backend",
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Node.js", icon: "/icons/node.svg" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
      ],
    },
    {
      category: "Data Science & ML",
      skills: [
        { name: "Pandas", icon: "/icons/pandas.svg" },
        { name: "NumPy", icon: "/icons/numpy.svg" },
        { name: "Scikit-Learn", icon: "/icons/scikit.svg" },
        { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [{ name: "Git", icon: "/icons/git.svg" }],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
        { name: "Leadership", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
        { name: "Team Collaboration", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> },
        { name: "Adaptability", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Main Header */}
        <h2
          className={`text-3xl font-bold mb-16 text-center transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          My{" "}
          <span className={isDarkMode ? "text-indigo-400" : "text-cyan-500"}>
            Expertise
          </span>
        </h2>

        {skillData.map((section, idx) => (
          <div key={idx} className="mb-10">
            {/* Category Header */}
            <h3
              className={`text-xl font-semibold mb-8 border-l-4 pl-4 transition-all duration-500 ${
                isDarkMode
                  ? "text-gray-200 border-indigo-500"
                  : "text-black border-cyan-500"
              }`}
            >
              {section.category}
            </h3>

            {/* Grid of Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {section.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  iconPath={skill.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
