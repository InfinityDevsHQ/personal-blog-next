"use client";
import { useState } from "react";
import NavLogo from "../svg/logos/logo-svg";
import CloseSvg from "../svg/icons/close-svg";
import MenuSvg from "../svg/icons/menu-svg";
import Link from "next/link";

const NavLinks = ["HOME", "BLOGS"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-primary bg-backgroundPrimary">
      <div className="px-4 py-4 md:py-8 max-w-7xl mx-auto">
        <div className="mx-auto flex justify-between items-center">
          {/* logo  */}
          <div className="text-2xl font-bold">
            <NavLogo />
          </div>
          {/* Desktop */}
          <nav>
            <ul className="hidden md:flex gap-10">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-primary pb-1 flex hover:underline items-center justify-center gap-3 font-bold text-xs uppercase"
                  >
                    <span>{link}</span>
                    {/* <DiamondSvg /> */}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="mt-5 md:mt-0"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <CloseSvg className="size-5" />
                  ) : (
                    <MenuSvg className="size-5" />
                  )}
                </button>
              </li>
            </ul>
            <button
              className="mt-5 md:mt-0 md:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <CloseSvg className="size-5" />
              ) : (
                <MenuSvg className="size-5" />
              )}
            </button>
          </nav>
        </div>
        {/* Mobile Nav */}
        <div className={`w-full pt-6 ${isOpen ? "flex" : "hidden"}`}>
          <ul className="flex flex-col pl-8 gap-4 justify-center">
            {["Home", "About", "Contact"].map((link, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="relative mb-1.5 hover:underline pb-1 text-sm font-medium uppercase hover:text-inverted transition duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
