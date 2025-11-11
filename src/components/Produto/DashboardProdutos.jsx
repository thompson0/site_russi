"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/api/catalogo/produtos")
      .then((res) => res.json())
      .then(setProdutos);
  }, []);


  const data = [...produtos]
    .sort((a, b) => b.views - a.views)
    .slice(0, 8)
    .map((p) => ({
      nome: p.nome.length > 14 ? p.nome.slice(0, 14) + "…" : p.nome,
      views: p.views,
    }));

  return (
    <div className="p-6 space-y-6">
      <Card className="shadow-sm border border-border/50">
        <CardHeader>
          <CardTitle>Produtos mais acessados</CardTitle>
          <CardDescription>
            Ranking dos produtos com mais visualizações
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-4">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="nome"
                  tick={{ fontSize: 12 }}
                  angle={-15}
                  textAnchor="end"
                  height={50}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.1)" }} 
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.6)", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                    backdropFilter: "blur(6px)",
                  }}
                  labelStyle={{ color: "white" }} 
                  itemStyle={{ color: "white" }} 
                />
                <Bar
                  dataKey="views"
                  fill="hsl(var(--background))" 
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground">Nenhum dado disponível</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
