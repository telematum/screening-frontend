"use client";

import { BiDotsHorizontal } from "react-icons/bi";
import { CiLight, CiDark } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [pageMounted, setPageMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setPageMounted(true), []);

  if (!pageMounted)
    return <BiDotsHorizontal className="text-2xl md:text-4xl text-gray-500" />;

  if (resolvedTheme === "dark") {
    return (
      <CiLight
        className="text-2xl md:text-4xl"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <CiDark
        className="text-2xl md:text-4xl"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
