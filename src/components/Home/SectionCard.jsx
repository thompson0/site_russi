import Image from "next/image";
import cn from "classnames";

export default function SectionCard({
  titulo,
  texto,
  align = "left",
  variant = "light",
  sectionWidth = "full",
  image = null,
  imagePosition = "right",
  imageWidth = "md",
  children,
}) {
  const sectionWidthMap = {
    full: "w-full",
    boxed: "max-w-6xl mx-auto w-full",
    medium: "max-w-4xl mx-auto w-full",
    small: "max-w-2xl mx-auto w-full",
  };

  const imageWidthMap = {
    sm: "w-40 h-40",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    full: "w-full h-auto",
  };

  return (
    <section
      className={cn(
        sectionWidthMap[sectionWidth] || sectionWidthMap.full,
        "py-10 transition-colors ",

        variant === "light" && "bg-background text-foreground",
        variant === "dark" && "bg-primary text-background"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-8 px-6 w-full max-w-6xl mx-auto",


          align === "left" && "items-start text-left",
          align === "right" && "items-end text-right",
          align === "center" && "items-center text-center",


          (imagePosition === "left" || imagePosition === "right") &&
          "lg:flex-row",
          imagePosition === "right" && "lg:flex-row-reverse"
        )}
      >

        <div className="flex-1 flex flex-col gap-4">
          {titulo && (
            <h2 className="text-3xl font-semibold leading-tight">{titulo}</h2>
          )}

          {texto && (
            <p className="text-base whitespace-pre-line opacity-90 leading-relaxed max-w-4xl">
              {texto}
            </p>
          )}

          {children}
        </div>


        {image && (
          <div
            className={cn(
              "relative flex justify-center items-center overflow-hidden",
              imageWidthMap[imageWidth] || imageWidthMap.md,
              imagePosition === "top" && "order-first",
              imagePosition === "bottom" && "order-last"
            )}
          >
            <Image
              src={image}
              alt={titulo || "section image"}
              fill
              className="object-contain rounded-3xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
