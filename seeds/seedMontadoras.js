import mongoose from "mongoose";
import Montadora from "../src/models/Montadora.js";
import { connectDB } from "../src/lib/db.js";
import dotenv from "dotenv"

dotenv.config();

console.log("MONGODB_URI:", process.env.DB_CONNECTION_STRING);
const montadoras = [
  {
    nome: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png",
  },
  {
    nome: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
  },
  {
    nome: "Volkswagen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
  },
  {
    nome: "Chevrolet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Chevrolet_logo.png",
  },
  {
    nome: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_logo.svg",
  },
];

async function seed() {
  try {
    await connectDB();
    await Montadora.deleteMany(); 
    await Montadora.insertMany(montadoras);
    console.log("Montadoras inseridas com sucesso!");
  } catch (err) {
    console.error("Erro ao inserir montadoras:", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
