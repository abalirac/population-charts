"use client";

import Image from "next/image";
import MobileMenu from "./MobileMenu";
import PopulationFilter from "./PopulationFilter";
import { useContinents } from "@/lib/queries/useContinents";
import MenuList from "./MenuList";

export default function Navbar() {
  const { data: continents = [] } = useContinents();

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
                <MenuList continents={continents} />
                <PopulationFilter />
              </div>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <MobileMenu continents={continents} />
          </div>
        </div>
      </div>
    </nav>
  );
}
