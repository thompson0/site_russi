import SectionCard from "./SectionCard";
import NavHome from "./NavHome";
import { Separator } from "../ui/separator";

import Banner from "./Banner";
import CardsHome from "./CardsHome";
import Footer from "./Footer";
import { Building2, GraduationCap, Car } from "lucide-react";
import ContactForms from "./ContactForm";

const cardsConteudo = [
    {
        titulo: "Nossa estrutura conta atualmente com",
        texto: `• 215 Funcionários
• 2 Sedes administrativas próprias (830 m²)
• Estoque de 415 m²
• 108.790 mil produtos movimentados por ano`,
        icon: <Building2 size={32} className="text-primary" />
    },

    {
        titulo: "Treinamento continuo",
        texto: "Capacitação recorrente com fabricantes e distribuidores para manter a equipe pronta para os lançamentos.",
        icon: <GraduationCap size={32} className="text-primary" />
    },

    {
        titulo: "Sobre a Russi Acessórios",
        texto: "Atendemos as principais bandeiras (Hyundai, Chery, Honda, Ford, Chevrolet, Subaru, Toyota, Volkswagen, GWM) e grupos renomados (CAOA, D21 Motors, Tsusho, ABA Motors, Vigorito, Sonnervig, Alta, Hpoint).",
        icon: <Car size={32} className="text-primary" />
    }
];
function HomePage() {
    return (
        <>
            <nav>
                <NavHome />
            </nav>

            <Separator className="my-4" />

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
                    variant="light"
                />
                <Separator className="my-4" />
            </div>
            <div>
                <SectionCard
                    image="/sectionimg.png"
                    imagePosition="left"
                    imageWidth="lg" 
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
                    variant="dark"
                />
            </div>

            <Separator  className="my-2" />

            <SectionCard align="center" variant="light" sectionWidth="boxed">
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cardsConteudo.map((card) => (
                        <CardsHome key={card.titulo} titulo={card.titulo} texto={card.texto} icon={card.icon} />
                    ))}
                </div>
            </SectionCard>
                    <SectionCard align="center" variant="dark">
                        <div className="flex flex-row justify-center">

                        <ContactForms>

                        </ContactForms>
                        </div>
                    </SectionCard>

            <Footer></Footer>
        </>
    );
}


export default HomePage;
