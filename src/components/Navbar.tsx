"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarFirst() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); 

  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoids hydration mismatch

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <HoveredLink href="/about">About Us</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Programs">
          <HoveredLink href="/programs">Programs</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Team">
          <HoveredLink href="/team">Team</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <HoveredLink href="/contact">Contact Us</HoveredLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
