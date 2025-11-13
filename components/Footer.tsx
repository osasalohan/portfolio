"use client";

export default function Footer() {
  return (
    <div className="flex justify-center items-center p-10 md:p-20">
      <p className="text-center text-[0.875rem] md:text-[1.375rem] text-light-grey dark:text-dark-grey">
        © Osas Alohan. {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
