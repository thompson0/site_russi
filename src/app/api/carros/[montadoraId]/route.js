import { connectDB } from "@/lib/db";
import Carro from "@/models/Carro.js";
import mongoose from "mongoose";

export async function GET(req, { params }) {
  
  try {
    await connectDB();
    const { montadoraId } = await params;

    if (!mongoose.Types.ObjectId.isValid(montadoraId)) {
      return new Response(
        JSON.stringify({ message: "ID inválido" }),
        { status: 400 }
      );
    }

    const carros = await Carro.find({ montadoraId });
    return new Response(JSON.stringify(carros), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao buscar carros:", error);
    return new Response(
      JSON.stringify({ message: "Erro ao buscar carros" }),
      { status: 500 }
    );
  }
}
