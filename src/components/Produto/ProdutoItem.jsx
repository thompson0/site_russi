
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

function ProdutoItem({ produto }) {
    return (
        <Card>
            <CardContent>
                <img
                    src={`/static/${produto.foto_url}`}
                    alt={produto.nome}
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </CardContent>

            <CardFooter>
                <h2 className="text-lg font-semibold truncate">
                    {produto.nome}
                </h2>
            </CardFooter>
        </Card>
    );
}

export default ProdutoItem;