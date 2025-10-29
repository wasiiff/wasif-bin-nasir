"use client";
import { useState } from "react";
import { Github, ExternalLink, Code2, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 top-1/4 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-1/4 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl p-8 mx-auto flex flex-col justify-center w-full min-h-screen py-20">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              About Me
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Description */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Code2 size={24} />
                Who I Am
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate MERN Stack Developer and BS Computer Science graduate 
                specializing in building dynamic, scalable, and AI-integrated web applications. 
                With professional experience at Netixsol and CSoft Systems, I excel at creating 
                full-stack solutions using React.js, Next.js, and Nest.js. I'm driven by the 
                challenge of integrating cutting-edge technologies like LangChain, LangGraph, 
                and blockchain to deliver exceptional user experiences that push the boundaries 
                of what's possible.
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30">
                <div className="text-3xl font-bold text-cyan-400 mb-1">2021-2025</div>
                <div className="text-gray-400 text-sm">BS Computer Science</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-1">MERN</div>
                <div className="text-gray-400 text-sm">Stack Developer</div>
              </div>
            </div>
          </div>

          {/* Right Column - Journey & Skills */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">My Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey began at The University of Faisalabad, where I developed a 
                strong foundation in computer science. As a MERN Stack Developer at Netixsol, 
                I architected scalable applications and pioneered agentic AI workflows with 
                LangChain and LangGraph. Previously at CSoft Systems, I increased client 
                productivity by 30% through optimized React.js solutions. Beyond coding, 
                I've served as Head Class Representative for 1200+ students and led IT 
                operations for TUFMUN'24, combining technical expertise with leadership.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js", 
                  "Next.js", 
                  "Node.js", 
                  "Nest.js", 
                  "MongoDB", 
                  "LangChain", 
                  "LangGraph", 
                  "TypeScript", 
                  "Tailwind CSS", 
                  "REST APIs", 
                  "Solidity", 
                  "AI Integration"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;