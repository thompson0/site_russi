import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ProdutoVideo from "./ProdutoVideo";

export default function ProdutoVideoCard({ video }) {
  return (
    <Card className="w-full shadow-lg border rounded-xl overflow-hidden">
      <CardContent >
        <ProdutoVideo url={video.url} />
      </CardContent>

      {(video.titulo || video.descricao) && (
        <CardHeader>
          {video.titulo && (
            <CardTitle className="text-lg font-semibold">
              {video.titulo}
            </CardTitle>
          )}

          {video.descricao && (
            <p className="text-sm text-muted-foreground">{video.descricao}</p>
          )}
        </CardHeader>
      )}
    </Card>
  );
}
