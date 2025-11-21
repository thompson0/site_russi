import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function CardsHome({ titulo, texto }) {
  return (
    <Card 
      className="
        w-96 h-80
        rounded-xl 
        shadow-md
        flex flex-col 
        text-start
        hover:shadow-lg 
        transition
        
      "
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {titulo}
        </CardTitle>
      </CardHeader>

      

      <CardContent
        className="
          overflow-y-auto 
          no-scrollbar
        "
      >
        <p className="text-sm text-muted-foreground">{texto}</p>
      </CardContent>
    </Card>
  );
}

export default CardsHome;
