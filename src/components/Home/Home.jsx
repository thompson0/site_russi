import SectionCard from "./SectionCard";
import NavHome from "./NavHome";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Banner from "./Banner";
import CardsHome from "./CardsHome";

const cardsConteudo = [
    {
        titulo: "Nossa estrutura conta atualmente com",
        texto: "215 Funcionários 2 Sedes administrativas próprias, totalizando 830 m2 Estoque 415 m2 108.790 mil produtos movimentados por ano "
    },
    {
        titulo: "Treinamento continuo",
        texto: "Capacitacao recorrente com fabricantes e distribuidores para manter a equipe pronta para os lancamentos."
    },
    {
        titulo: "Sobre a Russi Acessórios",
        texto: "Atendemos as principais bandeiras (Hyundai, Chery, Honda, Ford, Chevrolet, Subaru, Toyota, Volkswagen, GWM) e grupos renomados (CAOA, D21 Motors, Tsusho, ABA Motors, Vigorito, Sonnervig, Alta, Hpoint). Com a Russi, sua concessionária ganha um parceiro que preza por excelência, agilidade e tranquilidade. Oferecemos garantia de 1 ano em todos os produtos instalados."
    }
];

function HomePage() {
    return (
        <>
            <nav>
                <NavHome />
            </nav>

            <Separator className="my-1" />

            <div className="flex flex-col">

                <Banner
                    titulo="Apresentação da Empresa"
                    descricao="Nossa empresa nasceu da parceria com os principais distribuidores do mercado, com experiência de 35 anos no ramo de acessórios, dos quais 24 anos dedicados exclusivamente ao desenvolvimento de terceirização em Concessionárias de veículos, agregando valor e dinamismo a atividade.

Garantimos através de nossos fornecedores: assistência técnica e treinamento da equipe efetuada diretamente pelos principais fabricantes de acessórios, mantendo desta forma, atualização constante sobre os últimos lançamentos e tendências do mercado."
                    badge1="35 anos no ramo"
                    badge2="24 anos de Especialistas em terceirização automotiva"
                    buttonPrimary="Converse conosco"
                    buttonSecondary="Assista aos videos"
                    image="/banner.jpeg"
                    variant="dark"
                />
                <Separator className="my-4" />
            </div>
            <SectionCard
                titulo="Apresentação da Empresa"
                texto="Nossa empresa nasceu da parceria com os principais distribuidores do mercado, com experiência de 35 anos no ramo de acessórios, dos quais 24 anos dedicados exclusivamente ao desenvolvimento de terceirização em Concessionárias de veículos, agregando valor e dinamismo a atividade.

Garantimos através de nossos fornecedores: assistência técnica e treinamento da equipe efetuada diretamente pelos principais fabricantes de acessórios, mantendo desta forma, atualização constante sobre os últimos lançamentos e tendências do mercado."
                align="center"
                variant="light"
            />


            <SectionCard align="center" variant="dark" sectionWidth="boxed">
                <div className="flex flex-row gap-5 ">
                    {cardsConteudo.map((card) => (
                        <CardsHome key={card.titulo} titulo={card.titulo} texto={card.texto} />
                    ))}
                </div>
            </SectionCard>

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
                align="center"
                variant="light"
            />

        </>
    );
}


export default HomePage;
