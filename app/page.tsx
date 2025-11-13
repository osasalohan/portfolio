"use client";

import ThemeToggle from "@/components/ThemeToggle";
import ProfileInfo from "@/components/ProfileInfo";
import ProfileFacts from "@/components/ProfileFacts";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-light dark:bg-dark pt-5 md:pt-8 pb-10 md:pb-20 px-5">
      <ThemeToggle />
      <ProfileInfo />
      <ProfileFacts />
      <Contact />
      <Portfolio />
      <Footer />
    </div>
  );
}
