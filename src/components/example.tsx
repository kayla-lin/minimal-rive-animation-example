"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect } from "react";

const STATE_MACHINE = "scroll";

export default function Example({ source }: { source: string }) {
  const { rive, RiveComponent } = useRive({
    src: source,
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

  useEffect(() => {
    return () => {
      rive?.cleanup();
    };
  }, []);

  return (
    <>
      <div className="w-[400px] h-[400px] md:w-[800px] md:h-[800px]  flex gap-8">
        <RiveComponent />
        <div>
          <button
            className="border border-blue-200 h-[auto] bg-white "
            onClick={() => {
              if (onScrollToAnimate) {
                onScrollToAnimate.value = true;
              }
            }}
          >
            Turn on animation
          </button>
        </div>
      </div>
    </>
  );
}
