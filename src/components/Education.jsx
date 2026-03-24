import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Education() {
  const { isDarkMode } = useTheme();

  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      specialization: "(Artificial Intelligence & Machine Learning)",
      school: "Lovely Professional University",
      location: "Phagwara, Punjab",
      grade: "CGPA: 8.28",
      date: "Aug' 2023 – Present",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      degree: "Intermediate",
      specialization: "",
      school: "A.N. International School",
      location: "Bijnor, Uttar Pradesh",
      grade: "Percentage: 84%",
      date: "Mar' 2021 – May' 2022",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      degree: "Matriculation",
      specialization: "",
      school: "A.N. International School",
      location: "Bijnor, Uttar Pradesh",
      grade: "Percentage: 86%",
      date: "Mar' 2020 – Mar' 2021",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2
          className={`text-3xl font-bold mb-16 text-center transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          My{" "}
          <span className={isDarkMode ? "text-indigo-400" : "text-indigo-600"}>
            Education
          </span>
        </h2>

        <div className="relative border-l-2 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-ml-px md:before:top-0 md:before:h-full md:before:w-[2px] md:before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500 border-indigo-500">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 relative flex items-center w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } justify-end`}
            >
              {/* Timeline marker */}
              <div
                className={`absolute w-6 h-6 rounded-full -left-[13px] md:left-1/2 md:-ml-3 flex items-center justify-center bg-indigo-500 border-4 z-10 transition-colors duration-500 ${
                  isDarkMode ? "border-gray-900" : "border-gray-100"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`w-full md:w-5/12 ml-6 md:ml-0 p-6 rounded-2xl border shadow-lg backdrop-blur-md transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-800/40 border-gray-600/50 shadow-gray-900/50"
                    : "bg-white/80 border-black/10 shadow-black/10"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3
                      className={`text-xl font-bold leading-tight transition-colors duration-500 flex flex-wrap gap-2 items-center ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {item.degree}
                    </h3>
                    {item.specialization && (
                      <p
                        className={`text-sm font-medium transition-colors duration-500 mt-1 ${
                          isDarkMode ? "text-indigo-300" : "text-indigo-600"
                        }`}
                      >
                        {item.specialization}
                      </p>
                    )}
                  </div>
                  <div
                    className={`hidden sm:flex items-center justify-center p-2 rounded-lg transition-colors duration-500 ${
                      isDarkMode ? "bg-indigo-500/20 text-indigo-300" : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span
                      className={`text-sm font-semibold transition-colors duration-500 ${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {item.school}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className={`w-4 h-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span
                      className={`text-sm transition-colors duration-500 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {item.location}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-3 border-t transition-colors duration-500 border-gray-200/50 dark:border-gray-700/50">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold rounded-full transition-colors duration-500 ${
                        isDarkMode
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-green-100 text-green-700 border border-green-200"
                      }`}
                    >
                      {item.grade}
                    </span>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full transition-colors duration-500 ${
                        isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
