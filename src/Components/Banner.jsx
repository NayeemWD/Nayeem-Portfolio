import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row gap-6 lg:gap-30 pb-10 mb-10 lg:mb-20 px-4 sm:px-6 md:px-10 lg:px-0">
      {/* text section */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center order-2 lg:order-1">
        <h3 className="text-xs sm:text-sm md:text-base">Welcome to my world</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-2 sm:py-4">
          Hello, <span className="text-amber-500">I'm </span>
        </h1>
        {/* <Typewriter></Typewriter> */}
        <div className="font-semibold text-3xl sm:text-4xl md:text-5xl font-bold">
          <Typewriter
            words={["M S Nayeem", "Front-End Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl w-full py-3 sm:py-5">
          I'm a Front-End Developer skilled in HTML, CSS, JavaScript and React
          specializing in scalable web apps. Passionate about problem-solving
          and creating seamless user experiences. Let's build something great!
          🚀
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-10">
          <div className="w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/1WJkwHNsRt6UiWT1aCfaxSZ10G1jhKPbH/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="btn w-full btn-sm sm:btn-md md:btn-lg btn-info btn-outline">
              <MdFileDownload className="text-lg md:text-xl" />
              <span className="text-xs sm:text-sm md:text-base">Resume</span>
            </a>
          </div>
          <div className="w-full sm:w-auto">
            <a
              href="https://github.com/NayeemWD"
              rel="noopener noreferrer"
              target="_blank"
              className="btn w-full sm:w-auto btn-sm sm:btn-md md:btn-lg btn-info btn-outline">
              <FaGithub className="text-lg md:text-xl" />
              <span className="text-xs sm:text-sm md:text-base">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="w-full lg:w-5/12 relative flex justify-center order-1 lg:order-2">
        <div className="absolute bottom-0 w-11/12 h-3/4 sm:h-4/5 rounded-2xl c-bg c-shadow"></div>
        <img
          className="relative z-10 h-60 sm:h-80 md:h-100 lg:h-120 object-contain"
          src="/Image3.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;
