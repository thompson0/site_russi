import SectionCard from "./SectionCard";
import NavHome from "./NavHome";
import CardsHome from "./CardsHome";
import { Separator } from "../ui/separator";
import WelcomeMessage from "./WelcomeMessage";



function HomePage() {
    return (
        <>
            <nav>
                <NavHome />
            </nav>

            <Separator className="my-1" />


            <div className="mt-2 sm:mt-4 lg:mt-5">

                <WelcomeMessage />
                <SectionCard
                    texto=""
                    titulo=""
                    variant="dark"
                >
                    <div className="w-full flex flex-wrap gap-5 items-center justify-center">

                        <CardsHome titulo=":" texto="...">

                        </CardsHome>
                        <CardsHome titulo=":" texto="...">

                        </CardsHome>
                        <CardsHome titulo=":" texto="...">

                        </CardsHome>
                    </div>

                </SectionCard>
                <div className="flex flex-col">
                    <SectionCard
                        titulo="Apresentação da Empresa"
                        texto="Nossa empresa nasceu da parceria com os principais distribuidores do mercado, com experiência de 35 anos no ramo de acessórios, dos quais 24 anos dedicados exclusivamente ao desenvolvimento de terceirização em Concessionárias de veículos, agregando valor e dinamismo a atividade.

Garantimos através de nossos fornecedores: assistência técnica e treinamento da equipe efetuada diretamente pelos principais fabricantes de acessórios, mantendo desta forma, atualização constante sobre os últimos lançamentos e tendências do mercado."
                        align="left"
                        variant="light"
                    />

                    <SectionCard
                        titulo="Os aspectos positivos da terceirização"
                        texto="Desburocratização da venda e pós venda de acessórios;

Alivia a estrutura organizacional cessionária (vendedoras, instaladores e emissão de Nota Fiscal);

Zero Estoque para o concessionário (temos estoque próprio, com entregas diárias);

Sem problemas com produtos de garantia (prazo por lei 90 dias, porem estendemos para 1 ano);

Maior especialização na prestação de serviços relativos a acessórios automotivos;

Diversificação de produtos;

Dedicação total ao cliente na parte dos acessórios;

Crescimento do volume de vendas;

- Pagamento ao concessionário a vista, independente da condição de pagamento do cliente

final."
                        align="right"
                        variant="dark"
                    />
                    <SectionCard
                        titulo="Nossa Estrutura"
                        texto="Nossa estrutura conta atualmente com:

215 Funcionários

2 Sedes administrativas próprias, totalizando 830 m2

Estoque 415 m2

108.790 mil produtos movimentados por ano"
                        align="center"
                        variant="light"
                    />

                </div>
            </div>

        </>
    );
}


export default HomePage;
