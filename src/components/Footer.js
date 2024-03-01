import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex items-center justify-center gap-1 dark:bg-slate-900 pt-4 sm:pt-6 lg:pt-10 pb-2 font-medium text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-500">
      Made by Chinmayee
      <span>
        <FaHeart fill="red" />
      </span>
      Feb,2024
    </div>
  );
};

export default Footer;
