import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getRandomColor = () => {
  const colors = [
    "bg-yellow-400",
    "bg-red-400",
    "bg-orange-400",
    "bg-slate-400",
    "bg-green-400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
