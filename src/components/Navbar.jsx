import React, { useState } from "react";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`navbar sticky top-0 z-50 max-w-7xl mx-auto text-[#3A4454]`}
    >
      <div className="flex-1">
        <a
          href="#"
          className="btn btn-ghost normal-case text-xl font-lato"
          style={{ color: "#00BDAA" }}
        >
          Nayem
        </a>
      </div>

      <div className="flex-none">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal text-lg px-1 hidden md:flex space-x-6 items-center">
          <li>
            <a href="#home" className="hover:text-[#6B4E71] text-[#00BDAA]">
              Home
            </a>
          </li>

          <li className="cursor-pointer hover:text-[#6B4E71]">Portfolio</li>

          <li>
            <a href="#about" className="hover:text-[#6B4E71]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#6B4E71]">
              Contact
            </a>
          </li>
          <div className="">
            <ResumeButton></ResumeButton>
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          {menuOpen && (
            <ul
              className={`menu menu-compact p-2 shadow rounded-box mt-2 bg-[#F5DDDD] text-[#3A4454]`}
            >
              <li>
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#00BDAA]"
                >
                  Home
                </a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Portfolio</summary>
                </details>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
