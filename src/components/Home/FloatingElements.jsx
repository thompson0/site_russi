"use client";

import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-4 h-4 bg-blue-500/20 rounded-full blur-sm"
        style={{
          top: "20%",
          left: "10%",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute w-6 h-6 bg-indigo-500/15 rounded-full blur-sm"
        style={{
          top: "40%",
          right: "15%",
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      />
      <div
        className="absolute w-3 h-3 bg-purple-500/20 rounded-full blur-sm"
        style={{
          top: "60%",
          left: "20%",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      <div
        className="absolute w-5 h-5 bg-blue-400/15 rounded-full blur-sm"
        style={{
          top: "80%",
          right: "25%",
          transform: `translateY(${scrollY * -0.12}px)`,
        }}
      />
      <div
        className="absolute w-8 h-8 border border-blue-500/10 rounded-full"
        style={{
          top: "30%",
          right: "10%",
          transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.1}deg)`,
        }}
      />
      <div
        className="absolute w-12 h-12 border border-indigo-500/10 rounded-full"
        style={{
          top: "70%",
          left: "5%",
          transform: `translateY(${scrollY * -0.08}px) rotate(${scrollY * -0.1}deg)`,
        }}
      />
    </div>
  );
}
