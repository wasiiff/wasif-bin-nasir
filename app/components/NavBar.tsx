"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [navExpanded, setNavExpanded] = useState(false);

  const links = [
    { id: 1, to: "home", label: "Home" },
    { id: 2, to: "about", label: "About" },
    { id: 3, to: "skills", label: "Skills" },
    { id: 4, to: "portfolio", label: "Projects" },
    { id: 5, to: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Bottom Sticky */}
      <div className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div
          className={`bg-black/30 backdrop-blur-xl px-3 py-2 flex justify-center items-center rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 transition-all duration-300 ${
            navExpanded ? "gap-x-3" : "gap-x-0"
          }`}
        >
          {/* Toggle Button */}
          <button
            className="relative w-14 h-14 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl flex justify-center items-center font-bold text-white text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            onClick={() => setNavExpanded(!navExpanded)}
            aria-label={navExpanded ? "Collapse menu" : "Expand menu"}
          >
            <span className="relative z-10">W.</span>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Navigation Links */}
          <div
            className={`transition-all duration-300 ease-in-out flex justify-center items-center overflow-hidden h-14 bg-black/20 rounded-xl ${
              navExpanded ? "w-auto px-4 gap-x-4" : "w-0 px-0"
            }`}
          >
            {links.map(({ id, to, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(to)}
                className="relative text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30 whitespace-nowrap group"
              >
                {label}
                {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span> */}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Top Fixed */}
      <nav className="md:hidden w-full top-0 z-50 bg-black/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="relative">
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Wasif Bin Nasir
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavExpanded(!navExpanded)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300"
              aria-label={navExpanded ? "Close menu" : "Open menu"}
            >
              {navExpanded ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-black/98 backdrop-blur-xl border-t border-cyan-500/20 ${
            navExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-4 py-4 space-y-2">
            {links.map(({ id, to, label }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollToSection(to);
                    setNavExpanded(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 font-medium rounded-lg transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500 hover:text-white hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}