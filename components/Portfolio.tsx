"use client";

import { useState } from "react";

import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const [section, setSection] = useState<"portfolio" | "skills">("portfolio");

  return (
    <div className="w-full md:max-w-[47.25rem] pb-5 md:pb-13">
      <div className="rounded-[10px] md:rounded-[20px] bg-white dark:bg-dark-grey-2 py-1.5 md:py-4.5 px-1.5 md:px-6 grid grid-cols-1 gap-2.5 md:gap-8 mb-10 md:mb-18">
        <button
          className={`cursor-pointer rounded-[10px] text-dark-2 dark:text-dark-grey flex justify-center items-center p-3.5 md:p-6 ${
            section === "portfolio" ? "bg-grey-3 dark:bg-dark" : ""
          }`}
          onClick={() => setSection("portfolio")}
        >
          Portfolio
        </button>
        {/* <button
          className={`cursor-pointer rounded-[10px] text-dark-2 dark:text-dark-grey flex justify-center items-center p-3.5 md:p-6 ${
            section === "skills" ? "bg-grey-3 dark:bg-dark" : ""
          }`}
          onClick={() => setSection("skills")}
        >
          Skills
        </button> */}
      </div>
      {section === "portfolio" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7.5 md:gap-x-8 md:gap-y-12">
          <PortfolioItem
            image="/dojah.png"
            title="Dojah"
            description="Anti-fraud infrastructure for the internet"
            link="https://dojah.io"
          />
          <PortfolioItem
            image="/247.png"
            title="24Seven"
            description="End-to-End B2B solutions for distributors, wholesalers and retailers"
            link="https://24seventech.co"
          />
          <PortfolioItem
            image="/jasere.png"
            title="Jasere"
            description="Party games on mobile"
            link="https://jasere.netlify.app"
          />
          <PortfolioItem
            image="/muzu.png"
            title="Muzu"
            description="No-code website builder"
            link="https://muzu.co"
          />
          {/* <PortfolioItem
            image="/gamepride.png"
            title="Gamepride"
            description="Esports gaming platform"
            link="https://gamepride.io"
          /> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
