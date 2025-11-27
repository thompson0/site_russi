import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CardsHome({ titulo, texto, destaque = "Diferencial", icon }) {
  return (
    <Card className="group relative w-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 sm:hover:scale-105 hover:shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="relative z-10 pb-2 sm:pb-3 text-center pt-6 sm:pt-8 px-4 sm:px-6">
        {icon && (
          <div className="w-full flex justify-center mb-3 sm:mb-4">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors">
              {icon}
            </div>
          </div>
        )}

        <Badge className="mx-auto w-fit rounded-full border-blue-400/30 bg-blue-500/20 text-[10px] sm:text-[11px] font-semibold tracking-wide text-blue-300">
          {destaque}
        </Badge>

        <CardTitle className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold leading-tight text-white">
          {titulo}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 pt-0 pb-6 sm:pb-8 px-4 sm:px-6">
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300 whitespace-pre-line text-center">
          {texto}
        </p>
      </CardContent>
    </Card>
  );
}

export default CardsHome;
