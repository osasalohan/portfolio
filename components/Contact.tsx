"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="w-full md:max-w-[38.625rem] grid grid-cols-2 gap-3.5 md:gap-9.5 mb-12 md:mb-19">
      <a
        href="/resume.pdf"
        download="Alohan CV"
        className="cursor-pointer rounded-[10px] bg-light-yellow dark:bg-dark-yellow py-3 md:py-6 flex justify-center items-center gap-2"
      >
        <span className="text-[0.75rem] md:text-[1.375rem] text-grey">
          Download CV
        </span>
        <Image
          src="/download.svg"
          alt="Download"
          width={27}
          height={24}
          priority
        />
      </a>
      <a
        href="mailto:cyrilalohan@gmail.com"
        className="cursor-pointer rounded-[10px] bg-white dark:bg-dark-grey-2 py-3 md:py-6 flex justify-center items-center gap-2"
      >
        <span className="text-[0.75rem] md:text-[1.375rem] text-grey dark:text-dark-grey">
          Contact Me
        </span>
      </a>
    </div>
  );
}
