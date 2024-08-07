"use client";
import { useRive } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const STATE_MACHINE = "scroll";

export default function HeroExample({
  source,
  artboard,
}: {
  source: string;
  artboard?: string;
}) {
  const { rive: autoPlayRive, RiveComponent: AutoPlayRive } = useRive({
    src: source,
    artboard,
    stateMachines: STATE_MACHINE,
    // Needs this to get into the "unscrolled" state, otherwise it'll look ugly 👇
    autoplay: true,
  });

  const [remount, setRemount] = useState(false);

  useEffect(() => {
    if (remount) {
      setTimeout(() => {
        setRemount(false);
      }, 300);
    }
  }, [remount]);

  return (
    <>
      <div className="flex-col gap-8">
        <div className="flex gap-8">
          <div className="w-[800px] h-[800px]">
            {!remount && <AutoPlayRive />}
          </div>
        </div>
        <div>
          <button
            className="border border-blue-200 h-[auto] bg-white "
            onClick={() => {
              setRemount(true);
            }}
          >
            Remount component
          </button>
        </div>
      </div>
    </>
  );
}
