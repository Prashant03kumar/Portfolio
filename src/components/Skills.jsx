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
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Main Header */}
        <h2
          className={`text-3xl font-bold mb-16 text-center transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          My{" "}
          <span className={isDarkMode ? "text-indigo-500" : "text-cyan-600"}>
            Expertise
          </span>
        </h2>

        {skillData.map((section, idx) => (
          <div key={idx} className="mb-10">
            {/* Category Header */}
            <h3
              className={`text-xl font-semibold mb-8 border-l-4 pl-4 transition-all duration-500 ${
                isDarkMode
                  ? "text-gray-400 border-indigo-500"
                  : "text-cyan-900 border-cyan-500"
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
