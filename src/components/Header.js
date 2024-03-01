import React, { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className=" flex justify-between px-4 sm:px-10 py-5">
      <h1 className="font-medium sm:font-bold text-slate-500 dark:text-gray-400 text-base sm:text-lg md:text-2xl">
        Today's Appointment List
      </h1>
      <button
        onClick={toggleDarkMode}
        className="p-1 sm:p-2 font-bold rounded-full bg-gray-800 text-white dark:text-black dark:bg-slate-100 dark:border-2 dark:border-slate-800"
      >
        {darkMode ? (
          <div aria-label="light">Light</div>
        ) : (
          <div aria-label="dark">Dark</div>
        )}
      </button>
    </div>
  );
};

export default Header;
