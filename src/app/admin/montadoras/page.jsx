import MontadoraCard from "../../../components/Montadora/MontadoraCard";


export default async function MontadorasPage() {
  return (
    <div className="dark flex flex-col w-full p-6 items-center">
      <div className="w-full max-w-6xl text-left">
        <h1 className="text-4xl font-bold mb-8 text-white text-center sm:text-left">Montadoras</h1>
        <MontadoraCard
        />
      </div>
    </div>
  );
}
