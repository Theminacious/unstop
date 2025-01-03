import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '>
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' fill='white' />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 '>
          Fostering a culture of competitiveness, learning and growth!
        </h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
          Fostering a culture of competitiveness, learning, and growth, we aim to inspire individuals to challenge themselves, collaborate, and continuously improve, building a strong foundation for success and excellence.
        </p>
        {/* Adjust button alignment */}
        <div className='mt-8 flex justify-center'>
          <Link href={"/"}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2 px-6 py-3"
            >
              Get to know us
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
