import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-4 sm:p-6 md:p-10 text-base-content mt-8 sm:mt-10">
      <div className="w-full flex flex-col items-center gap-4">
        <a
          href="/"
          className="flex text-base sm:text-lg md:text-xl flex-col items-center gap-2">
          <img
            src="/public/Images/footer.png"
            alt="Logo"
            className="h-12 sm:h-14 md:h-18 rounded-full border-gray-300 border-2 sm:border-4"
          />
          <span className="font-bold text-sm sm:text-base md:text-lg">
            M S Nayeem
          </span>
        </a>
        <p className="text-xs sm:text-sm md:text-base text-center">
          © {year}. All rights reserved by <b>M S Nayeem</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
