"use client";

import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton";
import { DesktopMenu } from "./DesktopMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            <DesktopMenu />
          </div>
          <div className="flex -mr-2 md:hidden">
            <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
}
