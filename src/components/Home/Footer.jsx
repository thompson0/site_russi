import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-10">
      <Separator className="mb-6" />

      <div className="w-full flex items-center justify-center py-6 px-4">
        <p className="text-sm text-muted-foreground text-center">
          © {year} <span className="font-medium">Russi Acessórios</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
