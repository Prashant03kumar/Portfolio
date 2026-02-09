// components/Skills.jsx
import SkillCard from "./SkillCard";

export default function Skills() {
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
