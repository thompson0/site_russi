import DashboardProdutos from "@/components/Produto/DashboardProdutos";
import MostView from "@/components/Produto/MostView";

export default async function AdminPage({ children }) {


  return (
    <>

      <div>
        <MostView>
          
        </MostView>
      </div>
      <div>
      <DashboardProdutos>

      </DashboardProdutos>
      </div>


    </>

  );
}
