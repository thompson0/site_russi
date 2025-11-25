import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CardsHome({ titulo, texto, destaque = "Diferencial" }) {
  return (
    <Card className="group relative w-full max-w-sm h-72 overflow-hidden flex flex-col">

      <CardHeader className="relative z-10 pb-3">
        <Badge className="w-fit rounded-full border-primary/30 bg-primary/10 text-[11px] font-semibold tracking-wide text-primary">
          {destaque}
        </Badge>
        <CardTitle className="mt-3 text-xl font-semibold leading-tight">
          {titulo}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 pt-0 overflow-hidden">
        <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line line-clamp-5">
          {texto}
        </p>
      </CardContent>

    </Card>
  );
}

export default CardsHome;
