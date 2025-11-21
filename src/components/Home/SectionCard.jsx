import cn from "classnames";

export default function SectionCard({
  titulo,
  texto,
  align = "left",
  variant = "light",
  children,
}) {
  return (
    <section
      className={cn(
        "relative w-screen left-1/2 -translate-x-1/2 py-10 transition-colors",
        variant === "light" && "bg-background text-foreground",
        variant === "dark" && "bg-foreground text-background"
      )}
    >
      <div
        className={cn(
          "w-full mx-auto flex flex-col gap-4 px-6",

          align === "left" && "items-start text-left",
          align === "right" && "items-end text-right",
          align === "center" && "items-center text-center"
        )}
      >
        {titulo && (
          <h2 className="text-3xl font-semibold leading-tight">{titulo}</h2>
        )}

        {texto && (
          <p className="text-base whitespace-pre-line opacity-90">{texto}</p>
        )}

        {children}
      </div>
    </section>
  );
}
