import { connectDB } from "@/lib/db";
import Montadora from "@/models/Montadora";
import MontadoraCard from "../../../components/Montadora/MontadoraCard";
import Link from "next/link";
import { SheetMontadora } from "@/components/Montadora/SheetMontadora";
export const revalidate = 60;
export default async function MontadorasPage() {
    await connectDB();
    const montadoras = await Montadora.find();

    return (
        <div className="dark flex flex-col items-center w-full p-6">
            <section className="">
                <h1 className="text-3xl font-bold mb-8 text-center text-white">
                    Montadoras
                </h1>

                {montadoras.length === 0 ? (
                    <p className="text-gray-400">Nenhuma montadora encontrada.</p>
                ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center justify-center">
                        {montadoras.map((m) => (
                 
                                <li key={m._id} className="list-none">
                                    <Link href={`/admin/montadoras/${m._id.toString()}`}>
                                        <MontadoraCard nome={m.nome} logo={m.logo} id={m._id.toString()} />
                                    </Link>
                                    <SheetMontadora nome={m.nome} montadoraId={m._id.toString()} />
                                </li>
                   
                        ))}
                    </ul>
                )}
            </section>
        </div>

    );
}
