"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "Arushi Goel",
    designation: "Chief Igniter",
    image: "/img/chief-ignitor.png",
  },
  {
    id: 2,
    name: "Vaishnavi Sharma",
    designation: "Lead Ignitor",
    image: "/img/lead-ignitor.png",
  },
  {
    id: 3,
    name: "Aryan Gupta",
    designation: "Lead Ignitor",
    image: "/img/lead-ignitor-2.png",
  },
  {
    id: 4,
    name: "Ayush Chauhan",
    designation: "Technical Head",
    image: "/img/technical-head.png",
  },
  {
    id: 5,
    name: "Aditya Dhar Dubey",
    designation: "Technical Head",
    image: "/img/technical-head-2.png",
  },
  {
    id: 6,
    name: "Yemen Fatima",
    designation: "Promotion Head",
    image: "/img/promotion-head.png",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl md:text-4xl lg:text-7xl text-white font-bold mb-8 text-center">
          Meet the Minds Behind the Magic
        </h2>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Our team is a group of passionate individuals, each contributing their unique expertise and creativity to drive our mission forward.
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
