"use client";

import Image from "next/image";

export default function PortfolioItem({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[15px] w-full h-[13.125rem] md:h-[14.125rem] overflow-hidden relative group block"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-black/40 transition duration-500" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="rounded-[15px] h-full w-full bg-light-yellow dark:bg-dark-yellow text-grey p-10 flex flex-col justify-center items-center">
          <h3 className="text-center text-[1.375rem]">{title}</h3>
          <p className="text-center text-[0.875rem] font-normal mb-4.5">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-gray-100 transition cursor-pointer"
          >
            <Image
              src="/link.svg"
              alt={title}
              width={20}
              height={20}
              priority
            />
          </a>
        </div>
      </div>
    </a>
  );
}
