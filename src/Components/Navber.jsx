import ThemeSelector from "./ThemeSelector";
import { MdFileDownload } from "react-icons/md";
import { useState, useEffect } from "react";

const Navber = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "SKILLS", id: "skills" },
    { label: "PROJECT", id: "project" },
    { label: "RESUME", id: "resume" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className="flex px-4 sm:px-6 md:px-10 lg:px-40 items-center justify-between shadow-sm mb-5 sm:mb-10 py-2 sm:py-3 sticky top-0 z-50 bg-opacity-90 backdrop-blur-md">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Dropdown Menu (mobile) */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Dropdown Menu Start */}
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 p-2 shadow">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => handleScroll(item.id)}
                  className={
                    activeSection === item.id
                      ? "active text-primary font-bold"
                      : ""
                  }>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Dropdown Menu End */}
        </div>

        {/* Brand Name */}
        <div className="flex justify-center items-center gap-1 sm:gap-2">
          <a href="/" className="flex items-center gap-1 sm:gap-2">
            <img
              src="/footer.png"
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 rounded-full border-gray-200 border-2 sm:border-4"
            />
            <span className="font-bold text-sm sm:text-base md:text-xl">
              M S Nayeem
            </span>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-2 sm:gap-4 md:gap-6 items-center">
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu-horizontal gap-4 md:gap-6 px-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => handleScroll(item.id)}
                  className={
                    activeSection === item.id
                      ? "text-primary font-bold border-b-2 border-primary pb-1 text-sm md:text-base"
                      : "cursor-pointer hover:text-primary transition-colors text-sm md:text-base"
                  }>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons and Theme Selector */}
      <div className="flex gap-1 sm:gap-2 md:gap-4 items-center">
        <a
          href="https://drive.google.com/file/d/1l_7jXIwDRpaPhrVoSW7NjKSEgUc8sfXf/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-sm md:btn-md">
          <MdFileDownload className="text-lg md:text-xl" />
          <span className="hidden sm:inline font-bold">Resume</span>
        </a>
        {/* <div className="btn btn-sm md:btn-md p-0 z-100">
          <ThemeSelector />
        </div> */}
      </div>
    </div>
  );
};

export default Navber;
