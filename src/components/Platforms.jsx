import leetcodeIcon from "../assets/leetcode.png";
import codestudioIcon from "../assets/codestudio.jpg";
import gfgIcon from "../assets/gfg.png";
import codechefIcon from "../assets/codechef.jpg";
import codeforcesIcon from "../assets/codeforces.png";
import atcoderIcon from "../assets/atcoder.png";

import PlatformCard from "./PlatformCard";
import { useTheme } from "../context/ThemeContext";

export default function Platforms() {
  const { isDarkMode } = useTheme();

  const platformLinks = [
    {
      name: "LeetCode",
      icon: leetcodeIcon,
      link: "https://leetcode.com/u/prashantcod03/",
    },
    {
      name: "Code360 (Naukri)",
      icon: codestudioIcon,
      link: "https://www.naukri.com/code360/profile/prashantcode",
    },
    {
      name: "GeeksforGeeks",
      icon: gfgIcon,
      link: "https://www.geeksforgeeks.org/profile/pkritwagaip",
    },
    {
      name: "CodeChef",
      icon: codechefIcon,
      link: "https://www.codechef.com/users/prashantcod03",
    },
    {
      name: "Codeforces",
      icon: codeforcesIcon,
      link: "https://codeforces.com/profile/Prashantcod03",
    },
    {
      name: "AtCoder",
      icon: atcoderIcon,
      link: "https://atcoder.jp/users/prashantcode03",
    },
  ];

  return (
    <section id="platforms" className="py-5 mb-15 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold transition-colors duration-500 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Coding{" "}
            <span className={isDarkMode ? "text-indigo-500" : "text-cyan-500"}>
              Profiles
            </span>
          </h2>
          <p
            className={`mt-2 italic text-lg transition-colors duration-500 ${
              isDarkMode ? "text-gray-400" : "text-cyan-700/80"
            }`}
          >
            "Over 700+ problems solved across all platforms"
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformLinks.map((platform, index) => (
            <PlatformCard
              key={index}
              name={platform.name}
              icon={platform.icon}
              link={platform.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
