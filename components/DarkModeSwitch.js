"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-2xl cursor-pointer hover:text-amber-800"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-2xl cursor-pointer hover:text-amber-800"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
