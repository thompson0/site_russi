"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DarkMode } from "./Darkmode";
import { PlayCircleIcon, Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

function NavHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo_index.png"
              alt="Russi Acessórios"
              width={100}
              height={100}
              className=""
            />
            <div className="hidden sm:block">
              <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"
                }`}>
                Russi Acessórios
              </span>
              <p className={`text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/70"
                }`}>
                Desde 1986
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <DarkMode />

            <Link href="/sac">
              <Button
                variant="ghost"
                className={`flex gap-2 items-center transition-colors ${isScrolled
                    ? "text-foreground hover:bg-accent"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                SAC
              </Button>
            </Link>

            <Link href="/visitante/videos">
              <Button
                variant="ghost"
                className={`flex gap-2 items-center transition-colors ${isScrolled
                    ? "text-foreground hover:bg-accent"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                <PlayCircleIcon className="w-5 h-5" />
                Vídeos
              </Button>
            </Link>

            <Link href="/login">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                Entrar
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Bars3Icon className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border py-4 px-2 space-y-2">
            <Link href="/sac" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start gap-2 text-foreground">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                SAC
              </Button>
            </Link>
            <Link href="/visitante/videos" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start gap-2 text-foreground">
                <PlayCircleIcon className="w-5 h-5" />
                Vídeos
              </Button>
            </Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Entrar</Button>
            </Link>
            <div className="pt-2 border-t border-border">
              <DarkMode />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavHome;
