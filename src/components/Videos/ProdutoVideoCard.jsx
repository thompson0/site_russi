import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import ProdutoVideo from "./ProdutoVideo";
import { PlayCircle, Clock } from "lucide-react";

export default function ProdutoVideoCard({ video, children }) {
  return (
    <Card className="group w-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 relative">
        <div className="relative aspect-video bg-muted overflow-hidden">
          <ProdutoVideo url={video.url} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Assistir</span>
            </div>
          </div>
        </div>
      </CardContent>

      {(video.titulo || video.descricao) && (
        <CardHeader className="p-5">
          {video.titulo && (
            <CardTitle className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {video.titulo}
            </CardTitle>
          )}

          {video.descricao && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              {video.descricao}
            </p>
          )}

          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">R</span>
              </div>
              <span>Russi Acessórios</span>
            </div>
            {video.duracao && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{video.duracao}</span>
                </div>
              </>
            )}
          </div>
        </CardHeader>
      )}

      {children && (
        <CardFooter className="flex justify-end gap-2 px-5 pb-5 pt-0">
          {children}
        </CardFooter>
      )}
    </Card>
  );
}
