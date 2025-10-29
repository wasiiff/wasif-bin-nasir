"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-400 border-t border-gray-800">
      {/* Glowing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-24 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-0 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col items-center text-center space-y-6">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/wasiiff"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500">
              <Github
                size={22}
                className="text-gray-400 group-hover:text-cyan-400 transition-colors"
              />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/wasif-bin-nasir"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500">
              <Linkedin
                size={22}
                className="text-gray-400 group-hover:text-blue-400 transition-colors"
              />
            </div>
          </a>
          <a
            href="mailto:wasifgee0012@gmail.com"
            className="group"
          >
            <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-500">
              <Mail
                size={22}
                className="text-gray-400 group-hover:text-purple-400 transition-colors"
              />
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          Made with{" "}
          <Heart size={14} className="inline text-red-500 animate-pulse mx-1" />
          by <span className="text-cyan-400 font-medium">Wasif</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
