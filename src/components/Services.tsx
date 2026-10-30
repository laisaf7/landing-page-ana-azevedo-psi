import React from 'react';
import { Leaf, Lectern, BrainCircuit, User, Heart, RefreshCw } from 'lucide-react';
import ServiceCard from './ServiceCard';
import Reveal from './Reveal';

const SERVICES = [
    {
        icon: Leaf,
        title: 'Psicoterapia Individual',
        description: 'Sessões individuais focadas no seu processo particular, suas emoções, relacionamentos e padrões de comportamento. Um espaço para se conhecer profundamente.',
    },
    {
        icon: BrainCircuit,
        title: 'Terapia para Ansiedade',
        description: 'Estratégias baseadas em evidências para compreender e trabalhar a ansiedade, desenvolvendo recursos internos para o dia a dia.',
    },
    {
        icon: User,
        title: 'Autoconhecimento',
        description: 'Um processo de descoberta de si mesmo, seus valores, desejos e limites. Para quem busca uma vida com mais sentido e autenticidade.',
    },
    {
        icon: Heart,
        title: 'Luto e Perdas',
        description: 'Suporte cuidadoso nos processos de luto — perda de pessoas, relacionamentos, fases da vida — com presença e acolhimento.',
    },
    {
        icon: RefreshCw,
        title: 'Transições de Vida',
        description: 'Apoio em momentos de mudança: carreira, relacionamentos, maternidade, novos começos. Para atravessar transformações com mais clareza.',
    },
    {
        icon: Lectern,
        title: 'Palestras e Projetos Psicoeducativos',
        description: 'Palestras, rodas de conversa e ações voltadas à promoção da saúde mental e ao desenvolvimento emocional em empresas, escolas e instituições. ',
    },
];

export default function Services() {
    return (
        <section id="servicos" className="py-20 lg:py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <p className="text-accent font-script text-3xl mb-2">Do seu jeito, no seu tempo</p>
                    <h2 className="text-4xl font-serif text-gray-900">Serviços oferecidos</h2>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-6"></div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        // delay por coluna: os cards de cada linha entram em sequência
                        <Reveal key={service.title} delay={(index % 3) * 120} className="h-full">
                            <ServiceCard {...service} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}