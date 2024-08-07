import React from "react";

export const HeroDemo = () => {
  return (
    <div className="flex flex-col pb-8">
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
        <span className="block">Better file uploads</span>
        <span className="block pb-3 text-[#E91515] sm:pb-5">
          for developers
        </span>
      </h1>
      <p className="lg:text-md text-lg text-gray-300">
        Developers deserve better than S3. That's why we made UploadThing, the
        easier (and safer) alternative. From the button to the server, we've got
        you covered.
      </p>
      <div className="relative mt-4 flex w-full flex-col items-stretch justify-stretch gap-2 sm:justify-center md:flex-row lg:justify-start">
        <a
          className="line-clamp-1 flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-center text-base font-bold text-white shadow-sm hover:bg-primary/80"
          href="/signin"
        >
          Get Started for Free
        </a>
        <a
          href="https://docs.uploadthing.com"
          className="line-clamp-1 flex items-center justify-center gap-2 px-6 py-3 text-center text-base font-bold text-white shadow-sm hover:text-primary/80"
        >
          Documentation →
        </a>
      </div>
    </div>
  );
};
