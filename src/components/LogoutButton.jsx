"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton({ showLabel = true }) {
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-red-400 hover:bg-slate-700/50 rounded-lg transition-colors"
    >
      <LogOut className="w-4 h-4" />
      {showLabel && <span className="hidden sm:inline">Sair</span>}
    </button>
  );
}
