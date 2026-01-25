import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex flex-col   lg:flex-row items-center gap-6 pb-6 sm:pb-8 lg:pb-12 mb-8 md:mb-0 lg:mb-0 px-4 sm:px-6 md:px-10 lg:px-0">
      {/* text section */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center order-2 lg:order-1 space-y-3">
        <h3 className="text-xs sm:text-sm md:text-base">Welcome to my world</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Hello, <span className="text-amber-500">I'm</span>
        </h1>

        <div className="font-semibold text-xl sm:text-2xl md:text-3xl">
          <Typewriter
            words={["M S Nayeem", "Frontend Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        <p className="max-w-xl  lg:mx-0 text-sm sm:text-base md:text-lg text-gray-700 py-2 sm:py-3 leading-relaxed">
          I'm a Front-End Developer skilled in HTML, CSS, JavaScript and React
          specializing in scalable web apps. Passionate about problem-solving
          and creating seamless user experiences. Let's build something great!
          🚀
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-3">
          <div className="w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/1WJkwHNsRt6UiWT1aCfaxSZ10G1jhKPbH/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="btn w-full sm:w-auto btn-sm sm:btn-md md:btn-lg btn-info btn-outline">
              <MdFileDownload className="text-base sm:text-lg md:text-xl" />
              <span className="ml-2 text-xs sm:text-sm md:text-base">
                Resume
              </span>
            </a>
          </div>
          <div className="w-full sm:w-auto">
            <a
              href="https://github.com/NayeemWD"
              rel="noopener noreferrer"
              target="_blank"
              className="btn w-full sm:w-auto btn-sm sm:btn-md md:btn-lg btn-info btn-outline">
              <FaGithub className="text-base sm:text-lg md:text-xl" />
              <span className="ml-2 text-xs sm:text-sm md:text-base">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="w-full lg:w-5/12 relative flex justify-center order-1 lg:order-2">
        {/* responsive wrapper that controls background size and image size */}
        <div
          className="relative rounded-2xl overflow-hidden flex items-center justify-center "
          style={{ width: "min(92%,420px)" }}>
          {/* background gradient that matches the wrapper size */}
          <div
            className="absolute left-0 right-0 bottom-0 rounded-2xl h-3/4  "
            style={{ background: "linear-gradient(145deg, #e2e8ec, #ffffff)" }}
          />
          {/* image scales to wrapper width and keeps aspect ratio */}
          <img
            className="relative z-10  w-full h-auto max-h-[300px] sm:max-h-[360px] md:max-h-[420px] object-contain"
            src="/Image3.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
