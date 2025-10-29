"use client";

import { useState } from "react";
import { Share2, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDribbble, FaXTwitter, FaGlobe, FaEnvelope } from "react-icons/fa6";

type Platform =
  | "linkedin"
  | "instagram"
  | "github"
  | "mail"
  | "facebook"
  | "x"
  | "dribbble"
  | "website";

interface SocialLink {
  platform: Platform;
  href: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  showOnMobile?: boolean;
  /** Custom color for the floating button (e.g., "green-300", "#00ff00", "rgb(0,255,0)") */
  floatingButtonColor?: string;
}

const PLATFORM_STYLES: Record<
  Platform,
  { label: string; icon: any; gradient: string; hoverGradient: string; color: string }
> = {
  linkedin: {
    label: "LinkedIn",
    icon: FaLinkedin,
    gradient: "from-blue-600 to-blue-400",
    hoverGradient: "from-blue-500 to-blue-300",
    color: "#0077B5",
  },
  instagram: {
    label: "Instagram",
    icon: FaInstagram,
    gradient: "from-pink-600 via-purple-600 to-orange-500",
    hoverGradient: "from-pink-500 via-purple-500 to-orange-400",
    color: "#E4405F",
  },
  github: {
    label: "GitHub",
    icon: FaGithub,
    gradient: "from-gray-800 to-gray-600",
    hoverGradient: "from-gray-700 to-gray-500",
    color: "#333333",
  },
  mail: {
    label: "Mail",
    icon: FaEnvelope,
    gradient: "from-cyan-600 to-blue-500",
    hoverGradient: "from-cyan-500 to-blue-400",
    color: "#0891B2",
  },
  facebook: {
    label: "Facebook",
    icon: FaFacebook,
    gradient: "from-blue-700 to-blue-500",
    hoverGradient: "from-blue-600 to-blue-400",
    color: "#1877F2",
  },
  x: {
    label: "X",
    icon: FaXTwitter,
    gradient: "from-gray-900 to-gray-700",
    hoverGradient: "from-gray-800 to-gray-600",
    color: "#000000",
  },
  dribbble: {
    label: "Dribbble",
    icon: FaDribbble,
    gradient: "from-pink-600 to-pink-400",
    hoverGradient: "from-pink-500 to-pink-300",
    color: "#EA4C89",
  },
  website: {
    label: "Website",
    icon: FaGlobe,
    gradient: "from-emerald-600 to-teal-500",
    hoverGradient: "from-emerald-500 to-teal-400",
    color: "#10B981",
  },
};

const SocialLinks = ({
  links,
  showOnMobile = true,
  floatingButtonColor = "slate-700", // Default fallback
}: SocialLinksProps) => {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const [mobileDockOpen, setMobileDockOpen] = useState(false);

  // Detect if color is a Tailwind class or raw CSS color
  const isTailwindColor =
    /^[a-z]+(-\d{2,3})?$/.test(floatingButtonColor) && !floatingButtonColor.startsWith("#") && !floatingButtonColor.startsWith("rgb");

  // Build Tailwind background class dynamically if possible
  const tailwindBg = isTailwindColor ? `bg-${floatingButtonColor}` : "";
  const inlineStyle = !isTailwindColor
    ? { backgroundColor: floatingButtonColor }
    : {};

  return (
    <>
      {/* Desktop View - Left Side */}
      <div
        className={`${
          showOnMobile ? "hidden lg:flex" : "hidden md:flex"
        } flex-col top-[35%] left-0 fixed z-40`}
      >
        <ul className="space-y-3">
          {links.map(({ platform, href }) => {
            const style = PLATFORM_STYLES[platform];
            if (!style) return null;
            const Icon = style.icon;

            return (
              <li
                key={platform}
                onMouseEnter={() => setHoveredPlatform(platform)}
                onMouseLeave={() => setHoveredPlatform(null)}
                className="group"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-44 h-14 px-4 ml-[-120px] 
                             group-hover:ml-[-10px] transition-all duration-500 ease-out
                             rounded-r-xl backdrop-blur-sm relative overflow-hidden
                             shadow-lg group-hover:shadow-2xl"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      hoveredPlatform === platform
                        ? style.hoverGradient
                        : style.gradient
                    } transition-all duration-500 opacity-95`}
                  />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </div>
                  <span className="relative text-white font-bold tracking-wider text-sm z-10 
                                   drop-shadow-md group-hover:tracking-widest transition-all duration-300">
                    {style.label}
                  </span>
                  <Icon
                    size={26}
                    className="relative text-white z-10 drop-shadow-md
                               group-hover:scale-125 group-hover:rotate-12 
                               transition-all duration-500"
                    strokeWidth={2.5}
                  />
                  <div className="absolute inset-0 rounded-r-xl border border-white/20 pointer-events-none" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile View */}
      {showOnMobile && (
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          {mobileDockOpen && (
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileDockOpen(false)}
            />
          )}
          <div className="relative">
            {/* Floating Menu Icons */}
            <div
              className={`absolute bottom-20 right-0 flex flex-col-reverse gap-3 transition-all duration-500 ${
                mobileDockOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              {links.map(({ platform, href }, index) => {
                const style = PLATFORM_STYLES[platform];
                if (!style) return null;
                const Icon = style.icon;
                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative ml-auto"
                    style={{
                      transitionDelay: mobileDockOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${style.gradient} 
                                 flex items-center justify-center shadow-lg
                                 active:scale-95 hover:scale-110 transition-all duration-300
                                 border-2 border-white/30`}
                    >
                      <Icon size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-16
                                    bg-gray-900/95 text-white text-xs font-semibold 
                                    px-3 py-2 rounded-lg whitespace-nowrap
                                    opacity-0 group-hover:opacity-100 transition-opacity
                                    pointer-events-none backdrop-blur-sm">
                      {style.label}
                      <div className="absolute top-1/2 -translate-y-1/2 -right-1
                                      w-2 h-2 bg-gray-900/95 rotate-45" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Main Floating Button */}
            <button
              onClick={() => setMobileDockOpen(!mobileDockOpen)}
              className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl active:scale-95 
                         transition-all duration-300 border-2 border-slate-600/50 overflow-hidden group 
                         ${tailwindBg}`}
              style={inlineStyle}
              aria-label="Toggle social links"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/30 to-slate-800/30
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div
                  className={`transition-all duration-300 ${
                    mobileDockOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"
                  }`}
                >
                  {mobileDockOpen ? (
                    <X size={24} className="text-white" strokeWidth={2.5} />
                  ) : (
                    <Share2 size={24} className="text-white" strokeWidth={2.5} />
                  )}
                </div>
              </div>
              <div className="absolute inset-0 rounded-full blur-lg bg-slate-500/30
                              group-hover:bg-slate-400/40 transition-all duration-300 -z-10" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
