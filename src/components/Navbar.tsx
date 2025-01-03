import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconUsers,
  IconCalendarEvent,
  IconMail,
} from "@tabler/icons-react";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-black dark:text-gray-300" />
      ),
      href: "#",
    },
    {
      title: "About Us",
      icon: (
        <IconInfoCircle className="h-full w-full text-black dark:text-gray-300" />
      ),
      href: "/about",
    },
    {
      title: "Events",
      icon: (
        <IconCalendarEvent className="h-full w-full text-black dark:text-gray-300" />
      ),
      href: "/events",
    },
    {
      title: "Our Team",
      icon: (
        <IconUsers className="h-full w-full text-black dark:text-gray-300" />
      ),
      href: "/team",
    },
    {
      title: "Contact Us",
      icon: (
        <IconMail className="h-full w-full text-black dark:text-gray-300" />
      ),
      href: "/contact",
    },
  ];

  return (
    <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 bg-black dark:bg-gray-900 shadow-lg rounded-full py-2 px-6 z-50">
      <FloatingDock
        mobileClassName="translate-y-4" // Adjusted for mobile responsiveness
        items={links}
      />
    </div>
  );
}
