"use client";

import { useRef, useEffect } from "react";
import FuturisticBackground from "./FuturisticBackground";

export default function BgVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-slate-900">
      {/* Local Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/api/video" type="video/mp4" />
          <source src="/speedmetter.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-900/65 to-slate-800/55 z-[1]" />
      
      {/* FuturisticBackground */}
      <div className="absolute inset-0 z-[2]">
        <FuturisticBackground />
      </div>
    </div>
  );
}
