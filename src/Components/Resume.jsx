import React, { useState, useEffect } from "react";
import { MdFileDownload } from "react-icons/md";

const Resume = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Science and Technology",
      university:
        "Dr. Mahbubur Rahman Mollah Institute of Science & Technology (MRIST)",
      year: "2021 - 2026",
      status: "Running",
    },
    {
      degree: "Course:  MERN Stack Development (Front-End)",
      university: "BdCalling Academy",
      year: "2025",
      status: "Running",
    },
    {
      degree: "Secondary School Certificate",
      university: "Sinha High School & College",
      year: "2019 - 2021",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".timeline-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight / 2;
        if (isInView) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="resume"
      className="mb-20 c-bg rounded-2xl mt-10 sm:mt-20 py-10 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* My Resume Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-4">
            My Resume
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
            Here's my educational journey and professional development
          </p>
        </div>

        {/* Education Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12 md:mb-16">
          EDUCATION
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative timeline-card">
                {/* Timeline dot - changes on scroll */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-4 sm:top-6">
                  <div
                    className={`w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg transition-all duration-500 ${
                      index <= activeIndex
                        ? "bg-blue-500 scale-125"
                        : "bg-gray-300 scale-100"
                    }`}></div>
                </div>

                {/* Cards alternating left and right */}
                <div
                  className={`flex px-2 sm:px-4 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}>
                  <div className="w-full max-w-xs sm:max-w-sm">
                    <div
                      className={`backdrop-blur-md border rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                        index <= activeIndex
                          ? "bg-white/30 border-white/40 scale-105"
                          : "bg-white/20 border-white/30 scale-100"
                      }`}>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-lg font-bold text-gray-800 break-words">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-700 mt-1 sm:mt-2 text-xs sm:text-sm break-words">
                            {edu.university}
                          </p>
                          <p className="text-gray-600 text-xs mt-2 sm:mt-3 font-semibold">
                            {edu.year}
                          </p>
                        </div>
                        {edu.status && (
                          <div className="bg-green-100 text-green-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0 ml-2">
                            {edu.status}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
