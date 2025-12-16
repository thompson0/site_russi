"use client";

import { useEffect, useState, useCallback } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoadingGrid, LoadingSpinner } from "@/components/ui/LoadingSpinner";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useRefresh } from "@/context/RefreshContext";
import EditProduto from "./EditProduto";
import DeleteProduto from "./DeleteProduto";
import AddProduto from "./AddProduto";

const ITEMS_PER_PAGE = 12;

export default function AllProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pagination, setPagination] = useState(null);
  const { refreshKey } = useRefresh();

  const fetchProdutos = useCallback(async (page = 1, append = false) => {
    try {
      if (page === 1) setLoading(true);
      else setLoadingMore(true);

      const res = await fetch(
        `/api/catalogo/produtos?page=${page}&limit=${ITEMS_PER_PAGE}&k=${refreshKey}`
      );
      if (!res.ok) throw new Error("Erro ao buscar produtos");
      const data = await res.json();

      if (append) {
        setProdutos((prev) => [...prev, ...data.produtos]);
      } else {
        setProdutos(data.produtos);
      }
      setPagination(data.pagination);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [refreshKey]);

  useEffect(() => {
    fetchProdutos(1, false);
  }, [fetchProdutos]);

  const loadMore = () => {
    if (pagination?.hasMore && !loadingMore) {
      fetchProdutos(pagination.page + 1, true);
    }
  };

  const handleCreated = (novo) => {
    if (!novo) return;
    setProdutos((prev) => [novo, ...prev]);
    if (pagination) {
      setPagination((prev) => ({
        ...prev,
        total: prev.total + 1,
      }));
    }
  };

  if (loading)
    return (
      <div className="space-y-6">
        <p className="text-gray-400 text-center">Carregando produtos...</p>
        <LoadingGrid count={6} />
      </div>
    );

  if (produtos.length === 0)
    return (
      <div className="flex flex-col gap-6">
        <p className="text-gray-400 text-center mt-10">Nenhum produto encontrado.</p>
        <div className="flex justify-end px-4">
          <AddProduto Allprodutos={true} onCreated={handleCreated} />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center px-4">
        <p className="text-sm text-muted-foreground">
          Mostrando {produtos.length} de {pagination?.total || produtos.length} produtos
        </p>
        <AddProduto Allprodutos={true} onCreated={handleCreated} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((p, index) => (
          <Card 
            key={p.id} 
            className="group overflow-hidden hover-lift animate-fadeInUp opacity-0"
            style={{ 
              animationDelay: `${Math.min((index % ITEMS_PER_PAGE) * 50, 300)}ms`, 
              animationFillMode: 'forwards' 
            }}
          >
            <CardHeader className="p-0 cursor-pointer overflow-hidden">
              <OptimizedImage
                src={p.foto_url}
                alt={p.nome}
                className="p-3 group-hover:scale-105 transition-transform duration-300"
                containerClassName="h-48"
                aspectRatio=""
              />
            </CardHeader>

            <CardContent className="text-center">
              <h2 className="text-lg font-semibold truncate">{p.nome}</h2>
              {p.codigo && (
                <p className="text-sm text-muted-foreground">Código: {p.codigo}</p>
              )}
            </CardContent>

            <CardFooter className="flex flex-col items-center text-sm text-muted-foreground gap-3">
              <Link href={`/admin/produto/${p.id}`} className="underline hover:no-underline">
                Ver detalhes
              </Link>
              <div className="flex gap-4 justify-center">
                <EditProduto produto={p} />
                <DeleteProduto produtoId={p.id} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {pagination?.hasMore && (
        <div className="flex justify-center py-6">
          <Button
            onClick={loadMore}
            disabled={loadingMore}
            variant="outline"
            size="lg"
            className="min-w-[200px]"
          >
            {loadingMore ? (
              <>
                <LoadingSpinner size="sm" />
                <span className="ml-2">Carregando...</span>
              </>
            ) : (
              `Carregar mais (${pagination.total - produtos.length} restantes)`
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
