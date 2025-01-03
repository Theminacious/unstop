"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function FooterTypewriterEffect() {
  const words = [
    {
      text: "Empowering",
      className: "text-white "
    },
    {
      text: "innovators",
      className: "text-white "
    },
    {
      text: "and",
      className: "text-white "
    },
    {
      text: "leaders",
      className: "text-white "
    },
    {
      text: "at",
      className: "text-white ",
    },
    {
      text: " Unstop.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center bg-black py-12">
      <p className="text-white dark:text-neutral-200 text-base mb-6 font-semibold tracking-tight leading-relaxed text-center">
  The journey to success begins here at Unstop
</p>

      <TypewriterEffect words={words} />
      <div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-12 rounded-full bg-white text-black text-sm">
          Join Us
        </button>
      </div>
    </div>
  );
}
