"use client";

import { useEffect, useRef, useState } from "react";

function BgVideo() {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            setIsLoaded(true);
            video.play().catch(() => {});
        };

        video.addEventListener("canplay", handleCanPlay);
        
        if (video.readyState >= 3) {
            handleCanPlay();
        }

        return () => {
            video.removeEventListener("canplay", handleCanPlay);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/fundo.png"
                className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
                <source src="/speedmetter.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
    );
}

export default BgVideo;
