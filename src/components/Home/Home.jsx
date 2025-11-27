import NavHome from "./NavHome";
import HeroSection from "./HeroSection";
import CardsHome from "./CardsHome";
import Footer from "./Footer";
import ContactForms from "./ContactForm";
import { Building2, GraduationCap, Car, CheckCircle2, Truck, Shield, Users, Headphones } from "lucide-react";
import Image from "next/image";

const beneficios = [
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        titulo: "Desburocratização",
        texto: "Simplificamos a venda e pós-venda de acessórios para sua concessionária"
    },
    {
        icon: <Truck className="w-6 h-6" />,
        titulo: "Zero Estoque",
        texto: "Estoque próprio com entregas diárias, sem necessidade de investimento"
    },
    {
        icon: <Shield className="w-6 h-6" />,
        titulo: "Garantia Estendida",
        texto: "1 ano de garantia em todos os produtos, muito além dos 90 dias legais"
    },
    {
        icon: <Headphones className="w-6 h-6" />,
        titulo: "Suporte Total",
        texto: "Dedicação exclusiva ao cliente na parte de acessórios automotivos"
    },
];

const diferenciais = [
    {
        titulo: "Nossa Estrutura",
        texto: "215 Funcionários, 2 sedes administrativas próprias (830 m²), estoque de 415 m² e mais de 108 mil produtos movimentados por ano.",
        icon: <Building2 size={32} className="text-blue-500" />,
        destaque: "Estrutura"
    },
    {
        titulo: "Treinamento Contínuo",
        texto: "Capacitação recorrente com fabricantes e distribuidores para manter nossa equipe sempre atualizada.",
        icon: <GraduationCap size={32} className="text-emerald-500" />,
        destaque: "Capacitação"
    },
    {
        titulo: "Marcas Atendidas",
        texto: "Hyundai, Chery, Honda, Ford, Chevrolet, Subaru, Toyota, Volkswagen, GWM e grupos como CAOA, D21 Motors, Tsusho.",
        icon: <Car size={32} className="text-purple-500" />,
        destaque: "Parcerias"
    }
];

function HomePage() {
    return (
        <div className="min-h-screen">
            <NavHome />
            
            <HeroSection />

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Quem Somos
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                            Sobre a Russi Acessórios
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Nossa empresa nasceu da parceria com os principais distribuidores do mercado, 
                            com experiência de 35 anos no ramo de acessórios automotivos.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/sectionimg.png"
                                    alt="Russi Acessórios Timeline"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <div className="text-center text-white">
                                    <div className="text-3xl font-bold">35</div>
                                    <div className="text-xs">Anos</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                São 24 anos dedicados exclusivamente ao desenvolvimento de terceirização 
                                em Concessionárias de veículos, agregando valor e dinamismo à atividade.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Garantimos através de nossos fornecedores: assistência técnica e treinamento 
                                da equipe efetuada diretamente pelos principais fabricantes de acessórios.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {beneficios.map((beneficio, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            {beneficio.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{beneficio.titulo}</h4>
                                            <p className="text-sm text-muted-foreground">{beneficio.texto}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                            Nossos Diferenciais
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                            Por que escolher a Russi?
                        </h2>
                        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                            Oferecemos uma estrutura completa para atender às necessidades 
                            da sua concessionária com excelência.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {diferenciais.map((card, index) => (
                            <CardsHome 
                                key={index} 
                                titulo={card.titulo} 
                                texto={card.texto} 
                                icon={card.icon}
                                destaque={card.destaque}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contato" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                                Entre em Contato
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                Vamos conversar sobre sua concessionária
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Estamos prontos para apresentar nossas soluções e mostrar 
                                como podemos agregar valor ao seu negócio.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Atendimento Personalizado</h4>
                                        <p className="text-sm text-muted-foreground">Equipe dedicada para sua empresa</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">Resposta Rápida</h4>
                                        <p className="text-sm text-muted-foreground">Retornamos em até 24 horas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background rounded-2xl shadow-2xl p-8">
                            <ContactForms />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;
