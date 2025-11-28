"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm(props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Erro no login, tente novamente.");
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
    }
  };

  return (
    <Card
      className="dark bg-card overflow-hidden p-0 w-full max-w-md mx-4 sm:mx-6 md:mx-auto lg:mx-0 "
      {...props}
    >
      <CardContent className=" dark p-6 flex flex-col gap-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="" />
          <h1 className="text-2xl font-bold">Bem vindo</h1>
          <p className="text-muted-foreground">
            Faça login na Russi
          </p>
        </div>

        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm underline-offset-2 hover:underline"
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
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <div className="relative text-center text-sm">
        
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
