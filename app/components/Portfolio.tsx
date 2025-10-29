"use client";

import Image from "next/image";
import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
}

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const portfolios: PortfolioItem[] = [
    {
      id: 1,
      title: "AutoGrader",
      description:
        "AI-powered assignment evaluation system that automates grading for teacher-uploaded student assignments with intelligent analysis and CSV export functionality.",
      image: "/assets/AutoGrader.png",
      tags: ["Next.js", "Nest.js", "MongoDB", "LangChain", "OpenAI"],
      demoLink: "https://auto-grader-gui.vercel.app/",
      repoLink: "https://github.com/wasiiff/Auto-Grader",
    },
    {
      id: 2,
      title: "CareerCraft",
      description:
        "Full-stack resume builder with real-time preview and instant export to PDF/DOCX formats, designed for responsiveness across all devices.",
      image: "/assets/CareerCraft.png",
      tags: ["Next.js", "TypeScript", "Nest.js", "MongoDB"],
      demoLink: "https://career-craft-client-beta.vercel.app/",
      repoLink: "https://github.com/wasiiff/CareerCraft",
    },
    {
      id: 3,
      title: "SHOP.CO",
      description:
        "Complete e-commerce platform featuring secure Stripe payments, an admin dashboard, OAuth 2.0 authentication, and advanced product filtering.",
      image: "/assets/SHOPCO.png",
      tags: ["Next.js", "Nest.js", "MongoDB", "Stripe", "OAuth"],
      demoLink: "https://clientgui.vercel.app/",
      repoLink: "https://github.com/wasiiff/Ecom_Client",
    },
    {
      id: 4,
      title: "Cric-Stats-Break",
      description:
        "AI-driven cricket analytics platform using LangChain and Gemini model for conversational querying and contextual insights.",
      image: "/assets/Cric-Stats-Break.png",
      tags: ["Next.js", "Nest.js", "LangChain", "Gemini API"],
      demoLink: "https://cric-stat-ai-ui.vercel.app/",
      repoLink: "https://github.com/wasiiff/Stats-Break",
    },
  ];

  return (
    <div
      id="portfolio"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#020617] to-black text-white overflow-hidden"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.05),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(0,102,255,0.05),transparent_60%)] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Selected Works
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A collection of projects showcasing full-stack development, AI
            integration, and modern web technologies.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-12">
          {portfolios.map(
            (
              { id, title, description, image, tags, demoLink, repoLink },
              index
            ) => (
              <div
                key={id}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 border border-cyan-900/30 shadow-lg shadow-cyan-900/20">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>

                  {/* Floating Number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-cyan-500/30">
                    {String(id).padStart(2, "0")}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                      View Project
                      <ArrowUpRight
                        size={18}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                      />
                    </a>
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
