"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import PopulationFilter from "./PopulationFilter";
import { useContinents } from "@/lib/queries/useContinents";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const { data: continents } = useContinents();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuList = () => (
    <>
      <Link
        href="/"
        className={`rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/"
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        World
      </Link>
      {continents.map((continent) => (
        <Link
          key={continent}
          href={`/continente/${continent.toLowerCase()}`}
          className={`rounded-md px-3 py-2 text-sm font-medium ${
            pathname === `/continente/${continent.toLowerCase()}`
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {continent}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="shrink-0">
              <Image
                src="/images/SDG-logo-white.png"
                alt="SDG Group Logo"
                width={120}
                height={50}
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <MenuList />
                <PopulationFilter />
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} size-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MenuList />
          <PopulationFilter />
        </div>
      </div>
    </nav>
  );
}
