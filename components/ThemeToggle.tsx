"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative w-12 h-12 sm:w-20 sm:h-20 outline-none focus:outline-none focus:ring-0 cursor-pointer"
    >
      <Image
        src={
          currentTheme === "dark"
            ? "/theme-toggle-dark.svg"
            : "/theme-toggle.svg"
        }
        alt="Theme Toggle"
        fill
        sizes="(max-width: 640px) 48px, 80px"
        priority
        className="object-contain"
      />
    </button>
  );
}
