import leetcodeIcon from "../assets/leetcode.png";
import codestudioIcon from "../assets/codestudio.jpg";
import gfgIcon from "../assets/gfg.png";
import codechefIcon from "../assets/codechef.jpg";
import codeforcesIcon from "../assets/codeforces.png";
import atcoderIcon from "../assets/atcoder.png";

import PlatformCard from "./PlatformCard";

export default function Platforms() {
  const platformLinks = [
    {
      name: "LeetCode",
      icon: leetcodeIcon, // Use the imported variable, not a string
      link: "https://leetcode.com/u/jatin_kumar2005/",
    },
    {
      name: "Code360 (Naukri)",
      icon: codestudioIcon,
      link: "https://www.naukri.com/code360/profile/a0328ff5-69ac-4386-9352-abdfa26377c1",
    },
    {
      name: "GeeksforGeeks",
      icon: gfgIcon,
      link: "https://www.geeksforgeeks.org/profile/jatinkumar25",
    },
    {
      name: "CodeChef",
      icon: codechefIcon,
      link: "https://www.codechef.com/users/next_rainbow",
    },
    {
      name: "Codeforces",
      icon: codeforcesIcon,
      link: "https://codeforces.com/profile/jatin_kumar25",
    },
    {
      name: "AtCoder",
      icon: atcoderIcon,
      link: "https://atcoder.jp/users/jatin_kumar_25",
    },
  ];

  return (
    <section id="platforms" className="py-5 mb-15 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Coding <span className="text-indigo-500">Profiles</span>
          </h2>
          <p className="mt-2 text-gray-400 italic text-lg">
            "Over 2000+ problems solved across all platforms"
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
