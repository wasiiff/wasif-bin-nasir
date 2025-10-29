"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-black relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]"></div>

      {/* Floating Orbs with Parallax */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute w-[500px] h-[500px] top-[-10%] left-[-5%] bg-cyan-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] top-[20%] right-[-10%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[300px] h-[300px] bottom-[10%] left-[20%] bg-purple-600/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text Section */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Muhammad Wasif
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Bin Nasir
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xl sm:text-2xl lg:text-3xl font-semibold">
                <span className="text-gray-300">MERN Stack</span>
                <span className="text-cyan-400">•</span>
                <span className="text-gray-300">Agentic AI Developer</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a passionate{" "}
              <span className="text-cyan-400 font-semibold">
                MERN Stack Developer
              </span>{" "}
              specializing in creating dynamic, scalable, and AI-integrated web
              applications using{" "}
              <span className="text-cyan-400">
                React.js, Next.js, and Nest.js
              </span>
              . I enjoy blending technology with creativity to build exceptional
              user experiences — from intelligent Agentic workflows using{" "}
              <span className="text-blue-400">LangChain</span> and{" "}
              <span className="text-blue-400">LangGraph</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 hover:cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Location & Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">Faisalabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-gradient"></div>
              
              {/* Hexagon Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
              </div>

              {/* Image Container */}
              <div className="relative">
                <div
                  className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${
                    imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src="/assets/wasif.jpg"
                    alt="Muhammad Wasif Bin Nasir - MERN Stack & AI Developer"
                    width={400}
                    height={400}
                    onLoad={() => setImageLoaded(true)}
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 rounded-3xl mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 rounded-3xl"></div>
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-sm">Available for freelance work</span>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;