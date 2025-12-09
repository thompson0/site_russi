"use client";

import FuturisticBackground from "./FuturisticBackground";

export default function BgVideo() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-slate-900">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[177.78vh] min-h-[56.25vw]">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Im_fXpxm90E?autoplay=1&mute=1&loop=1&playlist=Im_fXpxm90E&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&cc_load_policy=0&hl=pt"
            title="Background Video"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
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
