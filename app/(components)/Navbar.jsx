"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GiAbstract096 } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="Navbar" className="py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <GiAbstract096 className="text-3xl" />
            </Link>

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-xl font-medium"
            >
              Rakibs Website
            </Link>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[18px] font-normal font-mon"
            >
              Home
            </Link>

            <Link
              href="/pages/about"
              className="text-[18px] font-normal font-mon"
            >
              About
            </Link>

            <Link
              href="/pages/contact"
              className="text-[18px] font-normal font-mon"
            >
              Contact
            </Link>

            <Link
              href="/pages/more"
              className="text-[18px] font-normal font-mon"
            >
              More..
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 px-4">
            <div className="flex flex-col items-center gap-5 py-5 border-t border-gray-200">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-[18px] font-normal font-mon"
              >
                Home
              </Link>

              <Link
                href="/pages/about"
                onClick={() => setMenuOpen(false)}
                className="text-[18px] font-normal font-mon"
              >
                About
              </Link>

              <Link
                href="/pages/contact"
                onClick={() => setMenuOpen(false)}
                className="text-[18px] font-normal font-mon"
              >
                Contact
              </Link>

              <Link
                href="/pages/more"
                onClick={() => setMenuOpen(false)}
                className="text-[18px] font-normal font-mon"
              >
                More..
              </Link>

            </div>
          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;