"use client";

import { useState } from "react";
import { Code2, Database, Cloud, Cpu, Layers } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Skills", icon: Layers },
    { id: "frontend", name: "Frontend", icon: Code2 },
    { id: "backend", name: "Backend", icon: Database },
    { id: "ai", name: "AI & Blockchain", icon: Cpu },
    { id: "tools", name: "Tools", icon: Cloud },
  ];

  const techs = [
    // Frontend
    {
      id: 1,
      title: "HTML5",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      id: 2,
      title: "CSS3",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      id: 3,
      title: "Tailwind CSS",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
    },
    {
      id: 4,
      title: "JavaScript",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      id: 5,
      title: "TypeScript",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      id: 6,
      title: "React.js",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      id: 7,
      title: "Next.js",
      category: "frontend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      color: "#000000",
      // invert: true,
    },

    // Backend
    {
      id: 8,
      title: "Node.js",
      category: "backend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      id: 9,
      title: "Express.js",
      category: "backend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      color: "#000000",
      invert: true,
    },
    {
      id: 10,
      title: "Nest.js",
      category: "backend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      color: "#E0234E",
    },
    {
      id: 11,
      title: "MongoDB",
      category: "backend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      id: 12,
      title: "Mongoose",
      category: "backend",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
      color: "#880000",
    },
    // AI & Blockchain
    {
      id: 13,
      title: "LangChain",
      category: "ai",
      level: "Intermediate",
      icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
      color: "#1C3C3C",
    },
    {
      id: 14,
      title: "LangGraph",
      category: "ai",
      level: "Intermediate",
      icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
      color: "#1C3C3C",
    },
    {
      id: 15,
      title: "Solidity",
      category: "ai",
      level: "Biginner",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      color: "#ffffff",
    },
    // Tools
    {
      id: 16,
      title: "Git",
      category: "tools",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      id: 17,
      title: "GitHub",
      category: "tools",
      level: "Advanced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      color: "#181717",
      invert: true,
    },
    {
      id: 18,
      title: "Vercel",
      category: "tools",
      level: "Advanced",
      icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      color: "#000000",
      // invert: true,
    },
  ];

  const filteredTechs =
    activeCategory === "all"
      ? techs
      : techs.filter((tech) => tech.category === activeCategory);

  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto p-8 flex flex-col justify-center w-full min-h-screen py-20">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code2 className="text-cyan-400" size={36} />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Technical Skills
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Technologies I use to build scalable and intelligent applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-gray-800/80 text-gray-400 hover:bg-gray-700/80 hover:text-white border border-gray-700/50"
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 sm:px-0">
          {filteredTechs.map(({ id, title, level, icon, color, invert }) => (
            <div
              key={id}
              className="group relative bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/60"
            >
              {/* Icon Container */}
              <div className="relative mb-4 flex justify-center">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-lg p-2 transition-all duration-300"
                  style={{
                    backgroundColor: `${color}15`,
                  }}
                >
                  <img
                    src={icon}
                    alt={title}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                      invert ? "brightness-0 invert" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-white text-center mb-2">
                {title}
              </h3>

              {/* Level Badge */}
              <div className="flex justify-center">
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full text-white"
                  style={{
                    backgroundColor: `${color}40`,
                    border: `1px solid ${color}60`,
                  }}
                >
                  {level}
                </span>
              </div>

              {/* Accent Line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  backgroundColor: color,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/40 p-6 rounded-xl border border-cyan-500/20 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-cyan-400 mb-2">7</div>
            <div className="text-gray-400 text-sm font-medium">Frontend</div>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-green-500/20 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-green-400 mb-2">5</div>
            <div className="text-gray-400 text-sm font-medium">Backend</div>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-purple-500/20 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
            <div className="text-gray-400 text-sm font-medium">
              AI & Blockchain
            </div>
          </div>
          <div className="bg-gray-800/40 p-6 rounded-xl border border-orange-500/20 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
            <div className="text-gray-400 text-sm font-medium">Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
