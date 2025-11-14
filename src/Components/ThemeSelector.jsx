import React, { useEffect, useRef, useState } from "react";

const ThemeSelector = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Theme icons mapping
  const themeIcons = {
    light: (
      <svg
        className="h-8 w-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>
    ),
    dark: (
      <svg
        className="swap-on h-8 w-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    ),
    system: "💻",
  };

  // Apply theme and sync with system preference
  useEffect(() => {
    const applyTheme = () => {
      const resolvedTheme =
        theme === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : theme;
      document.documentElement.setAttribute("data-theme", resolvedTheme);
      localStorage.setItem("theme", theme);
    };

    applyTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => theme === "system" && applyTheme();
    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left w-full h-full">
      <button
        className="btn btn-sm md:btn-md gap-2 w-full h-full"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="badge badge-sm md:badge-md p-0">
          {/* Theme */}
          {
            themeIcons[
              theme === "system"
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
                : theme
            ]
          }
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 -ml-10 menu bg-base-100 shadow rounded-box">
          <li>
            <button
              className="flex items-center gap-2"
              onClick={() => handleThemeChange("light")}>
              <span>🌞</span>
              <span>Light</span>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-2"
              onClick={() => handleThemeChange("dark")}>
              <span>🌚</span>
              <span>Dark</span>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-2"
              onClick={() => handleThemeChange("system")}>
              <span>💻</span>
              <span>System</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeSelector;
