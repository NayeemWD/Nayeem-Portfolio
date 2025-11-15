import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiHeart, FiArrowUpRight } from "react-icons/fi";

const ProjectsItems = [
  {
    id: 1,
    image: "/p1.png",
    category: "React Web Application",
    likes: 950,
    title: "ByteBlaze Blogs site",
    description:
      "ByteBlaze Blogs is a web application that helps to read blocks and gain knowledge. It is built with HTML, CSS, JavaScript and React.",
    delay: 100,
    ProjectLink: "https://byte-blaze.netlify.app/",
    githubLinkFrontend:
      "https://github.com/NayeemWD/ByteBlaze?tab=readme-ov-file",
    technologies: [
      { name: "HTML", color: "bg-orange-600" },
      { name: "CSS", color: "bg-blue-600" },
      { name: "Tailwind CSS", color: "bg-sky-500" },
      { name: "JavaScript", color: "bg-yellow-400" },
      { name: "React", color: "bg-cyan-400" },
    ],
  },
  {
    id: 2,
    image: "/p2.png",
    category: "React Web Application",
    likes: 750,
    title: "City Computer Service",
    description:
      "City Computer Service is a web application.Which mainly provides computer services and solves various types of computer problems. that helps to manage coustomer service of a small business. It is built with HTML, CSS, JavaScript and React.",
    delay: 300,
    ProjectLink: "https://city-computer-service.netlify.app/",
    githubLinkFrontend: "https://github.com/NayeemWD/City-Computer-Service",
    technologies: [
      { name: "HTML", color: "bg-orange-600" },
      { name: "CSS", color: "bg-blue-600" },
      { name: "Tailwind CSS", color: "bg-sky-500" },
      { name: "JavaScript", color: "bg-yellow-400" },
      { name: "React", color: "bg-cyan-400" },
    ],
  },
  {
    id: 3,
    image: "/p3.png",
    category: "React Web Application",
    likes: 350,
    title: "DocConnect",
    description:
      "DocConnect is a web application. This basically helps Passion to book appointments with specialist doctors. It is built with HTML, CSS, JavaScript and React.",
    delay: 300,
    ProjectLink: "https://book-doctorappointment.netlify.app/",
    githubLinkFrontend: "https://github.com/NayeemWD/Doctor-Appointment",
    technologies: [
      { name: "HTML", color: "bg-orange-600" },
      { name: "CSS", color: "bg-blue-600" },
      { name: "Tailwind CSS", color: "bg-sky-500" },
      { name: "JavaScript", color: "bg-yellow-400" },
      { name: "React", color: "bg-cyan-400" },
    ],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(ProjectsItems);

  const handleLike = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, likes: project.likes + 1 } : project
      )
    );
  };

  return (
    <section
      id="project"
      className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            My Portfolio
          </h2>
          <span className="text-gray-500 text-xs pt-4 sm:text-sm uppercase tracking-wider block mt-2">
            Explore my work and share your feedback
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="mt-4 sm:mt-6 md:mt-8"
              data-aos="fade-up"
              data-aos-delay={item.delay}
              data-aos-once="true">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative">
                  <a
                    href={item.ProjectLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src={item.image}
                      alt="Portfolio Item"
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                  </a>
                </div>
                <div className="p-3 sm:p-4 md:p-6 c-bg flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2 mb-2 sm:mb-4">
                    <div className="text-xs sm:text-sm text-gray-600 uppercase font-semibold">
                      {item.category}
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600 flex-shrink-0">
                      <button
                        onClick={() => handleLike(item.id)}
                        className="hover:text-red-500 transition-colors duration-300">
                        <FiHeart className="text-lg sm:text-xl" />
                      </button>
                      <span className="text-xs sm:text-sm">{item.likes}</span>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    <a
                      href={item.ProjectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-1">
                      {item.title}{" "}
                      <FiArrowUpRight className="inline-block text-sm sm:text-lg" />
                    </a>
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-white rounded-full ${tech.color}`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
                    {item.githubLinkFrontend || item.githubLinkRepository ? (
                      <a
                        href={
                          item.githubLinkFrontend || item.githubLinkRepository
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-blue-600 font-semibold">
                        <FaGithub className="text-lg sm:text-xl" />
                        <span>Github Code</span>
                      </a>
                    ) : (
                      <div className="text-gray-400">
                        No repository available
                      </div>
                    )}
                    {item.ProjectLink ? (
                      <a
                        href={item.ProjectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 sm:space-x-2 text-green-600 hover:text-green-700 font-semibold">
                        <FiArrowUpRight className="text-lg sm:text-xl" />
                        <span>View Live</span>
                      </a>
                    ) : (
                      <div className="text-gray-400">No live link</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
