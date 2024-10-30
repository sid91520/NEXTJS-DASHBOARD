"use client";
import React, { useState } from "react";
import AcmeLogo from "./acme-logo";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // State to track the active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link); // Update the active link
    if (isOpen) {
      toggleMenu(); // Close the menu if it's open on mobile
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex mx-auto justify-evenly items-center">
        <div className="flex h-10 shrink-0 items-center rounded-lg p-4 md:h-10">
          <AcmeLogo />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`text-gray-300 hover:text-white ${activeLink === "/" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-gray-300 hover:text-white ${activeLink === "/dashboard" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/dashboard")}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className={`text-gray-300 hover:text-white ${activeLink === "/about" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-gray-300 hover:text-white ${activeLink === "/contact" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="/"
            className={`text-gray-300 hover:text-white ${activeLink === "/" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-gray-300 hover:text-white ${activeLink === "/dashboard" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/dashboard")}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className={`text-gray-300 hover:text-white ${activeLink === "/about" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-gray-300 hover:text-white ${activeLink === "/contact" ? "underline" : ""}`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
