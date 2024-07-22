"use client";
import Example from "@/components/example";

export default function Home() {
  return (
    <main className="bg-[#18181B] flex flex-col gap-8 ">
      <h1 className="text-white">Idle animation after finish playing</h1>
      <Example source="/theo-with-idle.riv" />
      <h1 className="text-white">No idle animation after finish playing</h1>
      <Example source="/theo-no-idle.riv" />
    </main>
  );
}
