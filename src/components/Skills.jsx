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
      ],
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Numpy", icon: "/icons/numpy.svg" },
        { name: "Pandas", icon: "/icons/pandas.svg" },
        { name: "Scikit-Learn", icon: "/icons/scikit.svg" },
        { name: "Matplotlib", icon: "/icons/matplotlib.svg" },
        { name: "Seaborn", icon: "/icons/seaborn.svg" },
        { name: "Streamlit", icon: "/icons/streamlit.svg" },
        { name: "Flask", icon: "/icons/flask.svg" },
        { name: "FastAPI", icon: "/icons/fastapi.svg" },
        { name: "Scrum", icon: "/icons/scrum.svg" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "Ubuntu", icon: "/icons/ubuntu.svg" },
        { name: "Jira", icon: "/icons/jira.svg" },
        { name: "Selenium", icon: "/icons/selenium.svg" },
      ],
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
