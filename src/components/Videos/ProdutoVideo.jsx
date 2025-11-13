import { Card, CardContent } from "@/components/ui/card";

function ProdutoVideo({ url }) {
  if (!url) return null;

  // Detecta embed
  const isEmbed = url.includes("embed");
  let finalUrl = url;

  if (!isEmbed) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");

      if (videoId) {
        finalUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    } catch {
      console.error("URL de vídeo inválida:", url);
      return null;
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md border rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={finalUrl}
            className="absolute top-0 left-0 w-full h-full rounded-b-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProdutoVideo;
