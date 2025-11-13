// components/Videos/ProdutoVideo.jsx

import { Card } from "@/components/ui/card";

function ProdutoVideo({ url }) {
  if (!url) return null;

  const isEmbed = url.includes("embed");
  let finalUrl = url;

  if (!isEmbed) {
    try {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      if (videoId) finalUrl = `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return null;
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={finalUrl}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default ProdutoVideo;
