import { ArrowLeft } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="inline-flex items-center gap-2 text-slate-400 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar aos Veículos</span>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-6 animate-pulse">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-24 h-24 bg-slate-700 rounded-xl flex-shrink-0" />
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-slate-700 rounded w-48" />
              <div className="h-8 bg-slate-700 rounded w-64" />
              <div className="h-4 bg-slate-700 rounded w-32" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-px bg-gray-100 mt-3" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
