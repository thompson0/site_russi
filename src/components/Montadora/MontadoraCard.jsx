"use client";

import { useEffect, useState } from "react";
import { ProgressDemo } from "@/components/Home/ProgressDemo";
import Link from "next/link";
import { useRefresh } from "@/context/RefreshContext";
import AddMontadora from "./AddMontadora";
import EditMontadora from "./EditMontadora";
import DeleteMontadora from "./DeleteMontadora";

function MontadoraCard() {
  const [montadoras, setMontadoras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    async function fetchData() {
      try {
        const [montadorasRes, userRes] = await Promise.all([
          fetch(`/api/montadoras?k=${refreshKey}`),
          fetch("/api/me")
        ]);

        if (montadorasRes.ok) {
          const data = await montadorasRes.json();
          setMontadoras(data);
        }

        if (userRes.ok) {
          const userData = await userRes.json();
          setIsAdmin(userData.role === "admin");
        }
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [refreshKey]);

  if (loading)
    return (
      <div>
        <p className="text-center mt-10"> Carregando montadoras...</p>
        <ProgressDemo />
      </div>
    );

  return (
    <div className="flex flex-col gap-6">
      {isAdmin && (
        <div className="flex justify-end">
          <AddMontadora
            onCreated={(nova) => {
              if (!nova) return;
              setMontadoras((prev) => [nova, ...prev]);
            }}
          />
        </div>
      )}

      {montadoras.length === 0 ? (
        <p className="text-center mt-10 text-muted-foreground">
          {isAdmin 
            ? 'Nenhuma montadora encontrada. Clique em "Nova Montadora" para adicionar.'
            : 'Nenhuma montadora encontrada.'}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {montadoras.map((m) => (
            <div
              key={m.id}
              className="w-full h-80 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden bg-white group"
            >
              <Link href={`/admin/montadoras/${m.id}`} className="flex-1 flex items-center justify-center bg-gray-50">
                <img
                  src={m.logo_url || "/placeholder.png"}
                  alt={m.nome}
                  className="w-56 h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                  <Link href={`/admin/montadoras/${m.id}`}>
                    <h2 className="text-lg font-semibold truncate hover:text-blue-600 transition-colors">
                      {m.nome}
                    </h2>
                  </Link>
                  
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <EditMontadora
                        id={m.id}
                        onUpdated={(updated) => {
                          if (!updated) return;
                          setMontadoras((prev) =>
                            prev.map((item) =>
                              String(item.id) === String(updated.id) ? { ...item, ...updated } : item
                            )
                          );
                        }}
                      />
                      <DeleteMontadora
                        id={m.id}
                        nome={m.nome}
                        onDeleted={(deletedId) => {
                          setMontadoras((prev) =>
                            prev.filter((item) => String(item.id) !== String(deletedId))
                          );
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MontadoraCard;
