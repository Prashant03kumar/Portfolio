import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
// Placeholder image - replace with actual certificate images when available
import placeholderImg from "../assets/cpu.png";
import certCppImg from "../assets/certificates/Certifiacte_c++_page.jpg";
import certCsePng from "../assets/certificates/csePathshala.png";
import certProblemPng from "../assets/certificates/problem_solving_certificate_page.jpg"

export default function Certificates() {
  const { isDarkMode } = useTheme();
  const [selectedCert, setSelectedCert] = useState(null);

  const certificateList = [
    {
      title: "Programming Using C++",
      issuer: "Infosys Springboard",
      date: "July 4, 2024",
      image: certCppImg, // Display actual image
      link: certCppImg,  // View actual image
    },
    {
      title: "Advanced Python for ML & AI",
      issuer: "CSE Pathshala",
      date: "August 3, 2025",
      image: certCsePng,
      link: certCsePng,
    }, {
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "December 22, 2025",
      image: certProblemPng,
      link: certProblemPng,
    }
  ];

  return (
    <section id="certificates" className="py-25 px-6">
      <div className="mx-auto max-w-6xl">
        <h2
          className={`text-3xl font-bold mb-12 text-center transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"
            }`}
        >
          My{" "}
          <span className={isDarkMode ? "text-indigo-400" : "text-cyan-500"}>
            Certificates
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {certificateList.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`w-full backdrop-blur-md rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 shadow-xl ${isDarkMode
                ? "bg-gray-800/40 border-gray-600/50 hover:border-indigo-500 hover:shadow-indigo-500/20 shadow-gray-900/50"
                : "bg-white/80 border-black/10 hover:border-cyan-500 hover:shadow-cyan-500/20 shadow-black/10"
                }`}
            >
              {/* Certificate Info */}
              <div className="p-6 flex flex-col grow">
                <h3
                  className={`text-xl font-bold leading-tight mb-1 transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"
                    }`}
                >
                  {cert.title}
                </h3>

                <p className={`text-sm mb-4 transition-colors duration-500 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="font-semibold">{cert.issuer}</span> • {cert.date}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className={`inline-block w-full text-center py-2.5 rounded-lg font-bold transition-colors duration-300 border ${isDarkMode
                      ? "bg-indigo-600/20 border-indigo-500/50 text-indigo-300 hover:bg-indigo-600 hover:text-white"
                      : "bg-cyan-50 border-cyan-200 text-cyan-600 hover:bg-cyan-500 hover:text-white"
                      }`}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(6px)" }}
          >
            <div className="relative max-w-5xl w-full flex justify-center">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl w-10 h-10 flex items-center justify-center cursor-pointer font-light"
              >
                &times;
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
