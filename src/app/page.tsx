"use client";
import Example from "@/components/example";

export default function Home() {
  return (
    <main className="bg-[#18181B] flex flex-col gap-8 ">
      <h1 className="text-white">
        Infinite loading animation with no mouse (V4)
      </h1>
      <Example source="/file_upload_with_motion_no_mouse.riv" artboard="V2" />
      <h1 className="text-white">Infinite loading animation (V3)</h1>
      <Example source="/file_upload_with_motion.riv" artboard="V2" />
      <h1 className="text-white">Fade into animation (V2)</h1>
      <Example source="/file_upload_load.riv" artboard="V2" />
      <h1 className="text-white">Old animation (V1)</h1>
      <Example source="/theo-with-idle.riv" />
    </main>
  );
}
