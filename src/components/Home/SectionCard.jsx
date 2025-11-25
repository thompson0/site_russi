import cn from "classnames";

export default function SectionCard({
  titulo,
  texto,
  align = "left",
  variant = "light",
  sectionWidth = "full", 
  children,
}) {

  const sectionWidthMap = {
    full: "w-full",                          
    boxed: "max-w-6xl mx-auto w-full",       
    medium: "max-w-4xl mx-auto w-full",
    small: "max-w-2xl mx-auto w-full",
  };

  return (
    <section
      className={cn(
        sectionWidthMap[sectionWidth] || sectionWidthMap.full, 
        "py-10 transition-colors rounded-2xl",

        variant === "light" && "bg-background text-foreground",
        variant === "dark" && "bg-primary text-background"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4 px-6",

          align === "left" && "items-start text-left",
          align === "right" && "items-end text-right",
          align === "center" && "items-center text-center"
        )}
      >
        {titulo && (
          <h2 className="text-3xl font-semibold leading-tight">{titulo}</h2>
        )}

        {texto && (
          <p className="text-base whitespace-pre-line opacity-90">
            {texto}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
