"use client";
import { useRive } from "@rive-app/react-canvas";
import Image from "next/image";
import { useState } from "react";

const STATE_MACHINE = "scroll";

export default function HeroExample({
  source,
  artboard,
}: {
  source: string;
  artboard?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isImageHidden, setIsImageHidden] = useState(false);

  const { RiveComponent: AutoPlayRive } = useRive({
    src: source,
    artboard,
    stateMachines: STATE_MACHINE,
    // Needs this to get into the "unscrolled" state, otherwise it'll look ugly 👇
    autoplay: true,
    onLoad: () => {
      setIsLoaded(true);

      /**
       * This is a hack to get the transition from the Image to the Next animation looking okay
       *
       * 🚨 Problem:
       *
       * Unmounting and remounting the component leads to a weird flash of black between the image and the Rive component
       *
       * ✅ Solution
       *
       * Overlay the Rive component onto the Image component, so there is not a moment of black flashing
       *
       * Fade out the Image component behind the Rive component
       *
       * When testing I found maybe a subtle slight flash, I don't think this is too noticeable to worry about
       *
       */
      //
      //

      // Solution:
      setTimeout(() => {
        setIsImageHidden(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="flex w-[700px] h-[700px] relative">
        <div
          className={`w-[700px] h-[700px] ${
            !isLoaded ? "hidden" : "block"
          } z-10`}
        >
          <AutoPlayRive />
        </div>

        {/* HACK TO PREVENT FLASH BETWEEN RIVE COMPONENT AND IMAGE */}
        <div
          className={`w-[700x] h-[700px] overflow-hidden absolute left-[14px] ${
            isLoaded && "animate-out fade-out duration-500"
          } ${isImageHidden && "opacity-0"}`}
        >
          <Image alt="File upload" width={672} height={700} src="/start.png" />
        </div>
      </div>
    </>
  );
}
