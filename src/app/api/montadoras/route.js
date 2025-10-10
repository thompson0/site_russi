import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Montadora from "@/models/Montadora";

export async function GET() {
    try {
        await connectDB()
        const montadoras = await Montadora.find()

        return NextResponse.json(montadoras, {
            status: 200,
            headers: {
                "Cache-Control": "public, max-age=60, stale-while-revalidate=120",
            },
        });
    } catch (error) {
        console.error("Erro ao buscar montadoras:", error);
        return NextResponse.json(
            { message: "Erro ao buscar montadoras" },
            { status: 500 }
        )
    }
}