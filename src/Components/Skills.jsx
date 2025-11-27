import React, { useState, useRef } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiGit, SiGithub } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";

const skillsData = [
  // -------- Frontend --------
  {
    name: "HTML",
    icon: <FaHtml5 size={60} color="#E34F26" />,
    shadow: "shadow-orange-500",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={60} color="#1572B6" />,
    shadow: "shadow-blue-500",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={60} color="#38B2AC" />,
    shadow: "shadow-teal-400",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs size={60} color="#F7DF1E" />,
    shadow: "shadow-yellow-500",
    category: "Languages",
  },

  {
    name: "React",
    icon: <FaReact size={60} color="#61DAFB" />,
    shadow: "shadow-blue-400",
    category: "Frontend",
  },
  {
    name: "Vite",
    icon: <SiVite size={60} color="#646CFF" />,
    shadow: "shadow-indigo-500",
    category: "Frontend",
  },

  // -------- Languages --------

  // -------- Tools --------

  {
    name: "VS Code",
    icon: <VscVscodeInsiders size={60} color="#007ACC" />,
    shadow: "shadow-blue-500",
    category: "Tools",
  },
  {
    name: "Git",
    icon: <SiGit size={60} color="#F05032" />,
    shadow: "shadow-orange-500",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={60} color="#181717" />,
    shadow: "shadow-gray-700",
    category: "Tools",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All Skills");
  const tabs = ["All Skills", "Frontend", "Languages", "Tools"];

  const uniqueSkills = [
    ...new Map(skillsData.map((item) => [item.name, item])).values(),
  ];

  const filteredSkills =
    activeTab === "All Skills"
      ? uniqueSkills
      : skillsData.filter((skill) => skill.category === activeTab);

  const tabRefs = useRef({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tabRefs.current[tab]) {
      tabRefs.current[tab].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section
      id="skills"
      className="pt-6 sm:pt-8 md:pt-10 from-gray-100 to-gray-300 w-full flex items-center justify-center mb-6 sm:mb-8 mt-0 ">
      <div className="max-w-screen-lg mx-auto p-4  lg:px-0 sm:p-6 md:p-8 flex flex-col justify-center w-full h-full">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 inline border-b-4 border-black pb-2">
            Skills
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-2 sm:mt-3 pt-4 leading-relaxed">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8 px-2 sm:px-4 ">
          <div className="flex overflow-x-auto whitespace-nowrap space-x-2 sm:space-x-4 scrollbar-hide px-2 sm:px-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[tab] = el)}
                onClick={() => handleTabClick(tab)}
                className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center py-4 sm:py-6 px-2 sm:px-0">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`shadow-md hover:scale-105 duration-500 py-3 sm:py-4 md:py-5 rounded-lg ${skill.shadow} c-bg backdrop-blur-md transform transition-all`}>
              <div className="w-12 sm:w-14 md:w-16 mx-auto">
                {React.cloneElement(skill.icon, {
                  size:
                    window.innerWidth < 640
                      ? 40
                      : window.innerWidth < 1024
                      ? 50
                      : 60,
                })}
              </div>
              <p className="mt-2 sm:mt-3 md:mt-4 text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
