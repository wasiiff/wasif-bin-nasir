"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (progress === 100) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-700">
      {/* Subtle glowing background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[400px] h-[400px] top-[20%] left-[-10%] bg-cyan-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bottom-[10%] right-[-5%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      {/* Center box */}
      <div className="relative z-10 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-10 shadow-2xl shadow-cyan-500/10 text-center">
        {/* Logo / Initial */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
          WELCOME
        </h1>

        {/* Progress ring */}
        <div className="relative w-28 h-28 mx-auto mb-6">
          <svg className="transform -rotate-90 w-28 h-28">
            <circle
              cx="56"
              cy="56"
              r="48"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="56"
              cy="56"
              r="48"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 48}`}
              strokeDashoffset={`${2 * Math.PI * 48 * (1 - progress / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
            {progress}%
          </div>
        </div>

        {/* Loading bar */}
        <div className="relative w-56 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-gray-400 text-sm">Loading your experience...</p>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
