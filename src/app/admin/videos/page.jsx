import AddVideo from "@/components/Videos/AddVideo";
import DeleteVideo from "@/components/Videos/DeleteVideo";
import EditVideo from "@/components/Videos/EditVideo";
import ProdutoVideoCard from "@/components/Videos/ProdutoVideoCard";

export const revalidate = 60;

async function getVideos() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/videos`, {
      next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function AdminVideosPage() {
  const videos = await getVideos();

  return (
    <div className="p-6 space-y-6">

      <div className="w-full flex justify-end">
        <AddVideo />
      </div>

      {(!videos || videos.length === 0) && (
        <p className="text-sm text-muted-foreground">
          Nenhum vídeo disponível.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((v) => (
          <ProdutoVideoCard key={v.id} video={v}>
            <div className="flex gap-2 mt-2">
              <EditVideo video={v} />
              <DeleteVideo id={v.id} />
            </div>
          </ProdutoVideoCard>
        ))}
      </div>
    </div>
  );
}
