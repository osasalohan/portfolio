"use client";

const ProfileFact = ({ count, fact }: { count: string; fact: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-[1rem] md:text-[1.5rem] text-grey dark:text-dark-grey">
      {count}
    </span>
    <span className="max-w-[9.25rem] text-center text-[0.875rem] md:text-[1.375rem] text-light-grey dark:text-dark-grey capitalize">
      {fact}
    </span>
  </div>
);

export default function ProfileFacts() {
  return (
    <div className="md:w-[39.625rem] flex justify-between py-5 md:px-7.5 mb-12">
      <ProfileFact count="5+" fact="Years of work experience" />
      <ProfileFact count="10+" fact="Completed projects" />
      <ProfileFact count="100,000+" fact="Users reached" />
    </div>
  );
}
