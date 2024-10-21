import React from "react";

export function GridBg() {
  return (
    <div className="absolute right-0 z-0 flex h-[50rem] w-full max-w-full items-center justify-center bg-white bg-grid-black/[0.1] dark:bg-black dark:bg-grid-white/[0.06]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
    </div>
  );
}
