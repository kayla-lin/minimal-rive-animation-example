"use client";
import Image from "next/image";
import { useState } from "react";

const STATE_MACHINE = "scroll";

import { useRive, FileAsset, decodeImage } from "@rive-app/react-canvas-lite";

export default function DynamicLoading({
  source,
  artboard,
}: {
  source: string;
  artboard?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isImageHidden, setIsImageHidden] = useState(false);

  const { rive, RiveComponent: AutoPlayRive } = useRive({
    src: source,
    artboard,
    stateMachines: STATE_MACHINE,
    // Needs this to get into the "unscrolled" state, otherwise it'll look ugly 👇
    autoplay: true,
    assetLoader: (asset, bytes) => {
      if (asset.name === "dotted-line") {
        setImageAsset(asset, "/selected-line.webp");
        return true;
      }
      if (asset.name === "dotted-line-unselect") {
        setImageAsset(asset, "/unselected-line.webp");
        return true;
      }
      if (asset.name === "theo-selfie") {
        setImageAsset(asset, "/theo-selfie.webp");
        return true;
      }
      return false;
    },
    onLoad: () => {
      setIsLoaded(true);
      rive?.resizeDrawingSurfaceToCanvas();

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

      // Solution:
      setTimeout(() => {
        setIsImageHidden(true);
      }, 500);
    },
  });

  const setImageAsset = (asset: FileAsset, src: string) => {
    fetch(src).then(async (res) => {
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));

      if (asset?.setRenderImage) {
        asset?.setRenderImage(image);
      }

      image.unref();
    });
  };

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
