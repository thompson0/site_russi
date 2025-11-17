"use client";

import { useEffect, useState } from "react";
import AddVideo from "@/components/Videos/AddVideo";
import DeleteVideo from "@/components/Videos/DeleteVideo";
import EditVideo from "@/components/Videos/EditVideo";
import ProdutoVideoCard from "@/components/Videos/ProdutoVideoCard";
import { useRefresh } from "@/context/RefreshContext";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function AdminVideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(`${baseUrl}/api/videos?k=${refreshKey}`);
        if (!res.ok) throw new Error("Erro ao buscar vídeos");
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [refreshKey]);

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-gray-400 text-center mt-10">
          Carregando vídeos...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="w-full flex justify-end">
        <AddVideo
          onCreated={(novo) => {
            if (!novo) return;
            setVideos((prev) => [novo, ...prev]);
          }}
        />
      </div>

      {(!videos || videos.length === 0) && (
        <p className="text-sm text-muted-foreground">
          Nenhum vídeo disponível.
        </p>
      )}

      {videos && videos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v) => (
            <ProdutoVideoCard key={v.id} video={v}>
              <div className="flex gap-2 mt-2">
                <EditVideo
                  video={v}
                  onUpdated={(updated) => {
                    if (!updated) return;
                    setVideos((prev) =>
                      prev.map((item) =>
                        String(item.id) === String(updated.id)
                          ? { ...item, ...updated }
                          : item
                      )
                    );
                  }}
                />
                <DeleteVideo
                  id={v.id}
                  onDelete={(deletedId) => {
                    setVideos((prev) =>
                      prev.filter(
                        (item) => String(item.id) !== String(deletedId)
                      )
                    );
                  }}
                />
              </div>
            </ProdutoVideoCard>
          ))}
        </div>
      )}
    </div>
  );
}



