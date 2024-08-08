import DynamicLoading from "@/components/dynamic-loading";
import React from "react";

const OptimizedV2 = () => {
  return (
    <main className="bg-[#150002]">
      <div className="mx-auto max-w-7xl pb-4 md:pb-0 lg:px-8 overflow-x-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="mx-auto max-w-mdsm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div className="flex flex-col pb-8">
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Better file uploads</span>
                <span className="block pb-3 text-[#E91515] sm:pb-5">
                  for developers
                </span>
              </h1>
              <p className="lg:text-md text-lg text-gray-300">
                Developers deserve better than S3. That's why we made
                UploadThing, the easier (and safer) alternative. From the button
                to the server, we've got you covered.
              </p>
              <div className="relative mt-4 flex w-full flex-col items-stretch justify-stretch gap-2 sm:justify-center md:flex-row lg:justify-start">
                <a
                  className="line-clamp-1 flex items-center justify-center gap-2 rounded-md bg-[#E91515] px-6 py-3 text-center text-base font-bold text-white shadow-sm hover:bg-[#E91515]/80"
                  href="/signin"
                >
                  Get Started for Free
                </a>
                <a
                  href="https://docs.uploadthing.com"
                  className="line-clamp-1 flex items-center justify-center gap-2 px-6 py-3 text-center text-base font-bold text-white shadow-sm hover:text-[#E91515]/80"
                >
                  Documentation →
                </a>
              </div>
            </div>
          </div>
          <div className="-mb-16 mt-12 hidden sm:-mb-48 lg:relative lg:m-0 lg:block">
            <div className="mx-auto max-w-md px-6 text-white sm:max-w-2xl lg:max-w-none lg:px-0">
              <div className="flex h-[800px] w-[800px] animate-in fade-in duration-300 ">
                <DynamicLoading source={"/dynamic.riv"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OptimizedV2;
