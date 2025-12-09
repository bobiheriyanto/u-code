"use client";
import React from "react";
import { cn } from "@/lib/utils";

const LoadingAnimation = () => {
  return (
    <div className="min-h-[130vh] w-full flex flex-col items-center justify-center bg-transparent">
      {/* Main Loader Container */}
      <div className="relative w-32 h-32 mb-8">
        {/* Outer rotating circle */}
        <div
          className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"
          style={{
            animation: "spin 2s linear infinite",
          }}
        />

        {/* Middle rotating circle (opposite direction) */}
        <div
          className="absolute inset-2 border-4 border-transparent border-b-pink-500 border-l-cyan-500 rounded-full animate-spin"
          style={{
            animation: "spin 3s linear reverse infinite",
          }}
        />

        {/* Inner pulsing circle */}
        <div className="absolute inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
      </div>

      {/* Text with animation */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Projects Coming Soon
        </h3>

        {/* Animated dots */}
        <div className="flex justify-center items-center gap-2 h-8">
          <span
            className="w-2 h-2 bg-blue-500 rounded-full"
            style={{
              animation: "bounce 1.4s infinite",
            }}
          />
          <span
            className="w-2 h-2 bg-purple-500 rounded-full"
            style={{
              animation: "bounce 1.4s infinite 0.2s",
            }}
          />
          <span
            className="w-2 h-2 bg-pink-500 rounded-full"
            style={{
              animation: "bounce 1.4s infinite 0.4s",
            }}
          />
        </div>

        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          Showcasing our amazing projects...
        </p>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-50"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `float 4s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
