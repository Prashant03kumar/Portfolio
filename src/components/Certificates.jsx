import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
// Placeholder image - replace with actual certificate images when available
import placeholderImg from "../assets/cpu.png";
import certCppImg from "../assets/certificates/Certifiacte_c++_page.jpg";
import certCsePng from "../assets/certificates/csePathshala.png";

export default function Certificates() {
  const { isDarkMode } = useTheme();

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
          <span className={isDarkMode ? "text-white" : "text-black"}>
            Certificates
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {certificateList.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`w-full max-w-sm backdrop-blur-md rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 shadow-xl ${isDarkMode
                ? "bg-gray-800/40 border-gray-600/50 shadow-gray-900/50"
                : "bg-white/80 border-black/10 shadow-black/10"
                }`}
            >
              {/* Certificate Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

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

                {/* Link Button */}
                <div className="mt-auto">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-block w-full text-center py-2.5 rounded-lg font-bold transition-colors duration-300 border ${
                      isDarkMode 
                        ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" 
                        : "bg-black/5 border-black/10 text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
