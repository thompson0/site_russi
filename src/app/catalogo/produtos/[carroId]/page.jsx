import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Package, QrCode, Play, Eye } from "lucide-react";
import ProdutoSearch from "./ProdutoSearch";

function serializeBigInt(data) {
  return JSON.parse(
    JSON.stringify(data, (_, v) => (typeof v === "bigint" ? Number(v) : v))
  );
}

export default async function CatalogoProdutosPorCarroPage({ params }) {
  const { carroId } = await params;
  
  let carroIdBig;
  try {
    carroIdBig = BigInt(carroId);
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">ID do carro inválido</p>
      </div>
    );
  }

  const [carro, produtos] = await Promise.all([
    prisma.carros.findUnique({
      where: { id: carroIdBig },
      include: { montadora: true },
    }),
    prisma.produtos.findMany({
      where: {
        carros: { some: { carro_id: carroIdBig } },
      },
      select: {
        id: true,
        nome: true,
        codigo: true,
        foto_url: true,
        video_url: true,
      },
      orderBy: { nome: 'asc' },
    }),
  ]);

  const serializedCarro = carro ? serializeBigInt(carro) : null;
  const serializedProdutos = serializeBigInt(produtos);

  const backLink = serializedCarro?.montadora_id 
    ? `/catalogo/montadoras/${serializedCarro.montadora_id}`
    : "/catalogo/montadoras";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar aos Veículos
        </Link>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {serializedCarro?.foto_url && (
              <div className="w-24 h-24 bg-white rounded-xl p-2 flex-shrink-0">
                <img
                  src={serializedCarro.foto_url}
                  alt={serializedCarro.nome}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                {serializedCarro?.montadora?.nome && (
                  <>
                    <span>{serializedCarro.montadora.nome}</span>
                    <span>•</span>
                  </>
                )}
                <span>{serializedCarro?.ano_de} - {serializedCarro?.ano_ate}</span>
                {serializedCarro?.versao && (
                  <>
                    <span>•</span>
                    <span>{serializedCarro.versao}</span>
                  </>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {serializedCarro?.nome || "Produtos"}
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                {serializedProdutos.length} produto{serializedProdutos.length !== 1 ? 's' : ''} disponíve{serializedProdutos.length !== 1 ? 'is' : 'l'}
              </p>
            </div>
          </div>
        </div>

        <ProdutoSearch produtos={serializedProdutos} />

        <div className="mt-8 flex justify-center">
          <Link
            href="/catalogo/montadoras"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/60 border border-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-700/60 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início do catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
