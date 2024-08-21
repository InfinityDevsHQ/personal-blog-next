"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import NavLogo from "../svg/logos/logo-svg";
import CloseSvg from "../svg/icons/close-svg";
import MenuSvg from "../svg/icons/menu-svg";

const NavLinks = ["HOME", "BLOGS"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="text-primary bg-backgroundPrimary">
      <div
        className={`w-full mx-auto px-4 py-4 md:py-8 lg:py-5 lg:px-12 ${
          isScrolling
            ? "fixed top-0 z-50 shadow-lg bg-backgroundPrimary/90"
            : " p-4 md:block md:pr-0"
        } ${isOpen ? "h-dvh md:h-auto bg-inverted/90" : ""}`}
      >
        <div className="mx-auto">
          <div className="mx-auto flex justify-between items-center">
            {/* logo  */}
            <div className="text-2xl font-bold">
              <NavLogo />
            </div>
            {/* Desktop */}
            <nav>
              <ul className="hidden md:flex gap-12 px-4">
                {NavLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-primary pb-1 flex hover:underline items-center justify-center gap-3 font-bold text-xs uppercase"
                    >
                      <span>{link}</span>
                    </Link>
                  </li>
                ))}
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
          <div
            className={`w-full md:hidden pt-6 ${isOpen ? "flex" : "hidden"}`}
          >
            <ul className="flex flex-col pl-8 pt-12 gap-12 justify-center">
              {["Home", "Blogs", "Contact"].map((link, index) => (
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
      </div>
    </header>
  );
}
