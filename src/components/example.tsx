"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const STATE_MACHINE = "scroll";

export default function Example({
  source,
  artboard,
}: {
  source: string;
  artboard?: string;
}) {
  const { rive, RiveComponent } = useRive({
    src: source,
    artboard,
    stateMachines: STATE_MACHINE,
    // Needs this to get into the "unscrolled" state, otherwise it'll look ugly 👇
    autoplay: true,
  });

  const onScrollToAnimate = useStateMachineInput(
    rive,
    STATE_MACHINE,
    "scrolled",
    // Feel free to change this to true if you want it to autoplay the "download" animation 👇
    false
  );

  const [remount, setRemount] = useState(false);

  useEffect(() => {
    if (remount) {
      setTimeout(() => {
        setRemount(false);
      }, 300);
    }
  }, [remount]);

  useEffect(() => {
    return () => {
      rive?.cleanup();
    };
  }, []);

  return (
    <>
      <div className="flex-col gap-8">
        <div className="w-[350px] h-[350px]">
          {!remount && <RiveComponent />}
        </div>
        <div>
          <button
            className="border border-blue-200 h-[auto] bg-white "
            onClick={() => {
              // Setting this to true will play the download animation👇
              if (onScrollToAnimate) {
                onScrollToAnimate.value = true;
              }
            }}
          >
            Turn on animation
          </button>
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
