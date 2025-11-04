import NavHome from "@/components/NavHome"
import SingleProduto from "@/components/Produto/SingleProduto"

export default async function VisitantePage({ params }) {
  const { id } = await params

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <header className="w-full flex justify-end p-4">
        <NavHome />
      </header>

      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <SingleProduto qrcode="true" id={id} />
        </div>
      </main>
    </div>
  )
}
