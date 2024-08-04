"use client";
import Example from "@/components/example";

export default function Home() {
  return (
    <main className="bg-[#18181B] flex flex-col gap-8 ">
      <h1 className="text-white">Turn on this animation</h1>
      <h1 className="text-white">Fade into animation</h1>
      <Example source="/file_upload_load.riv" artboard="V2" />
      <h1 className="text-white">Idle animation after finish playing</h1>
      <Example source="/theo-with-idle.riv" />
    </main>
  );
}
