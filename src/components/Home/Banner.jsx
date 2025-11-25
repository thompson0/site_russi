"use client";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom';

import cn from "classnames";


export default function Banner({
  titulo = "",
  descricao = "",
  badge1 = "—",
  badge2 = "—",
  buttonPrimary = "Ação",
  buttonSecondary = "Secundário",
  image = "/banner.jpeg",
  variant = "light", 
}) {
  return (
    <section
      className={cn(
        "w-full py-10 px-4 sm:px-6 lg:px-8 transition-colors",
        variant === "light" && "bg-background text-foreground",
        variant === "dark" && "bg-[var(--background-dark)] text-[var(--foreground-dark)]"
      )}
    >
      <Card className="overflow-hidden border border-border bg-card shadow-sm">
        <div className="grid gap-8 lg:grid-cols-2">

          <CardContent className="flex flex-col gap-6 p-6 sm:p-10">


            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="secondary"
                className="border border-primary/20 bg-primary/10 text-primary"
              >
                {badge1}
              </Badge>

              <Badge variant="outline" className="border-dashed">
                {badge2}
              </Badge>
            </div>

            <div className="flex flex-col gap-3">
              {titulo && (
                <CardTitle className="text-3xl sm:text-4xl font-semibold leading-tight">
                  {titulo}
                </CardTitle>
              )}

              {descricao && (
                <CardDescription className="text-base">
                  {descricao}
                </CardDescription>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="flex items-center gap-2">
                {buttonPrimary} <ArrowRight size={16} />
              </Button>

              <Button size="lg" variant="outline">
                {buttonSecondary}
              </Button>
            </div>
          </CardContent>

          <CardContent className="p-0">
            <div className="relative h-64 sm:h-72 lg:h-[24rem]">
           
                
              <Image
                src={image}
                alt={titulo || "Imagem da seção"}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
             
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
