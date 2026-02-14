// components/Skills.jsx
import SkillCard from "./SkillCard";

export default function Skills() {
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
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          My <span className="text-indigo-500">Expertise</span>
        </h2>

        {skillData.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-xl font-semibold text-gray-400 mb-8 border-l-4 border-indigo-500 pl-4">
              {section.category}
            </h3>
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
