"use client";

import NavHome from "./NavHome";
import HeroSection from "./HeroSection";
import CardsHome from "./CardsHome";
import Footer from "./Footer";
import ContactForms from "./ContactForm";
import Timeline from "./Timeline";
import AspectosPositivos from "./AspectosPositivos";
import FloatingElements from "./FloatingElements";
import AnimatedSection from "./AnimatedSection";
import InteractiveCard from "./InteractiveCard";
import { 
  BuildingOffice2Icon, 
  AcademicCapIcon, 
  TruckIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  UserGroupIcon 
} from "@heroicons/react/24/outline";
import Image from "next/image";

const beneficios = [
    {
        icon: <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
        titulo: "Desburocratização",
        texto: "Desburocratização da venda e pós venda de acessórios"
    },
    {
        icon: <TruckIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
        titulo: "Zero Estoque",
        texto: "Zero Estoque para o concessionário (temos estoque próprio, com entregas diárias)"
    },
    {
        icon: <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
        titulo: "Garantia Estendida",
        texto: "Sem problemas com produtos de garantia (prazo por lei 90 dias, porem estendemos para 1 ano)"
    },
    {
        icon: <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
        titulo: "Suporte Total",
        texto: "Dedicação total ao cliente na parte dos acessórios"
    },
];

const diferenciais = [
    {
        titulo: "Nossa Estrutura",
        texto: "215 Funcionários, 2 sedes administrativas próprias (830 m²), estoque de 415 m² e mais de 108 mil produtos movimentados por ano.",
        icon: <BuildingOffice2Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />,
        destaque: "Estrutura"
    },
    {
        titulo: "Treinamento Contínuo",
        texto: "Capacitação recorrente com fabricantes e distribuidores para manter nossa equipe sempre atualizada.",
        icon: <AcademicCapIcon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />,
        destaque: "Capacitação"
    },
    {
        titulo: "Marcas Atendidas",
        texto: "Hyundai, Chery, Honda, Ford, Chevrolet, Subaru, Toyota, Volkswagen, GWM",
        icon: <TruckIcon className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />,
        destaque: "Parcerias"
    }
];

function HomePage() {
    return (
        <div className="min-h-screen relative">
            <FloatingElements />
            <NavHome />
            
            <HeroSection />

            <AnimatedSection animation="fadeUp">
                <Timeline />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={100}>
                <AspectosPositivos />
            </AnimatedSection>

            <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection animation="fadeUp" className="text-center mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Apresentação
                        </span>
                        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                            Apresentação da Empresa
                        </h2>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                            Conheça a história, valores e compromissos da Russi Acessórios
                        </p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <AnimatedSection animation="fadeLeft" delay={200} className="relative order-2 lg:order-1">
                            <InteractiveCard className="rounded-2xl" glowColor="blue">
                                <div className="relative h-[280px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/sectionimg.png"
                                        alt="Russi Acessórios Timeline"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-contain"
                                    />
                                </div>
                            </InteractiveCard>
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-default group">
                                <div className="text-center text-white">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold group-hover:scale-110 transition-transform">35</div>
                                    <div className="text-[10px] sm:text-xs">Anos</div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeRight" delay={300} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Nossa empresa nasceu da parceria com os principais distribuidores do mercado, com experiência de 35 anos no ramo de acessórios, dos quais 24 anos dedicados exclusivamente ao desenvolvimento de terceirização em Concessionárias de veículos, agregando valor e dinamismo a atividade.
                            </p>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Garantimos através de nossos fornecedores: assistência técnica e treinamento da equipe efetuada diretamente pelos principais fabricantes de acessórios, mantendo desta forma, atualização constante sobre os últimos lançamentos e tendências do mercado.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                                {beneficios.map((beneficio, index) => (
                                    <InteractiveCard key={index} glowColor="blue">
                                        <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-accent/50 hover:bg-accent transition-all duration-300 group cursor-default">
                                            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                                {beneficio.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">{beneficio.titulo}</h4>
                                                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{beneficio.texto}</p>
                                            </div>
                                        </div>
                                    </InteractiveCard>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div 
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection animation="fadeUp" className="text-center mb-10 sm:mb-16">
                        <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
                            Nossos Diferenciais
                        </span>
                        <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold">
                            Por que escolher a Russi?
                        </h2>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-2">
                            Oferecemos uma estrutura completa para atender às necessidades 
                            da sua concessionária com excelência.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {diferenciais.map((card, index) => (
                            <AnimatedSection key={index} animation="fadeUp" delay={index * 150}>
                                <CardsHome 
                                    titulo={card.titulo} 
                                    texto={card.texto} 
                                    icon={card.icon}
                                    destaque={card.destaque}
                                />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <AnimatedSection animation="fadeLeft" className="space-y-4 sm:space-y-6 text-center lg:text-left">
                            <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                                Entre em Contato
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                                Vamos conversar sobre sua concessionária
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground">
                                Estamos prontos para apresentar nossas soluções e mostrar 
                                como podemos agregar valor ao seu negócio.
                            </p>
                            
                            <div className="space-y-3 sm:space-y-4">
                                <InteractiveCard glowColor="blue">
                                    <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start p-2 rounded-lg group cursor-default">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <UserGroupIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-blue-600 transition-colors">Atendimento Personalizado</h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">Equipe dedicada para sua empresa</p>
                                        </div>
                                    </div>
                                </InteractiveCard>
                                <InteractiveCard glowColor="emerald">
                                    <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start p-2 rounded-lg group cursor-default">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-emerald-600 transition-colors">Resposta Rápida</h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">Retornamos em até 24 horas</p>
                                        </div>
                                    </div>
                                </InteractiveCard>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeRight" delay={200}>
                            <InteractiveCard glowColor="indigo" className="rounded-xl sm:rounded-2xl">
                                <div className="bg-background rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 hover:shadow-blue-500/10 transition-shadow duration-500">
                                    <ContactForms />
                                </div>
                            </InteractiveCard>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default HomePage;
