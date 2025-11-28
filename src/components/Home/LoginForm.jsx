"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export function LoginForm(props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(`/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Erro no login, tente novamente.");
        setIsLoading(false);
        return;
      }

      if (data.permissao === "admin") {
        router.push("/admin");
      } else {
        router.push("/visitante");
      }
    } 
    
    catch (error) {
      console.error(error);
      setError("Erro no login, tente novamente.");
      setIsLoading(false);
    }
  };

  return (
    <Card
      className="w-full max-w-[90vw] sm:max-w-md bg-slate-900/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
      {...props}
    >
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <img 
            src="/logo.png" 
            alt="Russi Acessórios" 
            className="w-32 sm:w-40 md:w-48 h-auto mb-4"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-white">Bem vindo</h1>
          <p className="text-sm sm:text-base text-slate-400">
            Faça login na Russi
          </p>
        </div>

        <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-slate-300 text-sm sm:text-base">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="h-11 sm:h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="senha" className="text-slate-300 text-sm sm:text-base">
                Senha
              </Label>
              <a
                href="#"
                className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Esqueceu a senha?
              </a>
            </div>
            <Input
              id="senha"
              type="password"
              required
              value={senha}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="h-11 sm:h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full h-11 sm:h-12 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300"
          >
            {isLoading ? (
              <>
                <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin" />
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </Button>

          <p className="text-center text-xs sm:text-sm text-slate-500 mt-2">
            Problemas para acessar?{" "}
            <a href="/#contato" className="text-blue-400 hover:text-blue-300 transition-colors">
              Entre em contato
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
