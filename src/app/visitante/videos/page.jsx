import ProdutoVideoCard from "@/components/Videos/ProdutoVideoCard";

export const revalidate = 60;

async function getVideos() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/videos`, { next: { revalidate } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function VideosPage() {
  const videos = await getVideos();
  if (!videos?.length) {
    return (
      <p className="text-sm text-muted-foreground">Nenhum vídeo disponível.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {videos.map((v) => (
        <ProdutoVideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
