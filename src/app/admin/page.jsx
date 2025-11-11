import LastCarro from "@/components/Carro/LastCarro";
import DashboardProdutos from "@/components/Produto/DashboardProdutos";
import LastProduto from "@/components/Produto/LastProduto";
import MostView from "@/components/Produto/MostView";

export default async function AdminPage({ children }) {


  return (
    <>

      <div className="flex flex-row w-full gap-4">
        <div className="flex-1">
          <LastCarro />
        </div>
        <div className="flex-1">
          <LastProduto />
        </div>
        <div className="flex-1">
          <MostView />
        </div>
      </div>

      <DashboardProdutos>

      </DashboardProdutos>



    </>

  );
}
