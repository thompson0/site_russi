import { connectDB } from "@/lib/db";
import Montadora from "@/models/Montadora";
import MontadoraCard from "../../../components/Montadora/MontadoraCard";
import Link from "next/link";

export default async function MontadorasPage() {
  await connectDB();
  const montadoras = await Montadora.find();

  return (
    <div className="dark flex flex-col w-full p-6 items-center">
      <div className="w-full max-w-6xl text-left">
        <h1 className="text-4xl font-bold mb-8 text-white text-center sm:text-left">Montadoras</h1>
        {montadoras.length === 0 ? (
          <p className="text-gray-400">Nenhuma montadora encontrada.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center sm:justify-items-start" >
            {montadoras.map((m) => (
              <li key={m._id} className="list-none">
                <Link href={`/admin/montadoras/${m._id.toString()}`}>
                  <MontadoraCard
                    nome={m.nome}
                    logo={m.logo}
                    id={m._id.toString()}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
