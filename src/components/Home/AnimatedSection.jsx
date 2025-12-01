"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fadeUp",
  delay = 0,
  threshold = 0.2 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, transform: "translateY(40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    fadeDown: {
      hidden: { opacity: 0, transform: "translateY(-40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    fadeLeft: {
      hidden: { opacity: 0, transform: "translateX(-40px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    fadeRight: {
      hidden: { opacity: 0, transform: "translateX(40px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    scale: {
      hidden: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    rotate: {
      hidden: { opacity: 0, transform: "rotate(-5deg) scale(0.95)" },
      visible: { opacity: 1, transform: "rotate(0) scale(1)" },
    },
  };

  const currentAnimation = animations[animation] || animations.fadeUp;
  const style = isVisible ? currentAnimation.visible : currentAnimation.hidden;

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        ...style,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
